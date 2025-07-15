// src/App.jsx
import React, { useEffect } from 'react';
import { logEvent } from './middleware/logger';

function App() {
  useEffect(() => {
    logEvent("info", "page", "App component mounted");
  }, []);

  return (
    <div>
      <h1>Hello React!</h1>
      <button onClick={() => logEvent("warn", "component", "Button clicked!")}>
        Log Warning
      </button>
    </div>
  );
}

export default App;
