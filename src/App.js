import { createRef, useState } from 'react';
import './App.css';
import { Canvas } from './components/Canvas';
import { Controls } from './components/Controls';

function App() {
  const [color, setColor] = useState('#000');
  const [stroke, setStroke] = useState(1);

  const canvasRef = createRef(null);

  const clear = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="layout">
      <Controls
        clear={clear}
        color={color}
        setColor={setColor}
        setStroke={setStroke}
        stroke={stroke}
      />
      <Canvas canvasRef={canvasRef} color={color} stroke={stroke} />
    </div>
  );
}

export default App;
