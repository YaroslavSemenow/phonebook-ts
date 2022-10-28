import { Toaster } from 'react-hot-toast';

export default function PopUpMessage() {
  return (
    <Toaster
      toastOptions={{
        error: {
          duration: 5000,
        },
      }}
    />
  );
}
