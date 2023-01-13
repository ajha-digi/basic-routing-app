import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
    <div>Login</div>
    <Link to="/">Back to Registration page</Link>
    <Link to="/forgetpassword">Forget Password</Link>
    </>
  )
}

export default Login