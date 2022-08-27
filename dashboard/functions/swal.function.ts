import Swal from "sweetalert2";

export function fireSuccessSwalModal(title: string, text: string) {
  Swal.fire({
    icon: "success",
    title,
    text,
  });
}
