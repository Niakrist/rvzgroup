"use client";
import React, { useState } from "react";
import { IOrderFormProps } from "./OrderForm.props";
import styles from "./OrderForm.module.css";
import { Agreement, Button, InputText, Textarea } from "@/ui";
import { sendRequestByEmail } from "@/api/sendRequestByEmail";
import { useDispatch } from "react-redux";
import { isGetPriceModal, toggleThanksModal } from "@/store/openModalSlice/openModalSlice";
import { removeCart } from "@/store/cartSlice/cartSlice";

export const OrderForm = ({ order, isCart, ...props }: IOrderFormProps) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const dispatch = useDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const handleChangeAgreement = (check: boolean): void => {
    setIsCheck(!check);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isCheck || !order?.length) return;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("comment", textAreaValue);

    if (file) formData.append("file", file);

    if (Array.isArray(order)) {
      const orderSend = [];
      for (const item of order) {
        orderSend.push({
          id: item.product.id1c || item.product.id1cRvz,
          name: item.product.name,
          quantity: item.count,
          price: item.product.price || item.product.priceRvz || "Под заказ",
        });
      }
      formData.append("order", JSON.stringify(orderSend));
    }

    try {
      await sendRequestByEmail(formData);
      // Очищаем поля после успешной отправки
      setName("");
      setPhone("");
      setEmail("");
      setTextAreaValue("");
      setFile(null);
      setIsCheck(true);
      dispatch(isGetPriceModal(false));
      dispatch(toggleThanksModal(true));

      if (isCart) {
        dispatch(removeCart());
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (
    <form {...props} className={styles.form} onSubmit={handleSubmit}>
      <InputText value={name} onChange={handleNameChange} placeholder="Имя" type="text" />
      <InputText value={phone} onChange={handlePhoneChange} placeholder="Телефон" type="text" />
      <InputText value={email} onChange={handleEmailChange} placeholder="Email" type="email" />
      {/* {bearing && <p>Подшипник {bearing}</p>} */}
      <Textarea
        placeholder="Комментарий..."
        value={textAreaValue}
        handleChange={handleTextAreaChange}
      />

      <input onChange={handleFileChange} id="addFile" type="file" hidden />
      <label htmlFor="addFile" className={styles.addFile}>
        Прикрепить файл
      </label>

      <Button
        type="submit"
        bgColor="blue"
        size="medium"
        color="whiteText"
        disabled={!isCheck || !order?.length}
      >
        Оформить заказ
      </Button>

      <Agreement isCheck={isCheck} handleChange={handleChangeAgreement} color="grey" id="order" />
    </form>
  );
};
