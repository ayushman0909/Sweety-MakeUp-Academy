const GOOGLE_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export async function submitBooking(formData) {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error(
      "Google Sheets URL is not configured."
    );
  }

  const response = await fetch(
    GOOGLE_SCRIPT_URL,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "text/plain;charset=utf-8",
      },

      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to submit enquiry."
    );
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(
      result.error ||
        "Something went wrong."
    );
  }

  return result;
}