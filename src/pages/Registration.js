import Component from '../components/Registration'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <>
    <Component />
    <Link to="/login">Login</Link>
    </>
  )
}

export default Registration