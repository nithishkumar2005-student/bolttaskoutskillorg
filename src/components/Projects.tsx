import React from 'react';
import { Network, Wifi, GraduationCap } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      icon: Network,
      title: 'Router 1x3 Design',
      subtitle: 'Digital System Architecture',
      description: 'Designed and implemented a sophisticated packet-based protocol router featuring modular architecture with FIFO buffers, finite state machines, and register synchronizers for efficient data routing and communication.',
      technologies: ['Verilog', 'Xilinx', 'Vivado', 'FSM', 'FIFO']
    },
    {
      icon: Wifi,
      title: 'Dual Band Antenna Research',
      subtitle: 'IoT Communication Systems',
      description: 'Developed and presented research on a dual band flexible antenna with CPW feed for IoT energy applications. Operating at 380 MHz and 940 MHz frequencies, presented at IECom-2025 international conference.',
      technologies: ['Antenna Design', 'IoT', 'CPW Feed', 'Research', 'Conference']
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      subtitle: 'Comprehensive Learning',
      description: 'Comprehensive coursework in Computer Networks, advanced Vivado projects, and hands-on experience with digital design methodologies and embedded system development with consistent academic performance.',
      technologies: ['Computer Networks', 'Digital Design', 'RTL Design', 'System Design']
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-20 fade-in">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 text-white px-5 py-2 rounded-full text-sm font-semibold mb-5 uppercase tracking-wider">
            Portfolio
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-5 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions in digital design, IoT, and embedded systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 fade-in">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-400 hover:transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl"
              data-interactive
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-10 text-white text-center relative">
                <project.icon className="w-12 h-12 mx-auto mb-5" />
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="opacity-90 font-medium">{project.subtitle}</p>
              </div>
              
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};