import { create } from 'zustand';
import type { Task } from '../../types/task';
interface States {
  tasks: Task[];
}

interface Actions {
  addTask: (task: Task) => void;
updateTask: (updatedTask: Task) => void;
  deleteTask: (id:string) => void;
  moveToActive: () => void;
  moveToCompleted: () => void;
}

type TaskStore = States & Actions;
export const useTaskStore = create<TaskStore>((set) => ({

  tasks: [],

  addTask: (task: Task) => {
    set((state) => ({
      tasks: [...state.tasks, task],
    }));
  },

updateTask:(updatedTask) => {
  set((state) => ({
    tasks: state.tasks.map((task) => {
  if(task.id === updatedTask.id)
    {return updatedTask;}
  else{
    return  task;
  }
    }),
  }));
},

deleteTask: (id) => {
  set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== id),
  }));
},
moveToActive: () => {},

  moveToCompleted: () => {},
}));
