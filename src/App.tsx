import React from "react";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="flex h-screen font-serif">
      <Navbar />

      <aside className="w-1/3 min-w-[320px] bg-white border-r border-gray-300 flex flex-col items-center justify-center p-8 fixed top-16 h-[calc(100%-64px)]">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full mb-6" />

          <h1 className="text-2xl font-bold mb-2">Daniel Willems</h1>
          <p className="text-sm font-semibold mb-4">Full Stack Developer</p>

          <p className="text-gray-600 mb-6 max-w-xs leading-relaxed">
            Hello, I build thoughtful web experiences. Developing new software
            interests me. Through challenge, going towards a real-world solution
            satisfies me.
          </p>

          <div className="flex gap-3 mb-6">
            <button className="border border-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition">
              View My Work
            </button>
            <button className="border border-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition">
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:underline">
              Github
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
            <a href="#" className="hover:underline">
              Email
            </a>
          </div>
        </div>
      </aside>

      <main className="ml-[33.333%] flex-1 overflow-y-scroll bg-gray-50 p-10 pt-24">
        <h2 id="projects" className="text-xl font-bold mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-300 h-48 rounded-lg shadow" />
          <div className="bg-gray-300 h-48 rounded-lg shadow" />
          <div className="bg-gray-300 h-48 rounded-lg shadow" />
          <div className="bg-gray-300 h-48 rounded-lg shadow" />
        </div>
      </main>
    </div>
  );
};

export default App;