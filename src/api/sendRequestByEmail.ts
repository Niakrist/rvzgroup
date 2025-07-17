export const sendRequestByEmail = async (formData: FormData) => {
  try {
    const response = await fetch("https://rvzgroup.ru/api/v1/send-email", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(
        `Ошибка отправки: ${errorData.message || "Неизвестная ошибка"}`
      );
    }
  } catch (error) {
    console.error("Ошибка отправки:", error);
  }
};
