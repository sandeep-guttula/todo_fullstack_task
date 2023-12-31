import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Todos } from "../api/getTodos";
import { useProjectContext } from "../context/ProjectProvider";
import AddTask from "./AddTask";
import StatusBadge from "./StatusBadge";
import TaskCard from "./TaskCard";

const TaskBoard = () => {
  const todos = useProjectContext().todos;
  const { selectedProject } = useProjectContext();
  // console.log(selectedProject);

  return (
    <>
      <div className="lg:grid grid-cols-4 p-6	gap-4 hidden">
        <div className="">
          <StatusBadge status="todo" />
          {todos?.map(
            ({
              status,
              start_date,
              end_date,
              task_id,
              task_name,
              project_id,
            }: Todos) =>
              status === "todo" && (
                <TaskCard
                  key={task_id}
                  status={status}
                  project_id={project_id}
                  task_id={task_id}
                  task_name={task_name}
                  start_date={start_date}
                  end_date={end_date}
                />
              )
          )}
          {/* <AddNew status="todo" /> */}
          <AddTask status="todo" selectedProject={selectedProject} />
        </div>
        <div>
          <StatusBadge status="inprogress" />
          {todos?.map(
            ({
              status,
              start_date,
              end_date,
              task_id,
              task_name,
              project_id,
            }) =>
              status === "inprogress" && (
                <TaskCard
                  key={task_id}
                  status={status}
                  task_id={task_id}
                  project_id={project_id}
                  task_name={task_name}
                  start_date={start_date}
                  end_date={end_date}
                />
              )
          )}
          <AddTask status="inprogress" selectedProject={selectedProject} />
        </div>
        <div>
          <StatusBadge status="inreview" />
          {todos?.map(
            ({
              status,
              start_date,
              end_date,
              task_id,
              task_name,
              project_id,
            }) =>
              status === "inreview" && (
                <TaskCard
                  status={status}
                  key={task_id}
                  task_id={task_id}
                  project_id={project_id}
                  task_name={task_name}
                  start_date={start_date}
                  end_date={end_date}
                />
              )
          )}
          <AddTask status="inreview" selectedProject={selectedProject} />
        </div>
        <div>
          <StatusBadge status="completed" />
          {todos?.map(
            ({
              status,
              start_date,
              end_date,
              task_id,
              task_name,
              project_id,
            }: Todos) =>
              status !== "todo" &&
              status !== "inprogress" &&
              status !== "inreview" && (
                <TaskCard
                  status={status}
                  task_id={task_id}
                  project_id={project_id}
                  key={task_id}
                  task_name={task_name}
                  start_date={start_date}
                  end_date={end_date}
                />
              )
          )}
          <AddTask status="completed" selectedProject={selectedProject} />
          {/* <EditTask /> */}
        </div>
      </div>
      <div className=" lg:hidden flex flex-col justify-center items-center pt-5">
        <Tabs defaultValue="todo" className="w-[350px] md:w-[550px] rounded-lg">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger className="rounded-lg" value="todo">
              Todo
            </TabsTrigger>
            <TabsTrigger className="rounded-lg" value="inprogress">
              In Progress
            </TabsTrigger>
            <TabsTrigger className="rounded-lg" value="inreview">
              In Review
            </TabsTrigger>
            <TabsTrigger className="rounded-lg" value="completed">
              Completed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="todo">
            {todos?.map(
              ({
                status,
                start_date,
                end_date,
                task_id,
                task_name,
                project_id,
              }: Todos) =>
                status === "todo" && (
                  <TaskCard
                    key={task_id}
                    status={status}
                    project_id={project_id}
                    task_id={task_id}
                    task_name={task_name}
                    start_date={start_date}
                    end_date={end_date}
                  />
                )
            )}
            {/* <AddNew status="todo" /> */}
            <AddTask status="todo" selectedProject={selectedProject} />
          </TabsContent>
          <TabsContent value="inprogress">
            {todos?.map(
              ({
                status,
                start_date,
                end_date,
                task_id,
                task_name,
                project_id,
              }) =>
                status === "inreview" && (
                  <TaskCard
                    status={status}
                    key={task_id}
                    task_id={task_id}
                    project_id={project_id}
                    task_name={task_name}
                    start_date={start_date}
                    end_date={end_date}
                  />
                )
            )}
            <AddTask status="inreview" selectedProject={selectedProject} />
          </TabsContent>
          <TabsContent value="inreview">
            {todos?.map(
              ({
                status,
                start_date,
                end_date,
                task_id,
                task_name,
                project_id,
              }) =>
                status === "inreview" && (
                  <TaskCard
                    status={status}
                    key={task_id}
                    task_id={task_id}
                    project_id={project_id}
                    task_name={task_name}
                    start_date={start_date}
                    end_date={end_date}
                  />
                )
            )}
            <AddTask status="inreview" selectedProject={selectedProject} />
          </TabsContent>
          <TabsContent value="completed">
            {todos?.map(
              ({
                status,
                start_date,
                end_date,
                task_id,
                task_name,
                project_id,
              }: Todos) =>
                status !== "todo" &&
                status !== "inprogress" &&
                status !== "inreview" && (
                  <TaskCard
                    status={status}
                    task_id={task_id}
                    project_id={project_id}
                    key={task_id}
                    task_name={task_name}
                    start_date={start_date}
                    end_date={end_date}
                  />
                )
            )}
            <AddTask status="completed" selectedProject={selectedProject} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default TaskBoard;
