import React from 'react';

interface IApp {
  x?: number
}

const App: React.FC<IApp> = () => (
  <div className="app">
    Hello world!
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <button type="button">Ok</button>
  </div>
);

export default App;
