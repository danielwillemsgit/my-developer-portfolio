import React from "react";

const BackgroundShape: React.FC = () => {
  return (
    <>
      <svg
        className="fixed top-0 left-0 h-full w-auto pointer-events-none z-0"
        viewBox="0 0 300 1200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="blueGradientLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A56D8" />
            <stop offset="50%" stopColor="#3D82F8" />
            <stop offset="100%" stopColor="#0A56D8" />
          </linearGradient>
        </defs>
        <path
          d="M250,0 C150,200 200,600 100,800 C50,950 120,1100 200,1200"
          fill="none"
          stroke="url(#blueGradientLeft)"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className="fixed top-0 right-0 h-full w-auto pointer-events-none z-0"
        viewBox="0 0 300 1200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="blueGradientRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A56D8" />
            <stop offset="50%" stopColor="#3D82F8" />
            <stop offset="100%" stopColor="#0A56D8" />
          </linearGradient>
        </defs>
        <path
          d="M50,0 C150,200 100,600 200,800 C250,950 180,1100 100,1200"
          fill="none"
          stroke="url(#blueGradientRight)"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default BackgroundShape;
