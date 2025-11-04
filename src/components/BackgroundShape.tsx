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
          d="M240,0 
             C180,200 150,400 100,550 
             C50,700 130,850 180,950 
             C210,1050 190,1150 200,1200"
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
          d="M60,0 
             C90,100 200,250 150,450 
             C120,600 220,750 180,900 
             C150,1050 130,1150 100,1200"
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
