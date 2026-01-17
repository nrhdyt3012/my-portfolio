import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< Hello World >";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete(); // Call the onComplete function after the text is fully displayed
        }, 1000); // Delay before calling onComplete
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 text-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-sm px-4">
        <div className="mb-6 text-3xl sm:text-4xl font-mono font-bold text-center break-words">
          {text}
          <span className="animate-blink ml-1">|</span>
        </div>

        <div className="w-full h-[2px] bg-gray-800 rounded overflow-hidden">
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};
