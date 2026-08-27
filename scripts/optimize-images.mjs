// Build-time image pipeline. Static export can't run Next's on-demand image
// optimization API, so every size we need is pre-generated here instead.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..');
const SOURCE = path.join(ROOT, 'images', 'profile.png');
const PUBLIC = path.join(ROOT, 'public');
const PUBLIC_IMAGES = path.join(PUBLIC, 'images');

function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

// Wraps a PNG buffer in a minimal valid ICO container (browsers support
// PNG-compressed icon frames), avoiding an extra dependency just for .ico.
function pngToIco(pngBuffer, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // 1 image

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // color count
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8); // size of image data
  entry.writeUInt32LE(22, 12); // offset of image data

  return Buffer.concat([header, entry, pngBuffer]);
}

async function main() {
  if (!existsSync(SOURCE)) {
    console.warn(`[optimize-images] source not found at ${SOURCE}, skipping.`);
    return;
  }

  ensureDir(PUBLIC_IMAGES);

  const source = sharp(SOURCE);

  // Responsive avatar/profile variants used across the header + about section.
  const sizes = [64, 320, 640, 1024];
  await Promise.all(
    sizes.map((size) =>
      source
        .clone()
        .resize(size, size, { fit: 'cover' })
        .webp({ quality: 82 })
        .toFile(path.join(PUBLIC_IMAGES, `profile-${size}.webp`))
    )
  );

  // Favicon set — a square crop resized down from the same source.
  const favicon16 = await source.clone().resize(16, 16, { fit: 'cover' }).png().toBuffer();
  const favicon32 = await source.clone().resize(32, 32, { fit: 'cover' }).png().toBuffer();
  const appleTouchIcon = await source
    .clone()
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toBuffer();
  const androidIcon192 = await source
    .clone()
    .resize(192, 192, { fit: 'cover' })
    .png()
    .toBuffer();
  const androidIcon512 = await source
    .clone()
    .resize(512, 512, { fit: 'cover' })
    .png()
    .toBuffer();

  writeFileSync(path.join(PUBLIC, 'favicon-16x16.png'), favicon16);
  writeFileSync(path.join(PUBLIC, 'favicon-32x32.png'), favicon32);
  writeFileSync(path.join(PUBLIC, 'apple-touch-icon.png'), appleTouchIcon);
  writeFileSync(path.join(PUBLIC, 'android-chrome-192x192.png'), androidIcon192);
  writeFileSync(path.join(PUBLIC, 'android-chrome-512x512.png'), androidIcon512);
  writeFileSync(path.join(PUBLIC, 'favicon.ico'), pngToIco(favicon32, 32));

  // Social share card: profile photo centered on the brand accent color.
  const ogPhoto = await source.clone().resize(360, 360, { fit: 'cover' }).png().toBuffer();
  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: '#4f46e5' },
  })
    .composite([{ input: ogPhoto, top: 135, left: 90 }])
    .png()
    .toFile(path.join(PUBLIC, 'og-image.png'));

  const manifest = {
    name: 'Akshar Raikanti',
    short_name: 'Akshar Raikanti',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#4f46e5',
    background_color: '#fafaf9',
    display: 'standalone',
  };
  writeFileSync(path.join(PUBLIC, 'site.webmanifest'), JSON.stringify(manifest, null, 2));

  console.log('[optimize-images] generated profile variants, favicon set, and og-image.png');
}

main().catch((error) => {
  console.error('[optimize-images] failed:', error);
  process.exitCode = 1;
});
