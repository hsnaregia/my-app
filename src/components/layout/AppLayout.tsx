import { useTaskDragAndDrop } from '../../hooks/useTaskDragAndDrop';
import { Sidebar } from './Sidebar';
import { Workspace } from './Workspace';


const AppLayout = () => {
  useTaskDragAndDrop();
  return (
    <div className="w-[99vw] h-[100vh] flex flex-row justify-start p-2">
      <Sidebar />
      <Workspace />
    </div>
  );
};

export default AppLayout;

