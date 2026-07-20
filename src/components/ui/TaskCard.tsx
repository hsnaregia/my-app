import type { Task } from '../../../types/task';
import { useEffect, useRef } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
interface TaskCardProps {
  task: Task;
  onEdit?: (task: Task) => undefined | void | string;
  onDelete: (id:string) =>void;
}


export const TaskCard = ({ task, onEdit,onDelete }: TaskCardProps) => {
  const isCompleted = task.status === 'completed';
  const isActive = task.status === 'active';

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (task.status === 'completed') return;

    return draggable({
      element,
      getInitialData: () => ({
        type: 'task',
        taskId: task.id,
      }),
    });
  });

  return (
    <div
      className={`bg-[#e6e6e6]  border rounded-lg p-3 flex flex-col justify-between gap-2 h-[20vh]   ${
        isCompleted ? 'border-amber-300 opacity-30 cursor-not-allowed' : ''
      } ${isActive ? 'border-blue-700 cursor-pointer ' : ''}`}
      ref={ref}
    >
      <div className="bg-white flex flex-col justify-start gap-2 h-[75%]  border-1 rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-3">
            <span className="border-1 border-gray-400 rounded-4xl w-6 flex justify-center">
              {task.priority}
            </span>
            <h3 className="text-sm font-medium">{task.title}</h3>
          </div>
        </div>
        <p className="text-xs p-2 m-1 line-clamp-3">{task.description}</p>
      </div>

      <div className="flex flex-row justify-between text-xs">
        <div className="flex flex-row justify-between gap-6">
          <span className='text-green-600'>{task.startDate?.toLocaleDateString()}</span>
         <span className='text-red-600'>{task.dueDate.toLocaleDateString()}</span>
          <div className="flex gap-2"></div>
        </div>
        <div className=" flex flex-row justify-between gap-4">
          <span className="cursor-pointer" onClick={() => onDelete?.(task.id)}>🗑️</span>
          <span className="cursor-pointer" onClick={() => onEdit?.(task)}>
            ✏️
          </span>
        </div>
      </div>
    </div>
  );
};
