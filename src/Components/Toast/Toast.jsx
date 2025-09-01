import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Toast({ message, type = "error", duration = 5000, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const styles = {
    success: "bg-green-50 text-green-800 border-green-300",
    error: "bg-red-50 text-red-800 border-red-300",
  };

  const toastContent = (
    <div
      className={`fixed top-6 min-w-[250px] text-center right-1/2 transform translate-x-1/2 z-[9999] px-5 py-3 rounded-md shadow-md border text-sm font-medium transition-all duration-500
        ${styles[type] || styles.error}
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}
      `}
    >
      {message}
    </div>
  );

  return createPortal(toastContent, document.body);
}
