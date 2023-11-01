import { toast } from 'react-toastify';
const toastSettings = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const notifyError = text => toast.error(text, toastSettings);

export const notifySuccess = text => {
  toast.success(text, {
    ...toastSettings,
    style: { backgroundColor: 'green', color: 'white' },
  });
};
