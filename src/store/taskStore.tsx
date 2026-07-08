import { create } from 'zustand';
import type { Task } from '../../types/task';
import { Tasks } from "../data/mockTask";

interface States {
  tasks: Task[];
}

interface Actions {
  addTask: () => void;
  updateTask: () => void;
  deleteTask: () => void;
  moveToActive: () => void;
  moveToCompleted: () => void;
}

type TaskStore = States & Actions;

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: Tasks,

  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
  moveToActive: () => {},
  moveToCompleted: () => {},
}));
