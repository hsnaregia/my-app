
import { ActiveColumn } from './ActiveColumn';
import { CompletedColumn } from './CompletedColumn';
import { TopBar } from './TopBar';
export const Workspace = () => {

  return (
    <div className="flex flex-col gap-4 p-4 h-full">
      <TopBar />
      <>
      <div className='flex flex-row justify-items-start gap-5 h-full'>
        <ActiveColumn />
        <CompletedColumn />
      </div>

      </>
    </div>
  );
};
