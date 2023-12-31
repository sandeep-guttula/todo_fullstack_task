// import { useProjectContext } from "../context/ProjectProvider";
import AddProject from "./AddProject";

const Navbar = () => {
  // const { selectedProject, projects } = useProjectContext();

  return (
    <>
      <div className="h-[60px] w-full hidden lg:flex ">
        <div className="pl-6 text-lg font-semibold  w-full flex items-center border-b-[1px] ">
          My Projects
        </div>
      </div>
      <div className="flex justify-end lg:hidden border-b-2 px-2">
        <div className=" text-[#3659E2] text-sm flex px-6 py-4 gap-2">
          <AddProject />
        </div>
      </div>
    </>
  );
};

export default Navbar;
