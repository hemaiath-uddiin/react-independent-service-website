
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
 import Nav from "./Component/Nav/Nav.js"
import Service from './Component/Service/Service'; 
import Checkout from "./Component/Checkout/Ceckout"
import Login from './Component/Loging/Login';
import Register from './Component/Register/Register';
import RequirAuth from './Component/RequiredAuth/RequirAuth';

import About from './Component/About/About';


function App() {
  return (
    <div className="App">
        <Nav></Nav>  
        
          <Routes> 
            <Route path='/' element={<Home></Home>}>  </Route>
            <Route path='/service' element={<Service></Service>}>  </Route>
            
            <Route path='/about' element={<About></About>}>  </Route>
             
            <Route path='/login' element={<Login></Login>}>  </Route>
            
            <Route path='/register' element={<Register></Register>}>  </Route>
            
      <Route path='/checkout/:id' element={ 
          <RequirAuth>  
           <Checkout></Checkout>

          </RequirAuth>
      }>  </Route>

          </Routes>
    </div>
  );
}

export default App;
