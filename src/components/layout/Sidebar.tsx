import { DraftColumn } from '../layout/DraftColumn';
import { Nav } from './Nav';
import { SidebarHeader } from './SidebarHeader';

export const Sidebar = () => {
  return (
    <div className="bg-[#FAFAFA] w-[513px] p-2 flex flex-col border rounded-xl">
      <SidebarHeader />
      <Nav />
      <DraftColumn/>
    </div>
  );
};
