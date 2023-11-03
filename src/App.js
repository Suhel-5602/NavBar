import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
