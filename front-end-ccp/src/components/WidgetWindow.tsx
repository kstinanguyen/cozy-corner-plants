import { useEffect, useRef, useState } from 'react';
import '../styles/WidgetWindow.css';
import PotSelectionMenu from './PotSelectionMenu';

function WidgetWindow() {
  const boxRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);
  const coords = useRef({ startX: 0, startY: 0, lastX: 0, lastY: 0 });

  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!boxRef.current) return;
    const box = boxRef.current;

    const boxWidth = box.offsetWidth || 200;
    const boxHeight = box.offsetHeight || 100;

    const initialX = windowSize.width - boxWidth - 20;
    const initialY = windowSize.height - boxHeight - 20;

    box.style.left = `${initialX}px`;
    box.style.top = `${initialY}px`;

    coords.current.lastX = initialX;
    coords.current.lastY = initialY;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const maxWidth = window.innerWidth - box.offsetWidth;
      const maxHeight = window.innerHeight - box.offsetHeight;

      let nextX = e.clientX - coords.current.startX + coords.current.lastX;
      let nextY = e.clientY - coords.current.startY + coords.current.lastY;

      // Restrict within bounds
      nextX = Math.max(0, Math.min(nextX, maxWidth));
      nextY = Math.max(0, Math.min(nextY, maxHeight));

      box.style.left = `${nextX}px`;
      box.style.top = `${nextY}px`;
    };

    box.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      box.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [windowSize]);

  return (
    <main>
      <div className="container">
        <div ref={boxRef} className="box">
          <PotSelectionMenu />
        </div>
      </div>
    </main>
  );
}

export default WidgetWindow;