import { useState } from 'react';
import { Button } from '../ui/Button';
import { ThemeModal } from '../ui/ThemeModal';

export const TopBar = () => {
  const [showThemeModal, setShowThemeModal] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-[70vw] h-[3vw]">
        <h1>search bar comes here</h1>
        <Button
          name="Themese"
          img="icons8-done-64.png"
          onClick={() => setShowThemeModal(true)}
        />
      </div>
      {showThemeModal && (
        <ThemeModal onClose={() => setShowThemeModal(false)} />
      )}
    </>
  );
};
