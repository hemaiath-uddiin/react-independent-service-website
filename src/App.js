
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
 import Nav from "./Component/Nav/Nav.js"
import Service from './Component/Service/Service';

function App() {
  return (
    <div className="App">
        <Nav></Nav> 
          <Routes> 
            <Route path='/' element={<Home></Home>}>  </Route>
            <Route path='/service' element={<Service></Service>}>  </Route>

          </Routes>
    </div>
  );
}

export default App;
