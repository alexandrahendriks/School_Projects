import { useState } from "react";

export const Toggle = () => {
  const [isToggleOn, setIsToggle] = useState(false);

  const handleClick = () => {
    setIsToggle(!isToggleOn);
  };
  return (
    <>
      <button onClick={handleClick}>{isToggleOn ? "ON" : "OFF"}</button>
    </>
  );
};
