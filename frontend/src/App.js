import './App.css';
import {Navigate, Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/shared/Navigation/Nav';
import Authenticate from './pages/Authenticate/Auth';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
function App() {
  const isAuth = false
  const user = {
    activated: false,
  }
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' exact element={isAuth ? <Navigate to="rooms"/>: <Home/>}></Route>
      </Routes>
      <Routes>
        <Route path='/activate' element={!isAuth ? <Navigate to="/"/> : isAuth && !user.activated ? <Activate/> : <Navigate to="/rooms"/> }/>
      </Routes>
      <Routes>
        <Route path='/authenticate'  element={isAuth ? <Navigate to="/rooms"/> : <Authenticate/>}></Route>
      </Routes>
      <Routes>
        <Route path='/rooms'  element={!isAuth ? <Navigate to="/"/> : !user.activated && isAuth ? <Navigate to="/activate"/> : <Rooms/> }></Route>
      </Routes>
    </BrowserRouter>
    
  );
}



export default App;
