import { BASE_URL } from "@/constants/base_url";

export const sendRequestByEmail = async (formData: FormData) => {
  try {
    const response = await fetch(`${BASE_URL}/send-email`, {
      method: "POST",
      body: formData,
      headers: new Headers({ "Content-Type": "application/json" }),
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
