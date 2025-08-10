import React from 'react';
import { Code, Settings, Cloud, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: 'Programming Languages',
      items: ['Verilog (Advanced)', 'Python (Intermediate)', 'C Language (Intermediate)']
    },
    {
      icon: Settings,
      title: 'Design Tools',
      items: ['Xilinx Vivado', 'Ansys Simulation', 'Git & GitHub']
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      items: ['AWS EC2, S3, RDS', 'AWS Lambda, IAM, VPC', 'Cloud Architecture Design']
    },
    {
      icon: Cpu,
      title: 'Core Interests',
      items: ['VLSI Design', 'Embedded Systems', 'IoT Applications']
    }
  ];

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-20 fade-in">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 text-white px-5 py-2 rounded-full text-sm font-semibold mb-5 uppercase tracking-wider">
            Technical Expertise
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-5 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across multiple domains of electronics and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-400 hover:transform hover:-translate-y-3 hover:shadow-2xl group relative overflow-hidden"
              data-interactive
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-700 transform scale-x-0 transition-transform duration-400 group-hover:scale-x-100" />
              
              <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white text-3xl mb-6">
                <skill.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">{skill.title}</h3>
              
              <ul className="space-y-3">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-700 font-medium">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};