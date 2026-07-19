import { useEffect } from 'react';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useTaskStore } from '../store/taskStore';
import type { Task } from '../../types/task';

export const useTaskDragAndDrop = () => {
  const tasks = useTaskStore((state) => state.tasks);

  const moveTask = useTaskStore((state) => state.moveTask);

  useEffect(() => {
    return monitorForElements({
      onDrop(args) {
        const sourceData = args.source.data;

        const destination = args.location.current.dropTargets[0];

        if (!destination) return;

        if (sourceData.type !== 'task') return;

        const taskId = sourceData.taskId as string;

        const newStatus = destination.data.columnId as Task['status'];

        const currentTask = tasks.find((task) => task.id === taskId);

        if (!currentTask) return;

        if (currentTask.status === 'active' && newStatus === 'draft') {
          return;
        }

        if (currentTask.status === 'completed') {
          return;
        }

        moveTask(taskId, newStatus);
      },
    });
  }, [tasks, moveTask]);
};
