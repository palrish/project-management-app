import Button from "./Button";

export default function NoProjectSelected({ onAddNewProjectHandler }: any) {
  return (
    <div className="text-center mt-16 w-[60rem]">
      <p className="my-2 font-bold text-stone-600">No Project Selected</p>
      <p className="my-2 text-stone-500">
        Select a project or get started with a new one
      </p>
      <Button onClick={onAddNewProjectHandler}>Create a project</Button>
    </div>
  );
}
