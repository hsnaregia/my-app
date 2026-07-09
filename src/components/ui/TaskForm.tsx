import { useState } from 'react';
interface Props {
  onClose: () => void;
}
const TaskForm = ({onClose} : Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<1 | 2 | 3>(1);

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
        <button className="bg-black text-white py-1 rounded-md p-3" onClick={onClose}>
          Cancel
        </button>
        <button
          className="bg-black text-white py-1 rounded-md p-3"
          onClick={() => {
            console.log({
              title,
              description,
              priority,
            });
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
