import { colorsArray, strokeArray } from '../utils/constants';

export function Controls({ setColor, setStroke, clear, color, stroke }) {
  return (
    <div className="controls">
      <button className="clear" onClick={clear}>
        Clear
      </button>
      <div className="options-wrapper">
        <div className="options">
          {colorsArray.map((color) => {
            return (
              <button
                style={{ background: color }}
                onClick={() => {
                  setColor(color);
                }}
              />
            );
          })}
        </div>
        <div className="options">
          {strokeArray.map((size) => {
            return (
              <button
                onClick={() => {
                  setStroke(size);
                }}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
      <div className="options-wrapper">
        <div className="current">
          <h3>Current Color:</h3>
          <div style={{ background: color }}></div>
        </div>
        <div>
          <h3>Current size: {stroke}</h3>
        </div>
      </div>
    </div>
  );
}
