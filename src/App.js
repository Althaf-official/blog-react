import './App.css'
import {BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from 'react';


function App() {
  const [isAuth,setIsAuth] = useState(false);


  return (
    <Router>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/createpost"> Create Post</Link>
        <Link to="/login"> login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/createpost" element={<CreatePost/> }/>
        <Route path="/login" element={<Login/> }/>
      </Routes>
    </Router>
  );
}

export default App;
 