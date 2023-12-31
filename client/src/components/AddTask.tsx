// import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useProjectContext } from "../context/ProjectProvider";
import { Button } from "./ui/button";
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

type AddTaskProps = {
  status: string;
  selectedProject: number;
};
const AddTask = ({ status, selectedProject }: AddTaskProps) => {
  const { addTask, changeSelectedProject } = useProjectContext();

  const [taskData, setTaskData] = useState({
    task_name: "",
    start_date: "",
    end_date: "",
    status: "",
  });

  const handleChange = () => {
    addTask(
      taskData.task_name,
      taskData.start_date,
      taskData.end_date,
      taskData.status == "" ? status : taskData.status,
      selectedProject
    );
    console.log(taskData.start_date);
  };

  const click = () => {
    changeSelectedProject(selectedProject);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={() => click()}
            className={`w-full text-[11px] lg:text-[12px] xl:w-[270px] h-8 hover:bg-none] mt-[24px]
              ${
                status === "todo"
                  ? "bg-[#EBEEFC] text-[#3659E2]"
                  : status === "inprogress"
                  ? "bg-[#FDF2FA] text-[#EE46BC]"
                  : status === "inreview"
                  ? "bg-[#ECF6FC] text-[#3FA1E3]"
                  : "bg-[#E7F8E9] text-[#12BB23]"
              }`}
          >
            + Add new
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-[425px] lg:max-w-[670px]">
          <DialogHeader className="border-b-2 p-4">
            <DialogTitle className="text-blue-800 text-md font-normal">
              Add new task
            </DialogTitle>
          </DialogHeader>
          <div className="px-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title" className="text-[12px] font-normal">
                Name of the task
              </Label>
              <Input
                id="title"
                required
                className="border"
                placeholder="Text"
                value={taskData.task_name}
                onChange={(e) =>
                  setTaskData({ ...taskData, task_name: e.target.value })
                }
              />
              <span
                className={`text-red-500 text-[10px] ${
                  taskData.task_name.length > 0 ? "hidden" : "block"
                }`}
              >
                Enter the task name
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <div className="w-full flex flex-col gap-2">
                <Label className="text-[12px] font-normal">Start date</Label>
                <Input
                  type="date"
                  required
                  value={taskData.start_date}
                  onChange={(e) =>
                    setTaskData({ ...taskData, start_date: e.target.value })
                  }
                />
                <span
                  className={`text-red-500 text-[10px] ${
                    taskData.start_date.length > 0 ? "hidden" : "block"
                  }`}
                >
                  Enter the start date
                </span>
              </div>
              <div className="w-full flex flex-col gap-2">
                <Label className="text-[12px] font-normal">Deadline</Label>
                <Input
                  type="date"
                  required
                  value={taskData.end_date}
                  onChange={(e) =>
                    setTaskData({ ...taskData, end_date: e.target.value })
                  }
                />
                <span
                  className={`text-red-500 text-[10px] ${
                    taskData.end_date.length > 0 ? "hidden" : "block"
                  }`}
                >
                  Enter the start date
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2  ">
              <Label className="text-[12px] font-normal">Status</Label>
              <select
                required
                className="p-4 border-[1px] rounded-lg"
                defaultValue={"todo"}
                onChange={(e) =>
                  setTaskData({ ...taskData, status: e.target.value })
                }
              >
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="inreview">In Review</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <DialogFooter className="p-2 border-t-2">
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
                className="bg-blue-500  text-sm font-normal px-4 h-8"
                type="submit"
                onClick={() => handleChange()}
              >
                Add
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTask;
