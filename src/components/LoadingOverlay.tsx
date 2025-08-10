import React, { useEffect, useState } from 'react';

export const LoadingOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center z-[10000] transition-opacity duration-1000">
      <div className="text-white text-2xl font-semibold animate-pulse">
        Loading Experience...
      </div>
    </div>
  );
};