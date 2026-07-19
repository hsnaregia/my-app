import { Button } from '../ui/Button';
import type {ButtonProps} from '../../../types/navTypes.ts'

export const Nav = ({name,img} : ButtonProps) => {
  return (
    <div className="h-[15vh] flex flex-col justify-evenly m-2 p-2">
      <Button name="Todo" img='icons8-to-do-64.png'/>
      <Button name="Progression" img='icons8-progress-64.png'/>
    </div>
  );
};
