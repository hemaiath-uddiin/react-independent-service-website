
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
 import Nav from "./Component/Nav/Nav.js"
import Service from './Component/Service/Service'; 
import Checkout from "./Component/Checkout/Ceckout"
import Login from './Component/Loging/Login';
import Register from './Component/Register/Register';

function App() {
  return (
    <div className="App">
        <Nav></Nav> 
          <Routes> 
            <Route path='/' element={<Home></Home>}>  </Route>
            <Route path='/service' element={<Service></Service>}>  </Route>
            <Route path='/login' element={<Login></Login>}>  </Route>
            <Route path='/register' element={<Register></Register>}>  </Route>
            
            <Route path='/checkout/:id' element={<Checkout></Checkout>}>  </Route>

          </Routes>
    </div>
  );
}

export default App;
