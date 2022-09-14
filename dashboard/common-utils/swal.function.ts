import Swal from "sweetalert2";

export async function fireSuccessSwalModal(title: string, text: string) {
  return await Swal.fire({
    icon: "success",
    title,
    text,
  });
}

export async function fireDeleteConfirmationModal(title: string, text: string) {
  return await Swal.fire({
    icon: "warning",
    title,
    text,
    confirmButtonColor: "blue",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    showCancelButton: true,
  });
}