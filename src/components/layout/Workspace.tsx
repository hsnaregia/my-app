import { Bottom } from './AppLayout';
import { TopBar } from './TopBar';

export const Workspace = () => {
  return (
    <div className="flex flex-col gap-4 p-4 h-full">
      <TopBar />
      <Bottom />
    </div>
  );
};
