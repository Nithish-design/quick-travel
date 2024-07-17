import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Ksignup from './Components/Ksignup';
import Travel from './Components/Travel';
import Searchbox from './Searchbox';
import Traveladmin from './Traveladmin';
import Busadmin from './Components/Busadmin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';




function App() {


  return (
   <div>

    {/* <Busadmin/>
    <Traveladmin/>
      <Searchbox/>
    <Travel/>  */}
  

  
<BrowserRouter>
    <Routes>
     <Route path='/' element={<Login/>}></Route>
     <Route path='/Ksignup' element={<Ksignup/>}></Route>
     <Route path='/Searchbox' element={<Searchbox/>}></Route>
     <Route path='/' element={<Ksignup/>}> </Route> 
     <Route path='/Login' element={<Login/>} ></Route>
    </Routes>
    </BrowserRouter>
  

   </div>
  );
}

export default App;
