import NewTask from "./NewTask";

export default function Tasks({
  tasks,
  addTaskHandler,
  deleteTaskHandler,
}: any) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask addTask={addTaskHandler} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          Currently no task for this project.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 rounded-md">
          {tasks.map((task: any) => {
            return (
              <li key={task.id}>
                <span className="flex justify-between rounded-md mb-1 p-2 bg-stone-300">
                  <p className="text-left">{task.task}</p>
                  <button
                    onClick={() => deleteTaskHandler(task.id)}
                    className="text-stone-700 hover:text-red-500 bg-stone-100 rounded-md p-1"
                  >
                    Delete Task
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
