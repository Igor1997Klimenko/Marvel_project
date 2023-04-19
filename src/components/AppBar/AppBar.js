import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom"

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      {isLoggedIn ? (<UserMenu/>) : (<AuthNav/>)}
    </div>
  )
}

export default AppBar