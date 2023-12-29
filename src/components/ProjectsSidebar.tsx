import Button from "./Button";

export default function ProjectsSidebar({
  onAddNewProjectHandler,
  onSelection,
  projects,
  selectedProject,
}: any) {
  return (
    <aside className="w-1/6 px-8 py-16 bg-stone-900 text-white rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase text-stone-200">YOUR PROJECTS</h1>
      <div>
        <Button onClick={onAddNewProjectHandler}>+ Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((data: any) => {
          let classes =
            "w-full text-left px-2 py-1 rounded-md my-1  hover:bg-stone-600 hover:text-stone-100 ";
          if (selectedProject === data.id) {
            classes += " bg-stone-600 text-stone-100";
          } else {
            classes += " text-stone-400";
          }
          return (
            <li key={data.id}>
              <button onClick={() => onSelection(data.id)} className={classes}>
                {data.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
