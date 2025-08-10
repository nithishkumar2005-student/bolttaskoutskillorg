import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center fade-in">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 text-white px-5 py-2 rounded-full text-sm font-semibold mb-5 uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-5 gradient-text">
            Crafting Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated Electronics and Communication Engineering student with a passion 
            for innovation and cutting-edge technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
};