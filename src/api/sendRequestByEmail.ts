export const sendRequestByEmail = async (formData: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/send-email`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(`Ошибка отправки: ${errorData.message || "Неизвестная ошибка"}`);
    }
  } catch (error) {
    console.error("Ошибка отправки:", error);
  }
};
