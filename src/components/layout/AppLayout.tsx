import { useState } from 'react';
import type { Task } from '../../../types/task';

import { useTaskStore } from '../../store/taskStore';

import { TaskCard } from '../ui/TaskCard';
import TaskForm from '../ui/TaskForm';
import TaskModal from '../ui/TaskModal';

const AppLayout = () => {
  return (
    <div className="w-[99vw] h-[100vh] flex flex-row justify-start p-2">
      <Sidebar />
      <Workspace />
    </div>
  );
};

export default AppLayout;

const Sidebar = () => {
  return (
    <div className="bg-[#FAFAFA] w-[513px] p-2 flex flex-col border rounded-xl">
      <SidebarHeader />
      <Nav />
      <TaskDraft />
    </div>
  );
};

const Workspace = () => {
  return (
    <div className="flex flex-col gap-4 p-4 h-full">
      <Top />
      <Bottom />
    </div>
  );
};

const Top = () => {
  return (
    <div className="flex justify-between items-center w-[70vw] h-[3vw]">
      <h1>search bar comes here</h1>
      <Button />
    </div>
  );
};

const Bottom = () => {
  const { tasks } = useTaskStore();

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();

  return (
    <>
      <div className="flex flex-1 gap-4 p-4 h-full">
        <Column title="Active Tasks">
          {tasks
            .filter((task) => task.status === 'active')
            .map((task) => (
              <TaskCard
                key={task.id}
                {...task}
                onEdit={(task) => {
                  setSelectedTask(task);
                  setShowModal(true);
                }}
              />
            ))}
        </Column>

        <Column title="Completed Tasks">
          {tasks
            .filter((task) => task.status === 'completed')
            .map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
        </Column>
      </div>

      {showModal && selectedTask && (
        <TaskModal>
          <TaskForm
            mode="edit"
            task={selectedTask}
            onClose={() => {
              setShowModal(false);
              setSelectedTask(undefined);
            }}
          />
        </TaskModal>
      )}
    </>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex flex-row items-center justify-evenly h-[10vh]">
      <img src="../src/assets/icons/logo.png" alt="logo" />

      <h2>My Doist</h2>

      <img
        src="../src/assets/icons/icons8-moon-30.png"
        alt="night mode"
        className="w-[20px] h-[20px]"
      />

      <img
        src="../src/assets/icons/icons8-back-to-30.png"
        alt="close side"
        className="w-[20px] h-[20px]"
      />
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
      <img src="" alt="" />
      <h2>lorem</h2>
    </div>
  );
};

const TaskDraft = () => {
  const { tasks } = useTaskStore();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-row gap-2 items-start">
        <Column title="Draft Tasks">
          {tasks
            .filter((task) => task.status === 'draft')
            .map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
        </Column>

        <img
          src="./src/assets/icons/icons8-plus-30.png"
          alt="plus sign"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
      </div>

      {showModal && (
        <TaskModal>
          <TaskForm mode="create" onClose={() => setShowModal(false)} />
        </TaskModal>
      )}
    </>
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
      <h2 className="text-sm font-semibold text-gray-700 text-center">
        {title}
      </h2>

      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
