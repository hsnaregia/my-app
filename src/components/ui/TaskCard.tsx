import type { Task } from '../../../types/task';

interface TaskCardProps extends Task {
  onEdit?: (task: Task) => void;
}

export const TaskCard = ({
  id,
  title,
  description,
  dueDate,
  startDate,
  priority,
  status,
  onEdit,
}: TaskCardProps) => {
  return (
    <div className="bg-white border rounded-lg p-3 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium">{title}</h3>

        <div className="flex gap-2">
          <span
            className="cursor-pointer"
            onClick={() =>
              onEdit?.({
                id,
                title,
                description,
                startDate,
                dueDate,
                priority,
                status,
              })
            }
          >
            ✏️
          </span>

          <span className="cursor-pointer">🗑️</span>
        </div>
      </div>

      <p className="text-xs text-gray-500">{description}</p>

      <div className="flex justify-between text-xs">
        <span>{dueDate.toLocaleDateString()}</span>
        <span>{priority}</span>
        <span>{status}</span>
      </div>
    </div>
  );
};
