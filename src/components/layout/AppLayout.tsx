import { TaskCard } from '../ui/TaskCard';
import { useTaskStore } from '../../store/taskStore';
import { useState } from 'react';
import TaskForm from '../ui/TaskForm';
import TaskModal from '../ui/TaskModal';
const AppLayout = () => {
  return (
    <div className="w-[99vw] h-[100vh] flex flex-row justify-start p-2 ">
      {/* this one is for the left part */}
      <Sidebar />

      {/* this one is for the right part */}
      <Workspace />
    </div>
  );
};

export default AppLayout;

const Sidebar = () => {
  return (
    <div className=" bg-[#FAFAFA] w-[513px] p-2  flex flex-col justify-start border-1 rounded-xl ">
      <SidebarHeader />
      <Nav />
      <TaskDraft />
    </div>
  );
};

const Workspace = () => {
  return (
    <div className="flex flex-col gap-4 p-4 h-full ">
      <Top />
      <Bottom />
    </div>
  );
};

const Top = () => {
  return (
    <div className="flex flex-row items-center w-[70vw] h-[3vw] justify-between">
      <h1>search bar comes here</h1>
      <Button />
    </div>
  );
};

const Bottom = () => {
  const { tasks } = useTaskStore();
  return (
    <div className="flex flex-1 gap-4 p-4 h-full">
      <Column title="Active Tasks">
        {tasks
          .filter((task) => task.status == 'active')
          .map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              startDate={task.startDate}
              priority={task.priority}
              status={task.status}
            />
          ))}
      </Column>
      <Column title="Completed Tasks">
        {tasks
          .filter((task) => task.status == 'completed')
          .map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              startDate={task.startDate}
              priority={task.priority}
              status={task.status}
            />
          ))}
      </Column>
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex flex-row items-center justify-evenly h-[10vh] ">
      <>
        <img src="../src/assets/icons/logo.png" alt="logo" />
        My Doist
        <img
          src="../src/assets/icons/icons8-moon-30.png"
          alt="night mode"
          className="w-[20px] h-[20px]"
        ></img>
        <img
          src="../src/assets/icons/icons8-back-to-30.png"
          alt="close side"
          className="w-[20px] h-[20px]"
        ></img>
      </>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="h-[15vh] flex flex-col justify-evenly m-2 p-2">
      <Button />
      <Button />
    </div>
  );
};

const Button = () => {
  return (
    <div>
      <>
        <img src="" alt="" />
        <h2>lorem</h2>
      </>
    </div>
  );
};

const TaskDraft = () => {
  const { tasks } = useTaskStore();
  const [showModal, isModalOpen] = useState(false);
  return (
    <div className="flex flex-row gap-2  items-center-safe">
      <Column title="Draft Tasks ">
        {tasks
          .filter((task) => task.status == 'draft')
          .map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              startDate={task.startDate}
              priority={task.priority}
              status={task.status}
            />
          ))}
      </Column>
      <img
        src=".\src\assets\icons\icons8-plus-30.png"
        alt="plus sign"
        width={50}
        height={50}
        className="w-8 h-8"
        onClick={() => isModalOpen(true)}
      />
      {showModal && (
        <TaskModal>
          <TaskForm onClose={() => isModalOpen(false)} />
        </TaskModal>
      )}
    </div>
  );
};

const Column = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex-1 bg-[#F7F7F7] rounded-xl p-3 flex flex-col gap-3 mt-3">
      {/* Header */}
      <h2 className="text-sm font-semibold text-gray-700  flex justify-center">
        {title}
      </h2>

      {/* Content */}
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
