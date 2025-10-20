import TextField from '@mui/material/TextField';
import React from 'react'

const Register = () => {
   const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const SubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  }
  return (
    <div>
        <form onSubmit={SubmitHandler} classname="flex gap-4 w-1/3 mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <TextField id="standard-basic" required label="Username" variant="standard" />
        <TextField id="standard-basic" required label="Email" variant="standard" />
        <TextField id="standard-basic" required label="Password" variant="standard" />

        <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register