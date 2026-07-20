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
  const [startDate, setStartDate] = useState<Date | undefined>(
    task?.startDate ?? undefined
  );

  const [dueDate, setDueDate] = useState<Date | null>(task?.dueDate ?? null);
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
     <div className="grid grid-cols-2 gap-4">
  {/* Start Date */}
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-gray-700">
      📅 Start Date
    </label>

    <div className="relative">
      <input
        type="date"
        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm transition
        focus:border-black
        focus:bg-white
        focus:outline-none
        focus:ring-2
        focus:ring-gray-200"
      />
    </div>
  </div>

  {/* Due Date */}
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-gray-700">
      📌 Due Date
      <span className="ml-1 text-red-500">*</span>
    </label>

    <div className="relative">
      <input
        type="date"
        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm transition
        focus:border-black
        focus:bg-white
        focus:outline-none
        focus:ring-2
        focus:ring-gray-200"
      />
    </div>
  </div>
</div>
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
            if(!dueDate) return;
            if (mode === 'create') {
              const newTask: Task = {
                id: crypto.randomUUID(),
                title,
                description,
               startDate:startDate ?? undefined,
               dueDate,
                priority,
                status: 'draft',
              };

              addTask(newTask);
            } else if (task) {
              const updatedTask: Task = {
                ...task,
                title,
                description,
                dueDate,
                startDate,
                priority,
              };

              updateTask(updatedTask);
            }

            setTitle('');
            setDescription('');
            setPriority(1);
            setStartDate(undefined);
            setDueDate(null);
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
