import React from 'react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      date: 'Jan - Mar 2025',
      title: 'Microchip Embedded System Developer',
      company: 'AICTE-Eduskills Virtual Internship',
      description: [
        'Explored PIC16 microcontroller architecture and advanced programming techniques',
        'Developed BLE applications from scratch with practical real-world implementations',
        'Gained hands-on experience with motor control using dsPIC dual-core devices'
      ],
      certificateId: '6d53e6298a53f5ef85ef0191cc54caf6'
    },
    {
      date: 'Jan - Apr 2025',
      title: 'Digital Design with Verilog',
      company: 'NPTEL - IIT Guwahati',
      description: [
        'Completed comprehensive 12-week course on advanced Verilog-based circuit design',
        'Mastered FSMs, combinational/sequential logic design principles and optimization',
        'Developed expertise in RTL modeling and complex digital system design methodologies'
      ],
      certificateId: 'NPTEL25CS25S658902123'
    },
    {
      date: 'Oct - Dec 2024',
      title: 'AWS Data Engineering',
      company: 'AICTE-Eduskills Virtual Internship',
      description: [
        'Worked extensively with AWS cloud services: EC2, S3, RDS, Lambda, IAM, and VPC',
        'Designed scalable cloud architectures for high-performance data processing applications',
        'Mastered AWS CLI and Management Console for efficient resource provisioning and management'
      ],
      certificateId: 'afcca3100492362e827363c1a4b12668'
    }
  ];

  return (
    <section id="experience" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-20 fade-in">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 text-white px-5 py-2 rounded-full text-sm font-semibold mb-5 uppercase tracking-wider">
            Journey
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-5 gradient-text">
            Experience & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional development through industry internships and specialized certifications.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto fade-in">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-700 transform -translate-x-1/2 hidden lg:block" />
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 lg:mb-16">
              <div className={`glass-effect p-8 rounded-2xl shadow-xl transition-all duration-400 hover:scale-105 hover:bg-white hover:bg-opacity-20 w-full lg:w-2/5 ${
                index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
              }`}>
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                  {exp.date}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">{exp.title}</h3>
                <p className="text-gray-200 font-medium mb-4">{exp.company}</p>
                
                <div className="space-y-2 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-300 text-sm leading-relaxed">
                      • {item}
                    </p>
                  ))}
                </div>
                
                <p className="text-xs text-gray-400">
                  <strong>Certificate ID:</strong> {exp.certificateId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};