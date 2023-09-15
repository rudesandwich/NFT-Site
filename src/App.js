import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Feature from './pages/Feature';
import Explore from './pages/Explore';
import Resource from './pages/Resource';
import OurCommunity from './pages/OurCommunity';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/explore' element={ <Explore /> } />
        <Route path='/feature' element={<Feature />} />
        <Route path='/resource' element={<Resource />} />
        <Route path='/our-community' element={<OurCommunity />} />
      </Routes>
    </div>
  );
}

export default App;
