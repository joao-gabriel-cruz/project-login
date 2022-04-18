function Login(){
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
    <div className='space-y-5 w-80'>
      <h1 className='text-2xl mb-6' >Login</h1>
      <div className=''>
        <input className='border rounded text-gray-500 h-14 w-full px-4 py-2 ' type="text" placeholder='username' />
      </div>
      <div>
        <input className='border rounded text-gray-500 h-14 w-full px-4 py-2' type="password" placeholder='password' />
      </div>
     
      <div className='bg-blue-600 text-white rounded-md flex justify-center cursor-pointer hover:bg-blue-500 ta'>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg> 
      <input type="submit" value="Register" className='h-14' />
      </div>
      <form action=""></form>
    </div>
  </div>

  );
}
export default Login;