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
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <div className="flex  items-start overflow-x-hidden overflow-y-auto">
        <Column title="Draft Tasks" columnId="draft">
          {tasks
            .filter((task) => task.status === 'draft')
            .map((task) => (
              <TaskCard
              key={task.id}
              task={task}
              onEdit={(task) => {
                setSelectedTask(task);
                setShowEditModal(true);
                }}
              />
            ))}
        </Column>
            <img
              src="./src/assets/icons/icons8-plus-30.png"
              alt="plus sign"
              className="w-8 h-8 cursor-pointer mt-5"
              onClick={() => setShowModal(true)}
            />
      </div>

      {showModal && (
        <TaskModal>
          <TaskForm mode="create" onClose={() => setShowModal(false)} />
        </TaskModal>
      )}

      {showEditModal && selectedTask && (
        <TaskModal>
          <TaskForm
            mode="edit"
            task={selectedTask}
            onClose={() => {
              setShowEditModal(false);
              setSelectedTask(undefined);
            }}
          />
        </TaskModal>
      )}
    </>
  );
};
