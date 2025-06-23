export const sendRequestByEmail = async (formData: FormData) => {
  try {
    const response = await fetch("/api/v1/send-email", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Заказ успешно отправлен!");
    } else {
      const errorData = await response.json();
      alert(`Ошибка отправки: ${errorData.message || "Неизвестная ошибка"}`);
    }
  } catch (error) {
    console.error("Ошибка отправки:", error);
    alert("Ошибка отправки: Проверьте консоль");
  }
};
