import { useTaskStore } from '../../store/taskStore';
import { Column } from '../ui/Column';
import { TaskCard } from '../ui/TaskCard';

export const CompletedColumn = () => {


  const { tasks } = useTaskStore();
  return (
    <Column title="Completed Tasks" columnId='completed'>
      {tasks
        .filter((task) => task.status === 'completed')
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </Column>
  );
};
