import React, { useState, useRef } from "react";
import { generatePassword } from "../utils/passwordGenerator";
import { handleGenerateClick } from "../utils/handleGenerateClick";
import { copyToClipboard } from "../utils/copyToClipboard";
import { alert } from "../utils/alerts";
import Checkbox from "./Checkbox";
import { Input } from "./Input.jsx";
import { Button } from "./Button";
import "./Generator.css";
import "./Input.jsx";

export const Generator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(null);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [activeCheckboxes, setActiveCheckboxes] = useState(4);
  const [showPassword, setShowPassword] = useState(true);
  const passwordRef = useRef(null);

  const generateClick = () => {
    handleGenerateClick(
      length,
      activeCheckboxes,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSpecialChars,
      setPassword,
      alert,
      generatePassword
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const copy = () => {
    copyToClipboard(passwordRef, alert);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <section className="container">
        <div className="length">
          <Input
            text="Longitud de Contraseña"
            className="passwordInput"
            type="number"
            min={1}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className="options">
          <Checkbox
            label="Incluir Mayúsculas"
            checked={includeUppercase}
            onChange={() => {
              setIncludeUppercase(!includeUppercase);
              setActiveCheckboxes((prevCount) =>
                includeUppercase ? prevCount - 1 : prevCount + 1
              );
            }}
          />
          <Checkbox
            label="Incluir Minúsculas"
            checked={includeLowercase}
            onChange={() => {
              setIncludeLowercase(!includeLowercase);
              setActiveCheckboxes((prevCount) =>
                includeLowercase ? prevCount - 1 : prevCount + 1
              );
            }}
          />
          <Checkbox
            label="Incluir Números"
            checked={includeNumbers}
            onChange={() => {
              setIncludeNumbers(!includeNumbers);
              setActiveCheckboxes((prevCount) =>
                includeNumbers ? prevCount - 1 : prevCount + 1
              );
            }}
          />
          <Checkbox
            label="Incluir Caracteres Especiales"
            checked={includeSpecialChars}
            onChange={() => {
              setIncludeSpecialChars(!includeSpecialChars);
              setActiveCheckboxes((prevCount) =>
                includeSpecialChars ? prevCount - 1 : prevCount + 1
              );
            }}
          />
        </div>
        <div className="password">
          <Input
            className="passwordInput input"
            text={""}
            type={showPassword ? "text" : "password"}
            value={password}
            innerRef={passwordRef}
            readOnly={true}
            onChange={() => {}}
          />

          <Button
            onClick={copy}
            className={"copyButton"}
            content={<ion-icon name="clipboard-outline"></ion-icon>}
          />

          <Button
            onClick={togglePasswordVisibility}
            className="showButton"
            content={
              showPassword ? (
                <ion-icon name="eye-off-outline"></ion-icon>
              ) : (
                <ion-icon name="eye-outline"></ion-icon>
              )
            }
          />
        </div>
        <Button
          onClick={generateClick}
          className="generateButton"
          content={"Generar"}
        />

      </section>
    </>
  );
};
