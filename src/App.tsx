import React from "react";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="flex h-screen font-serif">
      <Navbar />

      <aside className="w-1/3 min-w-[320px] bg-white border-r border-gray-300 flex flex-col items-center justify-center p-8 fixed h-full top-[72px]">
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

      <main className="ml-[33.333%] flex-1 overflow-y-scroll bg-gray-50 p-10 pt-[72px] space-y-16">
        <section id="about">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
            I am a passionate Full Stack Developer who enjoys building clean,
            responsive, and user-friendly web applications. I love exploring new
            technologies and frameworks, from front-end interfaces to scalable
            back-end systems. My goal is to turn ideas into impactful digital
            solutions through thoughtful design and reliable code.
          </p>
          
        </section>
        <section id="projects">
          <h2 className="text-xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-300 h-48 rounded-lg shadow" />
            <div className="bg-gray-300 h-48 rounded-lg shadow" />
            <div className="bg-gray-300 h-48 rounded-lg shadow" />
            <div className="bg-gray-300 h-48 rounded-lg shadow" />
          </div>
        </section>
        <section id="skills">
          <h2 className="text-xl font-bold mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-300 h-16 rounded-lg shadow" />
            <div className="bg-gray-300 h-16 rounded-lg shadow" />
            <div className="bg-gray-300 h-16 rounded-lg shadow" />
            <div className="bg-gray-300 h-16 rounded-lg shadow" />
            <div className="bg-gray-300 h-16 rounded-lg shadow" />
            <div className="bg-gray-300 h-16 rounded-lg shadow" />
          </div>
        </section>

        <section id="contact">
          <h2 className="text-xl font-bold mb-6">Contact Me</h2>
          <form className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="w-full border border-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;