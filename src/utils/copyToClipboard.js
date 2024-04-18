export function copyToClipboard(passwordRef, alert) {
    if (passwordRef.current) {
      const textToCopy = passwordRef.current.value;
  
      if (textToCopy.trim() !== "") {
        passwordRef.current.select();
        document.execCommand("copy");
  
        alert("Exito", "Contraseña copiada con éxito", "success");
      } else {
        alert("Error", "No hay contraseña para copiar", "error");
      }
    }
  }