import "./App.css";

import { ChromePicker } from "react-color";
import { useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState("#9189D8");

  return (
    <div className="App" style={{ backgroundColor: currentColor }}>
      <h1>React Color Picker</h1>
      <p>Click on a color in the Color Picker to change the background color</p>
      <ChromePicker
        color={currentColor}
        disableAlpha
        onChange={(color) => setCurrentColor(color.hex)}
        className="color-picker"
      />
    </div>
  );
}

export default App;
