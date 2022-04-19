import { useNavigate, Link } from "react-router-dom";

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Login from "./login";

function Cadastro() {
  let navigate = useNavigate();



  function addUser(e) {

    e.preventDefault()

    const name = e.target.name.value
    const username = e.target.username.value
    const password = e.target.password.value
    var sex = e.target.male.checked

    if (sex) {
      var gender = 'M'
    }
    else {
      var gender = 'F'
    }

    
    console.log(
      { name: name, username: username, password: password, id: uuidv4(), gender: gender }
    )
    e.target.name.value = ''
    e.target.username.value = ''
    e.target.password.value = ''

    return navigate("/Login");




  }
  


  return (

    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className='w-80'>
        <h1 className='text-2xl mb-6' >Register</h1>
        <form onSubmit={addUser} action="" className="space-y-5">
          <div className=''>
            <input className='border rounded text-gray-500 h-14 w-full px-4 py-2 ' required="required" type="text" id="name" placeholder='display name' />
          </div>
          <div>
            <input className='border rounded text-gray-500 h-14 w-full px-4 py-2 ' required="required" type="text" id="username" placeholder='user name' />
          </div>
          <div>
            <input className='border rounded text-gray-500 h-14 w-full px-4 py-2' required="required" type="password" id="password" placeholder='password' />
          </div>
          <div className='flex flex-row border rounded h-14 items-center space-x-3 gender '>
            <label className="ml-2" htmlFor="">Gender</label>
            <div>
              <input required="required" className='scale-125 mr-2' type="radio" id='male' name="gender" value="M" />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input className='scale-125 mr-2' type="radio" id='female' name="gender" value="F" />
              <label htmlFor="famele">Female</label>
            </div>
            <div>
              <input className='scale-125 mr-2' type="radio" id='outro' name="gender" value="null" />
              <label htmlFor="outro">Outros</label>
            </div>
          </div>
          <div className="space-y-2">
            <button className='bg-blue-600 text-white rounded-md flex justify-center  hover:bg-blue-500 flex w-full'  >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
              <input type="submit" value="Register" className='h-14 cursor-pointer' />
            </button>
            <Link className='text-sky-500 flex justify-end' to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Cadastro;

