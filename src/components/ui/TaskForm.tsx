import { useState } from 'react';
import { useTaskStore } from '../../store/taskStore';
import type { Task } from '../../../types/task';
interface Props {
  onClose: () => void;
  mode: 'create' | 'edit';
  task?: Task;
}
const TaskForm = ({ mode, onClose, task }: Props) => {
  const [title, setTitle] = useState(task?.title ?? '');
  const [description, setDescription] = useState(task?.description ?? '');
  const [priority, setPriority] = useState<1 | 2 | 3>(task?.priority ?? 1);
  const { addTask, updateTask } = useTaskStore();
  return (
    <div className="p-3 flex flex-col gap-3 border rounded-lg bg-white">
      {/* Title Input */}
      <input
        className="border p-2 rounded-md"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* descriptin here */}
      <input
        className="border p-2 rounded-md"
        placeholder="Task description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Priority selector */}
      <select
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value) as 1 | 2 | 3)}
      >
        <option value={1}>Priority 1</option>
        <option value={2}>Priority 2</option>
        <option value={3}>Priority 3</option>
      </select>

      {/* Add button */}
      <div className="flex flex-ro justify-evenly">
        <button
          className="bg-black text-white py-1 rounded-md p-3"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="bg-black text-white py-1 rounded-md p-3"
          onClick={() => {
            if (!title.trim() || !description.trim()) return;

            if (mode === 'create') {
              const newTask: Task = {
                id: crypto.randomUUID(),
                title,
                description,
                startDate: new Date(),
                dueDate: new Date(),
                priority,
                status: 'draft',
              };

              addTask(newTask);
            } else if (task) {
              const updatedTask: Task = {
                ...task,
                title,
                description,
                priority,
              };

              updateTask(updatedTask);
            }

            setTitle('');
            setDescription('');
            setPriority(1);

            onClose();
          }}
        >
          {mode === 'create' ? 'Add Task' : 'Update Task'}
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
