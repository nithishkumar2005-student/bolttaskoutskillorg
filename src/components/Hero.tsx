import React, { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, Phone, Send, ArrowRight, User, Microwave as Microchip } from 'lucide-react';

export const Hero: React.FC = () => {
  const [titleText, setTitleText] = useState('');
  const fullTitle = 'P Nithish Kumar';

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typeWriter = () => {
        if (i < fullTitle.length) {
          setTitleText(fullTitle.slice(0, i + 1));
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      typeWriter();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: Mail, href: 'mailto:nitishkumar83411@gmail.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/nithishkumar2005-student', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pnithishkumar2005/', label: 'LinkedIn' },
    { icon: Phone, href: 'tel:+918341194885', label: 'Phone' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-15 items-center z-10">
        <div className="text-white space-y-8">
          <div className="inline-flex items-center gap-2 glass-effect px-5 py-2 rounded-full text-sm font-medium animate-pulse">
            <Microchip className="w-4 h-4" />
            Electronics & Communication Engineer
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {titleText}
          </h1>
          
          <p className="text-2xl font-semibold bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
            Innovating the Future of Technology
          </p>
          
          <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
            Passionate about VLSI design, embedded systems, and cloud computing. 
            Currently pursuing B.Tech at Mohan Babu University with expertise in 
            digital design and IoT solutions.
          </p>

          <div className="flex gap-8 py-4">
            {[
              { number: '8.5', label: 'CGPA' },
              { number: '3+', label: 'Certifications' },
              { number: '2+', label: 'Projects' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-black text-white">{stat.number}</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-5 items-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-glow hover:shadow-2xl"
              data-interactive
            >
              <Send className="w-5 h-5" />
              Get In Touch
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white font-semibold text-lg inline-flex items-center gap-3 transition-all duration-300 hover:transform hover:translate-x-2"
              data-interactive
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="perspective-1000">
          <div className="glass-effect p-10 rounded-3xl text-center text-white transition-transform duration-500 hover:rotate-y-10 hover:rotate-x-10 shadow-glow transform-gpu">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 mx-auto mb-8 flex items-center justify-center text-6xl relative overflow-hidden">
              <User className="w-24 h-24" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-shimmer" />
            </div>
            
            <div className="space-y-3 mb-8">
              <h3 className="text-2xl font-bold">ECE Student</h3>
              <p><strong>CGPA:</strong> 8.5/10</p>
              <p><strong>Roll No:</strong> 23301A030012</p>
              <p><strong>University:</strong> Mohan Babu University</p>
              <p><strong>Location:</strong> Tirupati</p>
            </div>

            <div className="flex justify-center gap-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-15 h-15 rounded-full glass-effect flex items-center justify-center text-white text-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-110 hover:bg-white hover:bg-opacity-20"
                  data-interactive
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};