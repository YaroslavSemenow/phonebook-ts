import { Toaster } from 'react-hot-toast';

export default function PopUpMessage() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        error: {
          duration: 5000,
          position: 'top-center',
        },
      }}
    />
  );
}
