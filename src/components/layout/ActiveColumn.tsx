import { useState } from 'react';
import { useTaskStore } from '../../store/taskStore';
import { Column } from '../ui/Column';
import { TaskCard } from '../ui/TaskCard';
import type { Task } from '../../../types/task';
import TaskModal from '../ui/TaskModal';
import TaskForm from '../ui/TaskForm';

export const ActiveColumn = () => {
  const { tasks } = useTaskStore();
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();
  return (
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
    </Column>
  );
};
