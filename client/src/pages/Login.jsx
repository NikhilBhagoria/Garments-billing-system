import { useState } from 'react'

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const LoginHandler = (e) => {
    e.preventDefault();
    console.log('Logging in with', credentials);
    // Add your login logic here
  }
  return (
    <div>
      <form onSubmit={LoginHandler}>
      <input type="text" placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <input type="password" placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <button>Login</button>
      </form>
    </div>
  )
}

export default Login