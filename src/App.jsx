

import './App.css';
import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";
import Login from './login';
import Cadastro from './cadastro';

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      
    </Router>
  );
}

function Home() {
  return (
    <div>
      <header className='flex justify-center'>
          <h1 className='text-cyan-900 text-3xl' >Bem vindo</h1>
      </header>
    </div>
  );
}

export default App;
