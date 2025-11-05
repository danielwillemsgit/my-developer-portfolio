import React from "react";

const BackgroundShape: React.FC = () => {
  return (
    <>
      <svg
        className="fixed top-0 left-0 h-full w-auto pointer-events-none z-0 opacity-80"
        viewBox="0 0 400 1200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          <filter id="noiseFilterLeft" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              seed="2"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0.02 0 0 0 0
                      0.20 0 0 0 0
                      0.60 0 0 0 0
                      0 0 0 1 0"
              result="blueNoise"
            />
            <feComponentTransfer in="blueNoise" result="opacityNoise">
              <feFuncA type="table" tableValues="0 0.5 0.7 0.9" />
            </feComponentTransfer>
            <feBlend mode="darken" in="SourceGraphic" in2="opacityNoise" result="blended" />
            <feComposite in="blended" in2="SourceGraphic" operator="in" />
          </filter>

          <linearGradient id="blueGradientLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A56D8" />
            <stop offset="30%" stopColor="#3D82F8" />
            <stop offset="65%" stopColor="#1E5FCC" />
            <stop offset="100%" stopColor="#0A56D8" />
          </linearGradient>
        </defs>

        <path
          d="M350,0 
             C350,60 380,140 340,220
             C300,300 200,340 160,450
             C120,560 180,680 240,780
             C300,880 350,920 320,1020
             C290,1120 310,1180 305,1200"
          fill="none"
          stroke="url(#blueGradientLeft)"
          strokeWidth="35"
          strokeLinecap="round"
          filter="url(#noiseFilterLeft)"
        />
      </svg>

      <svg
        className="fixed top-0 right-0 h-full w-auto pointer-events-none z-0 opacity-80"
        viewBox="0 0 400 1200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid meet"
      >
        <defs>
          <filter id="noiseFilterRight" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              seed="5"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0.02 0 0 0 0
                      0.20 0 0 0 0
                      0.60 0 0 0 0
                      0 0 0 1 0"
              result="blueNoise"
            />
            <feComponentTransfer in="blueNoise" result="opacityNoise">
              <feFuncA type="table" tableValues="0 0.5 0.7 0.9" />
            </feComponentTransfer>
            <feBlend mode="darken" in="SourceGraphic" in2="opacityNoise" result="blended" />
            <feComposite in="blended" in2="SourceGraphic" operator="in" />
          </filter>

          <linearGradient id="blueGradientRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3D82F8" />
            <stop offset="40%" stopColor="#0A56D8" />
            <stop offset="70%" stopColor="#5A9EFF" />
            <stop offset="100%" stopColor="#1E5FCC" />
          </linearGradient>
        </defs>

        <path
          d="M50,0 
             C50,120 20,200 80,320
             C140,440 240,500 280,640
             C320,780 260,860 200,960
             C140,1060 80,1100 100,1200"
          fill="none"
          stroke="url(#blueGradientRight)"
          strokeWidth="35"
          strokeLinecap="round"
          filter="url(#noiseFilterRight)"
        />
      </svg>
    </>
  );
};

export default BackgroundShape;