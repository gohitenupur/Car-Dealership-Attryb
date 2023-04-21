import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import Header from './components/Header';
import NewEntry from './carcard/NewEntry';

function App() {
  return (
    <div className='parent'>
      
    <Routes>
      <Route path="/" element={<><Header/><HomePage/></>}></Route>  
      <Route path="/login" element={<><Header/><LoginPage/></>}></Route>  
      <Route path="/signup" element={<><Header/><SignupPage/></>}></Route> 
      <Route path="/mainpage" element={<MainPage/>}></Route> 
      <Route path="/newentry" element={<NewEntry/>}></Route> 
    </Routes>
    </div>
  );
}

export default App;
