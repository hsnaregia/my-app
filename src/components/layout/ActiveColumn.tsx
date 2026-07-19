import { useState } from 'react';
import { useTaskStore } from '../../store/taskStore';
import { Column } from '../ui/Column';
import { TaskCard } from '../ui/TaskCard';
import type { Task } from '../../../types/task';
import TaskModal from '../ui/TaskModal';
import TaskForm from '../ui/TaskForm';

export const ActiveColumn = () => {
  const { tasks } = useTaskStore();
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();
  const [showEditModal, setShowEditModal] = useState(false);


  return (
    <Column title="Active Tasks" columnId='active'>
      {tasks
        .filter((task) => task.status === 'active')
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
    </Column>
  );
};
