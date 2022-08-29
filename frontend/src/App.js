import React from 'react';
import {Route,Routes} from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import AnalystComponent from './Components/AnalystComponent';
import CreateAnalyst from './Components/CreateAnalyst';
import EditAnalyst from './Components/EditAnalyst';
import NavigationBar from './Components/NavigationBar';

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path = '/' element={<AnalystComponent/>}/>
        <Route exact path = '/create' element={<CreateAnalyst/>}/>
        <Route exact path = '/about' element={<AboutPage/>}/>
        <Route exact path = '/api/v1/:id' element={<EditAnalyst/>}/>
      </Routes>
    </div>
  )
}

export default App;
