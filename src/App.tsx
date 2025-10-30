import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent!');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <Navbar />

      <section className="min-h-screen flex items-center justify-center px-8 pt-20 relative">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="w-40 h-40 mx-auto mb-8 shadow-lg rounded-full overflow-hidden">
            <img
              src="/images/dwprofilepicture.jpg"
              alt="Daniel Willems"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Daniel Willems
          </h1>

          <p className="text-2xl md:text-3xl text-gray-600 font-light">
            Full Stack Developer
          </p>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hello, I build thoughtful web experiences. Developing new software
            interests me. Through challenge, going towards a real-world solution
            satisfies me.
          </p>

          <div className="flex gap-4 justify-center pt-8 relative">
            <a
              href="#projects"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              <img src="/icons/github.png" alt="GitHub" className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              <img src="/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:daniel.willems@student.fontys.nl"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              <img src="/icons/email.png" alt="Email" className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">About Me</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            I am a passionate Full Stack Developer who enjoys building clean,
            responsive, and user-friendly web applications. I love exploring new
            technologies and frameworks, from front-end interfaces to scalable
            back-end systems. My goal is to turn ideas into impactful digital
            solutions through thoughtful design and reliable code.
          </p>
        </div>
      </section>

      <section id="projects" className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((i: number) => {
              const isFirstProject = i === 1;
              const isSecondProject = i === 2;
              const isThirdProject = i === 3;
              const isFourthProject = i === 4;

              return (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 relative overflow-hidden">
                    {isFirstProject ? (
                      <img
                        src="/images/SymphonySeat-HomePage.png"
                        alt="SymphonySeat project screenshot"
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : isSecondProject ? (
                      <img
                        src="/images/SmartPackagingSystemHomePage.png"
                        alt="Smart Packaging System Sioux project screenshot"
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : isThirdProject ? (
                      <img
                        src="/images/ZooBazaar.png"
                        alt="Zoo Bazaar project screenshot"
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : isFourthProject ? (
                      <img
                        src="/images/CustomCarHomePage.png"
                        alt="CustomCar project screenshot"
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-300" />
                    )}
                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-all duration-300" />
                  </div>

                  <div className="p-8">
                    {isFirstProject && (
                      <>
                        <h3 className="text-2xl font-semibold mb-4">
                          SymphonySeat
                        </h3>
                        <p className="text-gray-700">
                          A concert and event ticketing platform where users can
                          browse events, view artists, select seats on an
                          interactive map, and purchase tickets. Organizers can
                          manage events and artists, while admins track sales
                          and real-time seat availability.
                        </p>
                      </>
                    )}
                    {isSecondProject && (
                      <>
                        <h3 className="text-2xl font-semibold mb-4">
                          Smart Packaging System
                        </h3>
                        <p className="text-gray-700">
                          A digital solution for Sioux Technologies that
                          optimizes packaging logistics and tracks package
                          storage efficiently.
                        </p>
                      </>
                    )}
                    {isThirdProject && (
                      <>
                        <h3 className="text-2xl font-semibold mb-4">
                          Zoo Bazaar
                        </h3>
                        <p className="text-gray-700">
                          An application that lets the user see an overview of
                          all the animals, feeding schedules, medical history,
                          employee details, animals by area/species and
                          aggregated data/statistics for the animals and the
                          zoo.
                        </p>
                      </>
                    )}
                    {isFourthProject && (
                      <>
                        <h3 className="text-2xl font-semibold mb-4">
                          CustomCar
                        </h3>
                        <p className="text-gray-700">
                          A web application that allows customers to browse and
                          purchase car parts online, while helping the business
                          track sales, manage inventory, and attract more
                          customers.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'C#', icon: '/icons/csharp.png' },
              { name: 'Java', icon: '/icons/java.png' },
              { name: 'React & TypeScript', icons: ['/icons/react.png', '/icons/typescript.png'] },
              { name: 'JavaScript', icon: '/icons/javascript.png' },
              { name: 'HTML & CSS', icons: ['/icons/html.png', '/icons/css.png'] },
              { name: 'Tailwind CSS', icon: '/icons/tailwindcss.png' },
              { name: 'Spring Boot', icon: '/icons/springboot.png' },
              { name: 'ASP.NET Core', icon: '/icons/netcore.png' },
              { name: 'REST APIs', icon: '/icons/restapi.png' },
              { name: 'SQL', icon: '/icons/sql.png' },
              { name: 'GitHub & GitLab', icons: ['/icons/github.png', '/icons/gitlab.png'] },
              { name: 'Docker', icon: '/icons/docker.png' },
              { name: 'SonarQube', icon: '/icons/sonarqube.png' },
              { name: 'CI/CD Pipelines', icon: '/icons/cicd.png' },
              { name: 'Postman', icon: '/icons/postman.png' },
            ].map((skill, i: number) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                  <div className="flex gap-2">
                    {skill.icons ? (
                      skill.icons.map((iconPath: string, idx: number) => (
                        <img
                          key={idx}
                          src={iconPath}
                          alt={`${skill.name} icon ${idx + 1}`}
                          className="w-12 h-12"
                        />
                      ))
                    ) : skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-12 h-12"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Get In Touch</h2>
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-gray-900 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-gray-900 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-gray-900 transition-colors"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all hover:shadow-xl transform hover:-translate-y-0.5 font-medium text-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600 space-y-4">
          <p>© 2025 Daniel Willems. All rights reserved.</p>
          <p className="text-sm">
            Icons by{' '}
            <a
              href="https://icons8.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:underline"
            >
              Icons8
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
