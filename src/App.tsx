import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

export default function App() {
  const [project, setProject] = useState({
    type: "start",
    data: [],
    tasks: [],
  });
  function onAddNewProjectHandler() {
    setProject((prev) => {
      return {
        ...prev,
        type: "create",
      };
    });
  }

  function onSaveNewProjectHandler(project: any) {
    setProject((prev: any) => {
      const newProject = { ...project, id: Math.random() };
      return {
        ...prev,
        type: "start",
        data: [...prev.data, newProject],
      };
    });
  }

  function onCancelHandler(project: any) {
    setProject((prev: any) => {
      return {
        ...prev,
        type: "start",
      };
    });
  }

  function selectProjectHandler(id: any) {
    setProject((prev: any) => {
      return {
        ...prev,
        type: id,
      };
    });
  }

  function onDeleteHandler(id: any) {
    setProject((prev: any) => {
      let newData = [...prev.data];
      const ind = newData.findIndex((item: any) => item.id === id);
      newData.splice(ind, 1);
      return {
        ...prev,
        type: "start",
        data: newData,
      };
    });
  }

  function addTaskHandler(task: any) {
    setProject((prev): any => {
      let newTask = { task, id: Math.random(), projectId: prev.type };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }

  function deleteTaskHandler(id: any) {
    setProject((prev: any) => {
      let newTask = [...prev.tasks];
      const ind = newTask.findIndex(
        (item: any) => item.id === id && item.projectId === prev.type
      );
      newTask.splice(ind, 1);
      return {
        ...prev,
        tasks: newTask,
      };
    });
  }

  let content;
  if (project.type === "start") {
    content = (
      <NoProjectSelected onAddNewProjectHandler={onAddNewProjectHandler} />
    );
  } else if (project.type === "create") {
    content = (
      <NewProject onSave={onSaveNewProjectHandler} onCancel={onCancelHandler} />
    );
  } else {
    let show = project.data.filter((item: any) => item.id === project.type);
    let task = project.tasks.filter(
      (item: any) => item.projectId === project.type
    );
    content = (
      <SelectedProject
        project={show[0]}
        tasks={task}
        onDelete={onDeleteHandler}
        addTaskHandler={addTaskHandler}
        deleteTaskHandler={deleteTaskHandler}
      />
    );
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          onAddNewProjectHandler={onAddNewProjectHandler}
          onSelection={selectProjectHandler}
          projects={project.data}
          selectedProject={project.type}
        />
        {content}
      </main>
    </>
  );
}
