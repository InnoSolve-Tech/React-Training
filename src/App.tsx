import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return ( 
  <Router>
    <NavigationBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
