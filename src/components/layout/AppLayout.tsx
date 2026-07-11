import { useState } from 'react';
import type { Task } from '../../../types/task';

import { useTaskStore } from '../../store/taskStore';

import { TaskCard } from '../ui/TaskCard';
import TaskForm from '../ui/TaskForm';
import TaskModal from '../ui/TaskModal';
import { Sidebar } from './Sidebar';
import { Workspace } from './Workspace';
import { Column } from '../ui/Column';

const AppLayout = () => {
  return (
    <div className="w-[99vw] h-[100vh] flex flex-row justify-start p-2">
      <Sidebar />
      <Workspace />
    </div>
  );
};

export default AppLayout;

export const Bottom = () => {
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
