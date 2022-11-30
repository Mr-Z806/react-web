import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from '@/pages/login'
import Home from '@/pages/home'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='home' element={<Home />}></Route>
        <Route exact path='login' element={<Login />}></Route>
        <Route exact path='*' element={<Navigate to="/login" />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
