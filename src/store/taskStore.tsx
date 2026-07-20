import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Task } from "../../types/task";

interface States {
  tasks: Task[];
}

interface Actions {
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: string) => void;
  moveTask: (taskId: string, status: Task["status"]) => void;
}

type TaskStore = States & Actions;

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      updateTask: (updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      moveTask: (taskId, status) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId
              ? {
                  ...task,
                  status,
                }
              : task
          ),
        })),
    }),
    {
      name: "task-storage",

      onRehydrateStorage: () => (state) => {
        if (!state) return;

        state.tasks = state.tasks.map((task) => ({
          ...task,
          // startDate: new Date(task.startDate),
          dueDate: new Date(task.dueDate),
        }));
      },
    }
  )
);