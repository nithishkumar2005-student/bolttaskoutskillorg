import { useEffect } from 'react';

export const useCursor = () => {
  useEffect(() => {
    // Magnetic effect for interactive elements
    const magneticElements = document.querySelectorAll('[data-interactive]');
    
    const handleMouseMove = (e: MouseEvent, element: Element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      (element as HTMLElement).style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };

    const handleMouseLeave = (element: Element) => {
      (element as HTMLElement).style.transform = 'translate(0px, 0px)';
    };

    magneticElements.forEach(el => {
      const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e, el);
      const mouseLeaveHandler = () => handleMouseLeave(el);

      el.addEventListener('mousemove', mouseMoveHandler);
      el.addEventListener('mouseleave', mouseLeaveHandler);

      // Store handlers for cleanup
      (el as any)._mouseMoveHandler = mouseMoveHandler;
      (el as any)._mouseLeaveHandler = mouseLeaveHandler;
    });

    return () => {
      magneticElements.forEach(el => {
        if ((el as any)._mouseMoveHandler) {
          el.removeEventListener('mousemove', (el as any)._mouseMoveHandler);
        }
        if ((el as any)._mouseLeaveHandler) {
          el.removeEventListener('mouseleave', (el as any)._mouseLeaveHandler);
        }
      });
    };
  }, []);
};