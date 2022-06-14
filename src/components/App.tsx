import React from 'react';
import Component from 'components/Component/Component';

interface IApp {
  x?: number
}

const App: React.FC<IApp> = () => (
  <div className="app">
    Sample app.
    <Component />
  </div>
);

export default App;
