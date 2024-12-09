"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  const onHide = useCallback(() => {
    if (modalRef.current) modalRef.current.close();
    router.back();
  }, [router]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onHide();
      }
    };

    const dialog = modalRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
      dialog.focus();
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onHide]);

  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onHide}
        aria-hidden="true"
      ></div>

      <dialog
        ref={modalRef}
        onClose={onHide}
        className="shadow-lg border flex flex-col p-6 rounded-lg bg-white dark:bg-gray-900 dark:text-gray-100 z-50 animate-fade-in"
        style={{
          width: "90%",
          maxWidth: "1300px",
          height: "80%",
          maxHeight: "600px",
        }}
      >
        <button
          onClick={onHide}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
          aria-label="Close"
        >
          <Image
            src="/xmark.svg"
            alt="close"
            width={24}
            height={24}
            className="bg-slate-100 rounded-full p-1"
          />
        </button>

        <div className="relative overflow-y-auto h-full">{children}</div>
      </dialog>

      <style jsx>{`
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
