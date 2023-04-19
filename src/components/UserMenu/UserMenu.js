import { useSelector, useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth/auth-operation";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  const userLogout = () => {
    dispatch(authOperations.logOut());
  }

  return (
    <div>
      <span>{name}</span>
      <button type='button' onClick={userLogout}>
        LogOut
      </button>
    </div>
  )
}

export default UserMenu