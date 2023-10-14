import { toast } from 'react-toastify';
export const notifyError = text =>
  toast.error(text, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

export const notifySuccess = text => {
  toast.success(text, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
