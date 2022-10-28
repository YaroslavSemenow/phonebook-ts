import { Toaster } from 'react-hot-toast';

export default function PopUpMessage() {
  return (
    <Toaster
      toastOptions={{
        success: {
          position: 'bottom-right',
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
      }}
    />
  );
}
