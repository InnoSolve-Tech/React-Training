import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Greeter from './pages/Greeter';
import Home from './pages/Home';

function App() {
  return (
   
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/greet' element={<Greeter/>}/>
    </Routes>
  </Router>
  );
}

export default App;
