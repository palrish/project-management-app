import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({ addTask }: any) {
  const [task, setTask] = useState("");
  const modalRef = useRef();

  function onChangeHandler(e: any) {
    setTask(e.target.value);
  }
  function onClickHandler() {
    if (task.trim() === "") {
      const modal: any = modalRef.current;
      modal.open();
      return;
    }
    addTask(task);
    setTask("");
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="my-2 font-bold text-stone-800">Invalid Input</h2>
        <p className="mb-4 text-stone-700">Enter valid input to create task.</p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          onChange={(e) => onChangeHandler(e)}
          value={task}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-300"
        />
        <button
          onClick={onClickHandler}
          className="px-4 py-2 text-xs rounded-md bg-stone-700 text-stone-200 hover:bg-stone-600 hover:text-stone-100"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
