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
            <stop offset="50%" stopColor="#3D82F8" />
            <stop offset="100%" stopColor="#0A56D8" />
          </linearGradient>
        </defs>

        <path
          d="M200,0 
             C180,100 140,180 100,280
             C60,380 20,480 40,600
             C60,720 120,800 140,920
             C160,1040 140,1120 150,1200"
          fill="none"
          stroke="url(#blueGradientLeft)"
          strokeWidth="26"
          strokeLinecap="round"
          filter="url(#noiseFilterLeft)"
        />
      </svg>

      <svg
        className="fixed top-0 right-0 h-full w-auto pointer-events-none z-0"
        viewBox="0 0 300 1200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
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
            <stop offset="0%" stopColor="#0A56D8" />
            <stop offset="50%" stopColor="#3D82F8" />
            <stop offset="100%" stopColor="#0A56D8" />
          </linearGradient>
        </defs>

        <path
          d="M100,0 
             C120,120 160,220 200,340
             C240,460 280,580 260,720
             C240,860 180,960 160,1080
             C140,1160 150,1180 150,1200"
          fill="none"
          stroke="url(#blueGradientRight)"
          strokeWidth="26"
          strokeLinecap="round"
          filter="url(#noiseFilterRight)"
        />
      </svg>
    </>
  );
};

export default BackgroundShape;