interface Props {
  onClose: () => void;
}

export const ThemeModal = ({ onClose }: Props) => {
  return (
    <div
      className="
        fixed inset-0
        bg-black/40
        flex items-center justify-center
        z-50
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white
          rounded-2xl
          p-6
          w-[400px]
          shadow-xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold mb-4">Choose Theme</h2>

        <div className="flex flex-col gap-3">
          <button
            className="
              p-3 rounded-xl
              border
              hover:bg-gray-100
              transition
            "
          >
           uknown
          </button>

          <button
            className="
              p-3 rounded-xl
              border
              hover:bg-gray-100
              transition
            "
          >
            uknown
          </button>

          <button
            className="
              p-3 rounded-xl
              border
              hover:bg-gray-100
              transition
            "
          >
            Ocean Theme
          </button>
        </div>

        <button
          className="
            mt-5
            text-sm
            text-gray-500
            border-1 
            rounded-2xl
            font-bold
            p-1 hover:bg-red-500 hover:text-black
            transform-fill
          "
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
