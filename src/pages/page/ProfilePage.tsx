import { useAuthSetStateContext, useAuthStateContext } from "../../context-api/AuthContext";

const ProfilePage = () => {
  const user = useAuthStateContext();
  const setUser = useAuthSetStateContext();
  const onLogOut = () => setUser({name: '' , password: '', isLogined: false, token: ''});

  return (
    <>
      <div>Profile Page </div>
      <h1> User: {user.name} </h1>
      <button onClick={onLogOut}> LOG OIT</button>
    </>
  )
}

export default ProfilePage;