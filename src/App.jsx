

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
      <div className='flex items-center justify-center flex-col text-gray-500 w-full h-screen '>
        <header className=''>
          <h1 className='text-cyan-900 text-3xl' >Bem vindo</h1>
        </header>
        <section>
          <Link className='text-sky-500'  to="/">Home</Link>

        </section>

        <Routes>
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (

    <div>
      <nav className='flex items-center justify-center space-x-80'>
        <div >
          <p className='text-cyan-900 text-3xl'>você já é um cliente ******* ?</p>
          <Link className='text-sky-500 ' to="/login">Login</Link>
        </div>
        <div >
          <p className='text-cyan-900 text-3xl'>venha ser um cliente ****** !</p>
          <Link className='text-sky-500' to="/cadastro">Cadastro</Link>
        </div>
      </nav>
    </div>
  );
}

export default App;
