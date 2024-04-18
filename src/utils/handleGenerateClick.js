

export const handleGenerateClick = (
  length,
  activeCheckboxes,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSpecialChars,
  setPassword,
  alert,
  generatePassword
) => {
  if (length <= 0) {
    alert("Error", "Ingrese una Longitud de Contraseña", "error");
    return;
  }

  if (length < activeCheckboxes) {
    alert(
      "Error",
      "Longitud de Contraseña Menor que el numero de Opciones Seleccionadas",
      "error"
    );
    return;
  }

  if (
    !includeUppercase &&
    !includeLowercase &&
    !includeNumbers &&
    !includeSpecialChars
  ) {
    alert("Error", "Seleccione al menos una opcion", "error");
    return;
  }

  const newPassword = generatePassword(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecialChars
  );
  setPassword(newPassword);

  alert("Exito", "Se genero correctamente una nueva contraseña", "success");
};
