import { NavLink } from 'react-router-dom';


const AuthNav = () => {
  return (
    <>
      <NavLink to='register'>SignUp</NavLink>
      <NavLink to='login'>SignIn</NavLink>
    </>
  )
}

export default AuthNav;