import Swal from "sweetalert2";

export const alert = (title, text, icon) => {
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: `${icon}`,
    toast: true,
    position: "top",
  });
};