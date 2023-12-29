import Button from "./Button";
import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  tasks,
  onDelete,
  addTaskHandler,
  deleteTaskHandler,
}: any) {
  const date = new Date(project.dueDate).toLocaleString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "long",
  });
  return (
    <div className="mt-16 w-[60rem]">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h2>
          <Button onClick={() => onDelete(project.id)}>Delete</Button>
        </div>
        <p className="mb-4 text-stone-400">{date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        tasks={tasks}
        addTaskHandler={addTaskHandler}
        deleteTaskHandler={deleteTaskHandler}
      />
    </div>
  );
}
