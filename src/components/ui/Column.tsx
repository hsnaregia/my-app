export const Column = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex-1 bg-[#F7F7F7] rounded-xl p-3 flex flex-col gap-3 mt-3">
      <h2 className="text-sm font-semibold text-gray-700 text-center">
        {title}
      </h2>

      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
