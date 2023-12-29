import { useRef } from "react";
import Input from "./Input";
import { randomInt } from "crypto";
import Modal from "./Modal";

export default function NewProject({ onSave, onCancel }: any) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modalRef = useRef();

  function saveProjectHandler() {
    const title: any = titleRef.current;
    const description: any = descriptionRef.current;
    const dueDate: any = dueDateRef.current;

    if (
      title?.value.trim() === "" ||
      description?.value.trim() === "" ||
      dueDate?.value.trim() === ""
    ) {
      const modal: any = modalRef.current;
      modal.open();
      return;
    }

    onSave({
      title: title.value,
      description: description.value,
      dueDate: dueDate.value,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption={"Okay"}>
        <h2 className="my-2 font-bold text-stone-800">Invalid Input</h2>
        <p className="mb-4 text-stone-700">
          Enter valid input to create project.
        </p>
      </Modal>
      <div className="mt-16 w-[60rem]">
        <main className="flex items-center justify-end gap-4 my-4">
          <li className="list-none">
            <button
              className="text-stone-800 hover:text-stone-500"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li className="list-none">
            <button
              className="px-6 py-2 rounded-md bg-stone-900 text-stone-200 hover:bg-stone-600 hover:text-stone-100"
              onClick={() => saveProjectHandler()}
            >
              Save
            </button>
          </li>
        </main>
        <div>
          <Input ref={titleRef} type="text" label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input ref={dueDateRef} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}
