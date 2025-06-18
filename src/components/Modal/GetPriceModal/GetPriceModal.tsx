"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Agreement, Button, Htag, InputText, Textarea } from "@/ui";
import { Modal } from "@/components";
import { useKeyPress } from "@/hooks/useKeayPress";
import { isGetPriceModal } from "@/store/openModalSlice/openModalSlice";
import { RootState } from "@/store/store";
import styles from "./GetPriceModal.module.css";
import { clearCommercialApplication } from "@/store/forCommercialApplicationSlice/forCommercialApplicationSlice";
import { sendRequestByEmail } from "@/api/sendRequestByEmail";

export const GetPriceModal = () => {
  const [isCheck, setIsCheck] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const dispatch = useDispatch();
  const { getPriceModal } = useSelector((state: RootState) => state.openModal);
  const { bearing } = useSelector(
    (state: RootState) => state.forCommercialApplication
  );

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
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("comment", textAreaValue);
    if (file) formData.append("file", file);
    formData.append("bearing", bearing || "");

    sendRequestByEmail(formData);
  };

  const handleCloseModal = () => {
    dispatch(isGetPriceModal(false));
    dispatch(clearCommercialApplication());
  };

  useKeyPress("Escape", handleCloseModal);

  if (!getPriceModal) {
    return null;
  }

  return (
    <Modal width="medium">
      <button onClick={handleCloseModal} className={styles.close} />
      <Htag tag="h2" size="medium" position="center">
        Запрос цены! Куда вам прислать КП?
      </Htag>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputText
          value={name}
          onChange={handleNameChange}
          placeholder="Имя"
          type="text"
        />
        <InputText
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Телефон"
          type="text"
        />
        <InputText
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          type="email"
        />
        {bearing && <p>Подшипник {bearing}</p>}
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
          bgColor="blue"
          size="medium"
          color="whiteText"
          disabled={!isCheck}>
          Оформить заказ
        </Button>

        <Agreement
          isCheck={isCheck}
          handleChange={handleChangeAgreement}
          color="grey"
          id="order"
        />
      </form>
    </Modal>
  );
};
