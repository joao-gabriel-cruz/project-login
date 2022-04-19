import { useNavigate, Link } from "react-router-dom";




function Login() {
  let navigate = useNavigate();

  function Home() {

    return navigate("/");
  }

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <form onSubmit={Home} >
        <div className='space-y-5 w-80'>
          <h1 className='text-2xl mb-6' >Login</h1>
          <div className=''>
            <input className='border rounded text-gray-500 h-14 w-full px-4 py-2 ' type="text" placeholder='username' />
          </div>
          <div>
            <input className='border rounded text-gray-500 h-14 w-full px-4 py-2' type="password" placeholder='password' />
          </div>
          <div>
            <button className='bg-blue-600 text-white rounded-md flex justify-center cursor-pointer hover:bg-blue-500 w-full'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg>
              <input type="submit" value="Login" className='h-14' />
            </button>
            <Link className='text-sky-500 flex justify-end' to="/cadastro">Cadastro</Link>
          </div>
        </div>
      </form>
    </div>

  );
}
export default Login;