import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useEffect, useRef, useState } from "react";

export const Column = ({
  title,
  columnId,
  children,
}: {
  title: string;
  columnId: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
const [isDraggingOver, setIsDraggingOver] = useState(false);
useEffect(() => {

    const element = ref.current;

    if (!element) return;


    return dropTargetForElements({

      element,

      getData() {
        return {
          columnId,
        };
      },


      onDragEnter() {
        setIsDraggingOver(true);
        
      },


      onDragLeave() {
        setIsDraggingOver(false);
      },


      onDrop() {
        setIsDraggingOver(false);
      },

    });


  }, [columnId]);

  return (
    <div className={`
   flex rounded-xl p-3 flex-col gap-3 mt-3 w-[24dvw]
   transition-all duration-200 
   ${
     isDraggingOver
     ? "animate-background block rounded-full bg-linear-to-r from-green-300 via-blue-600 to-red-300 bg-size-[400%_400%] p-1 [animation-duration:6s]"
     : "bg-[#F7F7F7]"
   }
 `} ref={ref}>
      <h2 className="text-sm font-semibold text-gray-700 text-center ">
        {title}
      </h2>

      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
