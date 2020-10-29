import { useState } from 'react';

export function Canvas({ canvasRef, color, stroke }) {
  const [isPainting, setIsPainting] = useState(false);
  const [prevPos, setPrevPos] = useState({ offsetX: 0, offsetY: 0 });

  const onMouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setIsPainting(true);
    setPrevPos({ offsetX, offsetY });
  };

  const onMouseUp = () => {
    setIsPainting(false);
  };

  const paint = (offset) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { offsetX, offsetY } = offset;
    const { offsetX: x, offsetY: y } = prevPos;
    ctx.lineWidth = stroke;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
    setPrevPos({ offsetX, offsetY });
  };

  const onMouseMove = ({ nativeEvent }) => {
    if (isPainting === true) {
      console.log(prevPos);
      const { offsetX, offsetY } = nativeEvent;
      paint({ offsetX, offsetY });
    }
  };

  const endPaint = () => {
    if (isPainting) {
      setIsPainting(false);
    }
  };

  return (
    <div className="board">
      <h1 style={{ color: color }}>Super pizarra chidori</h1>
      <canvas
        style={{ borderColor: color }}
        width={800}
        height={500}
        ref={canvasRef}
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={endPaint}
      />
    </div>
  );
}
