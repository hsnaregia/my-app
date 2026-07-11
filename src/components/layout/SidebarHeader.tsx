export const SidebarHeader = () => {
  return (
    <div className="flex flex-row items-center justify-evenly h-[10vh]">
      <img src="../src/assets/icons/logo.png" alt="logo" />

      <h2>My Doist</h2>

      <img
        src="../src/assets/icons/icons8-moon-30.png"
        alt="night mode"
        className="w-[20px] h-[20px]"
      />

      <img
        src="../src/assets/icons/icons8-back-to-30.png"
        alt="close side"
        className="w-[20px] h-[20px]"
      />
    </div>
  );
};
