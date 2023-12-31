import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import getProjects, { Project } from "../api/getProjects";
import getTodos, { Todos } from "../api/getTodos";

type ProjectContextType = {
  projects: Project[];
  selectedProject: number;
  changeSelectedProject: (project_id: number) => void;
  todos: Todos[];
  addProject: (projectName: string) => void;
  addTask: (
    task_name: string,
    start_date: string,
    end_date: string,
    status: string,
    project_id: number
  ) => void;
  changeTaskStatus: (
    project_id: number,
    task_id: number,
    status: string
  ) => void;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error(
      "useProjectContext must be used within a ProjectContextProvider"
    );
  }
  return context;
};

export const ProjectContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState(-1);
  const [todos, setTodos] = useState<Todos[]>([]);

  const changeSelectedProject = (project_id: number) => {
    setSelectedProject(project_id);
  };

  const addProject = async (projectName: string) => {
    const response = await fetch(
      "https://todo-backend-render.onrender.com/create-project",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project_name: projectName,
        }),
      }
    );
    if (response.ok) {
      const getData = async () => {
        const response = await getProjects();
        setProjects(response);
        if (selectedProject === -1) {
          setSelectedProject(response[0].project_id);
        }
      };
      getData();
    }
  };

  const addTask = async (
    task_name: string,
    start_date: string,
    end_date: string,
    status: string,
    project_id: number
  ) => {
    const response = await fetch(
      "https://todo-backend-render.onrender.com/create-todo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_name: task_name,
          start_date: start_date,
          end_date: end_date,
          status: status,
          project_id: project_id,
        }),
      }
    );
    if (response.ok) {
      const getData = async () => {
        const response = await getTodos(project_id);
        setTodos(response);
      };
      getData();
    }
  };

  const changeTaskStatus = async (
    project_id: number,
    task_id: number,
    status: string
  ) => {
    const response = await fetch(
      `https://todo-backend-render.onrender.com/update-todo/${project_id}/${task_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: status,
        }),
      }
    );
    if (response.ok) {
      const getData = async () => {
        const response = await getTodos(project_id);
        setTodos(response);
      };
      getData();
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await getProjects();
      setProjects(response);
      if (selectedProject === -1) {
        setSelectedProject(response[0].project_id);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await getTodos(selectedProject);
      setTodos(response);
    };
    getData();
  }, [selectedProject]);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        selectedProject,
        changeSelectedProject,
        todos,
        addProject,
        addTask,
        changeTaskStatus,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
