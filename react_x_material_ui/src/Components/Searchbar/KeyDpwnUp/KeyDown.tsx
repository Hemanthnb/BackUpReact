import React, { useState, useEffect, useRef } from "react";
import "./Key.css"; // Assuming you have some CSS to style the selected item

const KeyDown: React.FC = () => {

  const divsData = ["Div 1", "Div 2", "Div 3", "Div 4"];
  
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        setSelectedIndex((prevIndex) =>
          prevIndex < divsData.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (event.key === "ArrowUp") {
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (event.key === "Enter") {
        if (selectedIndex >= 0) {
          console.log(`Selected div text: ${divsData[selectedIndex]}`);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      console.log("Component unmounted")
    };
  }, [selectedIndex, divsData.length]);

  //   useEffect(() => {
  //     if (selectedIndex >= 0 && divRefs.current[selectedIndex]) {
  //       divRefs.current[selectedIndex]?.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'center',
  //       });
  //     }
  //   }, [selectedIndex]);

  return (
    <div className="div-list">
      {divsData.map((text, index) => (
        <div
          key={index}
          className={`div-item ${selectedIndex === index ? "selected" : ""}`}
          ref={(el) => (divRefs.current[index] = el)}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default KeyDown;
