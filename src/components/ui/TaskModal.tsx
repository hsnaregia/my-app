interface Props {
  children: React.ReactNode;
}

const TaskModal = ({ children }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-5 w-[500px]">
        {children}
      </div>
    </div>
  );
};

export default TaskModal;