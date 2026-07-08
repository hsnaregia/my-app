import type { Task } from '../../../types/task';

type TaskCardProps = Task;

export const TaskCard = ({
  id,
  title,
  description,
  dueDate,
  priority,
  status,
}: TaskCardProps) => {
  return (
    <div className="bg-white border rounded-lg p-3 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium">
          {title}
          {id}
        </h3>
        <div className="flex gap-2 text-gray-500">
          <span>✏️</span>
          <span>🗑️</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500">{description}</p>

      {/* Footer */}
      <div className="flex justify-between text-xs text-gray-400">
        <span>{dueDate.toLocaleDateString()}</span>
        <span className="px-2 py-[2px] rounded bg-gray-100">{priority}</span>
        <span>{status}</span>
      </div>
    </div>
  );
};
