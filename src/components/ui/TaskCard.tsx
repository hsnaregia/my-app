import type { Task } from '../../../types/task';

interface TaskCardProps {
  task: Task;
  onEdit?: (task: Task) => undefined | void | string;
}

export const TaskCard = ({ task, onEdit }: TaskCardProps) => {
  return (
    <div className="bg-white border rounded-lg p-3 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium">{task.title}</h3>

        <div className="flex gap-2">
          <span className="cursor-pointer" onClick={() => onEdit?.(task)}>
            ✏️
          </span>

          <span className="cursor-pointer">🗑️</span>
        </div>
      </div>

      <p className="text-xs text-gray-500">{task.description}</p>

      <div className="flex justify-between text-xs">
        <span>{task.dueDate.toLocaleDateString()}</span>
        <span>{task.priority}</span>
        <span>{task.status}</span>
      </div>
    </div>
  );
};
