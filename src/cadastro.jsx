import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";
import Login from "./login";

function Cadastro() {




  return (
   
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <div className='space-y-5 w-80'>
          <h1 className='text-2xl mb-6' >Register</h1>
          <div className=''>
            <input className='border rounded text-gray-500 h-14 w-full px-4 py-2 ' type="text" placeholder='display name' />
          </div>
          <div>
            <input className='border rounded text-gray-500 h-14 w-full px-4 py-2 ' type="text" placeholder='user name' />
          </div>
          <div>
            <input className='border rounded text-gray-500 h-14 w-full px-4 py-2' type="password" placeholder='password' />
          </div>
          <div className='flex flex-row border rounded h-14 items-center space-x-3 gender '>
            <label className="ml-2" htmlFor="">Gender</label>
            <div>
              <input className='scale-125 mr-2' type="radio" id='male' name="sex" />
              <label htmlFor="">Male</label>
            </div>
            <div>
              <input className='scale-125 mr-2' type="radio" id='female' name="sex" />
              <label htmlFor="">Female</label>
            </div>
          </div>
          <div className='bg-blue-600 text-white rounded-md flex justify-center cursor-pointer hover:bg-blue-500 ta'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
            <input type="submit" value="Register" className='h-14' />
            
          </div>
          <form action=""></form>

        </div>
      </div>
      
  );
}

export default Cadastro;