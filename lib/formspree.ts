export type SubmitState = 'idle' | 'pending' | 'success' | 'error';

export async function submitToFormspree(
  endpoint: string,
  data: Record<string, string>
): Promise<{ ok: boolean; message: string }> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { ok: true, message: 'Thanks for reaching out — I\'ll get back to you soon.' };
    }

    const body = await response.json().catch(() => null);
    const errorMessage =
      body?.errors?.map((e: { message: string }) => e.message).join(', ') ||
      'Something went wrong sending your message. Please try again or email me directly.';
    return { ok: false, message: errorMessage };
  } catch {
    return {
      ok: false,
      message: 'Network error — please check your connection and try again, or email me directly.',
    };
  }
}
