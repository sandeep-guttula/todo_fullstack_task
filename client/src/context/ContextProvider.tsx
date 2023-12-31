import { ProjectContextProvider } from "./ProjectProvider";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <ProjectContextProvider>{children}</ProjectContextProvider>;
};

export default ContextProvider;
