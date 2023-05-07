import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import FormPage from './pages/FormPage';


function App() {
  return (
   <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/book-show" element={<FormPage/>}/>
    </Routes>
   </>
  );
}

export default App;
