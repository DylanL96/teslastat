import React from 'react';
import AnalystComponent from './Components/AnalystComponent';
import CreateAnalyst from './Components/CreateAnalyst';
import NavigationBar from './Components/NavigationBar';

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <AnalystComponent/>
      <CreateAnalyst/>
    </div>
  )
}

export default App;
