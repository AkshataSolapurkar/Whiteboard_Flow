
import React, { useRef, useState, useEffect } from 'react';

const DrawingLayer = ({ isDrawing }) => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      setContext(canvas.getContext('2d'));
    }
  }, []);

  useEffect(() => {
    if (context) {
      context.lineWidth = 2;
      context.lineCap = 'round';
      context.strokeStyle = 'black';
    }
  }, [context]);

  const startDrawing = (event) => {
    if (!isDrawing) return;
    context.beginPath();
    context.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    canvasRef.current.addEventListener('mousemove', draw);
  };

  const draw = (event) => {
    if (!isDrawing) return;
    context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    context.closePath();
    canvasRef.current.removeEventListener('mousemove', draw);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
};

export default DrawingLayer;
