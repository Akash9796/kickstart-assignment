import { useEffect, useState } from "react";
import { textColors, bgColors } from "../constants/bgColor";

const useRandomBgColor = () => {
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    const randomTextColor =
      textColors[Math.floor(Math.random() * textColors.length)];
    setBgColor(randomBgColor);
    setTextColor(randomTextColor);
  }, []);

  return {bgColor,textColor};
};

export default useRandomBgColor;
