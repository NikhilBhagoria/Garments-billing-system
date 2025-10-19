import React from 'react'

const Register = () => {
  return (
    <div>
        <form onSubmit={SubmitHandler} classname="flex flex-col gap-4 w-1/3 mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <input type="text" placeholder="Username" className='' />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register