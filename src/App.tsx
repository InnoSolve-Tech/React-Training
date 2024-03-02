import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { createContext, useState } from 'react';
import New from './pages/New';


export const ContextProvider = createContext<any>({});

function App() {
  const [user, setUser] = useState({name:"Bob", age:17});

  return (
  <Router>
    <ContextProvider.Provider value={{user, setUser}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<New/>}/>
    </Routes>
    </ContextProvider.Provider>
  </Router>
  );
}

export default App;
