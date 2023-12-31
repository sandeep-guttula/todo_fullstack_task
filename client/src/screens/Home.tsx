import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskBoard from "../components/TaskBoard";

const Layout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <TaskBoard />
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Layout />
    </>
  );
};

export default Home;
