import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateCursor);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-interactive]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-5 h-5 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] transition-transform duration-100 mix-blend-difference hidden md:block ${
          isHovering ? 'scale-200' : 'scale-100'
        }`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />
      <div
        className={`fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9998] transition-transform duration-150 hidden md:block ${
          isHovering ? 'scale-200' : 'scale-100'
        }`}
        style={{
          left: followerPosition.x - 4,
          top: followerPosition.y - 4,
        }}
      />
    </>
  );
};