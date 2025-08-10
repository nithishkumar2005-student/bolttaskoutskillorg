import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className="w-full h-full"
        style={{
          background: 'linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #4facfe)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white bg-opacity-10"
              style={{
                width: `${[80, 60, 100, 40, 120, 30][i]}px`,
                height: `${[80, 60, 100, 40, 120, 30][i]}px`,
                left: `${[10, 20, 35, 50, 70, 85][i]}%`,
                animation: `float 20s linear infinite`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};