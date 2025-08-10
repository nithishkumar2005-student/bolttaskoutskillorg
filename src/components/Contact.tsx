import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      info: 'nitishkumar83411@gmail.com',
      href: 'mailto:nitishkumar83411@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91-8341194885',
      href: 'tel:+918341194885'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      info: 'linkedin.com/in/pnithishkumar2005/',
      href: 'https://www.linkedin.com/in/pnithishkumar2005/'
    },
    {
      icon: Github,
      title: 'GitHub',
      info: 'github.com/nithishkumar2005-student',
      href: 'https://github.com/nithishkumar2005-student'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-20 fade-in">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 text-white px-5 py-2 rounded-full text-sm font-semibold mb-5 uppercase tracking-wider">
            Connect
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-5 gradient-text">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss exciting opportunities in electronics and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-white p-10 rounded-2xl shadow-lg text-center transition-all duration-400 hover:transform hover:-translate-y-3 hover:shadow-2xl border border-gray-200 group relative overflow-hidden"
              data-interactive
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 opacity-10 transform translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
              
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white text-3xl mx-auto mb-5 relative z-10">
                <contact.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 relative z-10">{contact.title}</h3>
              <p className="text-gray-600 font-medium relative z-10">{contact.info}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};