import AddProject from "./AddProject";
import getTodos from "../api/getTodos";
import { useProjectContext } from "../context/ProjectProvider";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

const Sidebar = () => {
  const { projects, changeSelectedProject, selectedProject } =
    useProjectContext();

  const handleClick = async (project_id: number) => {
    await getTodos(project_id);
    changeSelectedProject(project_id);
    // console.log(project_id);
    // console.log(res);
  };

  return (
    <>
      <div className="hidden lg:block">
        <div className="w-[200px] xl:w-[240px] flex justify-center items-center gap-2 px-4 py-4 border-r-[1px] border-b-[1px]">
          <img src="/logo.svg" className="h-5 " alt="logo" />
          <p className="font-bold text-lg">Task board</p>
        </div>
        <div className=" font-normal w-[200px] xl:w-[240px]  border-r-[1px] border-b-[1px] p-2 flex flex-col gap-[10px] py-6">
          {projects?.map((project) => (
            <div
              onClick={() => handleClick(project.project_id)}
              key={project.project_id}
              className={`text-[#232323] px-6 py-[10px] hover:bg-[#EBEEFC] rounded-lg cursor-pointer ${
                project.project_id === selectedProject ? "bg-[#EBEEFC]" : ""
              }`}
            >
              {project.project_name}
            </div>
          ))}
        </div>
        <div className="text-[#3659E2] text-sm flex px-6 py-4 gap-2">
          <AddProject />
        </div>
      </div>
      <div className="lg:hidden  absolute top-5 left-5">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <RxHamburgerMenu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>My Projects</SheetTitle>
            </SheetHeader>
            <div className=" font-normal w-[200px] xl:w-[240px]  lg:border-r-[1px] border-b-[1px] p-2 flex flex-col gap-[10px] py-6">
              {projects?.map((project) => (
                <SheetClose asChild key={project.project_id}>
                  <div
                    onClick={() => handleClick(project.project_id)}
                    className={`text-[#232323] px-6 py-[10px] hover:bg-[#EBEEFC] rounded-lg cursor-pointer ${
                      project.project_id === selectedProject
                        ? "bg-[#EBEEFC]"
                        : ""
                    }`}
                  >
                    {project.project_name}
                  </div>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;
