import React from 'react';
import Synth from 'components/Synth/Synth';

interface IApp {
  x?: number
}

const App: React.FC<IApp> = () => (
  <div className="app">
    <Synth />
  </div>
);

export default App;
