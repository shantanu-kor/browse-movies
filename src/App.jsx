import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NavBar from './components/NavBar'
import CompanyInfo from './pages/CompanyInfo';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { useEffect } from 'react';
import { authActions } from './store/authSlice';


function App() {
  const auth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login");
    if (isLoggedIn && isLoggedIn === 'true') {
      dispatch(authActions.setTrue());
    }
  }, [])
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={auth ? <Home /> : <Navigate to="/auth" replace />} />
        <Route path="/company-info" element={<CompanyInfo />} />
        <Route path="/auth" element={auth ? <Navigate to="/" replace /> : <Auth />} />
      </Routes>
    </>
  )
}

export default App
