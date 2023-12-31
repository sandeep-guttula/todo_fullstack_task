import { Dialog, DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { FaRegCalendar } from "react-icons/fa6";

import { useState } from "react";
import { useProjectContext } from "../context/ProjectProvider";

const TaskCard = ({
  status,
  project_id,
  task_id,
  task_name,
  start_date,
  end_date,
}: {
  status: string;
  project_id: number;
  task_id: number;
  task_name: string;
  start_date: string;
  end_date: string;
}) => {
  const s_extractedDate = start_date.substring(0, 10);

  const d_extractedDate = end_date.substring(0, 10);

  const [changeStatus, setChangeStatus] = useState(status);
  const { changeTaskStatus } = useProjectContext();

  const handleChange = async () => {
    await changeTaskStatus(project_id, task_id, changeStatus);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex flex-col p-4 my-[20px] w-full xl:w-[270px] h-[100px] xl:h-[114px] gap-[10px] shadow-[0px_0px_8px_0px_rgba(54,89,226,0.16)] rounded-lg">
            <header className="font-semibold text-sm xl:text-lg">
              {task_name}
            </header>
            <div className="flex gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-[10px]">Start date</span>
                <span className="bg-blue-100 h-6 text-[9px] rounded-lg px-2 py-1 text-blue-700">
                  {s_extractedDate.substring(0, 10).replace(/-/g, "/")}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500  text-[10px]">Deadline</span>
                <span className="bg-blue-100 text-[9px] h-6 rounded-lg px-1 lg:px-2 py-1 text-blue-700">
                  {d_extractedDate.substring(0, 10).replace(/-/g, "/")}
                </span>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="md:max-w-[425px] lg:max-w-[670px]">
          <DialogHeader className="border-b-2 p-4">
            <DialogTitle className="text-blue-800 text-md font-normal">
              Edit Task
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
                className="border border-none outline-none"
                placeholder="Text"
                value={task_name}
                readOnly
                // onChange={(e) =>
                //   setTaskData({ ...taskData, task_name: e.target.value })
                // }
              />
            </div>
            <div className="flex justify-between gap-4">
              <div className="w-full flex flex-col gap-2">
                <Label className="text-[12px] font-normal">Start date</Label>
                <div className="flex items-center justify-between p-2 rounded-lg border">
                  <span className="text-sm">
                    {start_date.substring(0, 10).replace(/-/g, "/")}{" "}
                  </span>
                  <FaRegCalendar />{" "}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <Label className="text-[12px] font-normal">Deadline</Label>
                <div className="flex items-center justify-between p-2 rounded-lg border">
                  <span className="text-sm">
                    {end_date.substring(0, 10).replace(/-/g, "/")}{" "}
                  </span>
                  <FaRegCalendar />{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2  ">
              <Label className="text-[12px] font-normal">Status</Label>
              <select
                required
                className="p-4 border-[1px] rounded-lg"
                defaultValue={status}
                onChange={(e) => setChangeStatus(e.target.value)}
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
                Save
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskCard;
