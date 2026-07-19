import type { ButtonProps } from "../../../types/navTypes";

export const Button = ({
  name,
  img,
  onClick,
}: ButtonProps) => {
  return (
    <div
      className="
        group
        flex flex-row items-center gap-3 ml-10
        w-[12dvw]
        px-4 py-3
        rounded-3xl
        border border-gray-200
        bg-white
        cursor-pointer

        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:scale-[1.03]
        hover:border-blue-400
        hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)]

        active:scale-95
      "
      onClick={onClick}
    >

      <div
        className="
          flex items-center justify-center
          transition-transform duration-300
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        <img
          src={`../src/assets/icons/${img}`}
          width={40}
          height={40}
          alt=""
        />
      </div>


      <h2
        className="
          text-sm font-semibold
          transition-colors duration-300
          group-hover:text-blue-600
        "
      >
        {name}
      </h2>

    </div>
  );
};