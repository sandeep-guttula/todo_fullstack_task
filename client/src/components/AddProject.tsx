import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useProjectContext } from "../context/ProjectProvider";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");

  const { addProject } = useProjectContext();

  const handleClick = async () => {
    addProject(projectName);
    setProjectName("");
  };

  useEffect(() => {
    console.log(projectName);
  }, [projectName]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-none gap-4">
          <FiPlus className="text-[#3659E2] text-sm" />
          Add new Project
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[425px] lg:max-w-[670px]">
        <DialogHeader className="border-b-2 p-4">
          <DialogTitle className="text-blue-800 text-md font-normal">
            Add new Project
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="text-[12px] font-normal">
              Name of the Project
            </Label>
            <Input
              id="title"
              className="border border-gray-300 outline-none"
              placeholder="Text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="px-2 py-4 border-t-2">
          <DialogClose asChild>
            <Button
              type="submit"
              variant="ghost"
              className="bg-blue-50 text-blue-500 text-sm font-normal h-8"
            >
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={() => handleClick()}
              className="bg-blue-500  text-sm font-normal px-4 h-8"
              type="submit"
            >
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProject;
