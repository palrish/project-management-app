import { createPortal } from "react-dom";
import { forwardRef, useRef, useImperativeHandle } from "react";
import Button from "./Button";

const Modal = forwardRef(function Modal(
  { children, buttonCaption }: any,
  ref: any
) {
  const dialog: any = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="text-right mt-4">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modals")!
  );
});

export default Modal;
