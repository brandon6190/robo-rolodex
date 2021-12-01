import React from 'react';
import './App.css';

import Title from './components/Title/Title.component';
import RealTimeSearch from './components/RealTimeSearch/RealTimeSearch.container';

function App() {
  return (
    <div className="App">
      <Title />
      <RealTimeSearch />
    </div>
  );
}

export default App;
