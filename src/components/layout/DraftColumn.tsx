import { useState } from 'react';
import { useTaskStore } from '../../store/taskStore';
import { Column } from '../ui/Column';
import TaskModal from '../ui/TaskModal';
import TaskForm from '../ui/TaskForm';
import { TaskCard } from '../ui/TaskCard';
import type { Task } from '../../../types/task';

export const DraftColumn = () => {
  const { tasks } = useTaskStore();
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();
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

      {/* {showModal && (
        <TaskModal>
          <TaskForm mode="edit" onClose={() => setShowModal(false)} />
        </TaskModal>
      )} */}
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
