import {useState} from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import MainLayout from './Components/MainLayout';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';


function App() {
  const[data,setData]  = useState();
  return (
    <div>
      {JSON.stringify(data)}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register regData={setData}/>} />
          </Route>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/logout' element={<Logout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App