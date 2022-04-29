import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Navbar from './Components/Pages/Navbar/Navbar';
import Order from './Components/Pages/Order List/Order';
import Products from './Components/Pages/Products/Products';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';
import UploadProducts from './Components/Pages/Upload Product/UploadProducts';

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/upload' element={<RequireAuth>
          <UploadProducts/>
        </RequireAuth>}></Route>
        <Route path='/orders' element={<RequireAuth>
          <Order/>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
