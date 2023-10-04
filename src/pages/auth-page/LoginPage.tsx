import { useNavigate } from "react-router-dom";
import { useAuthSetStateContext, useAuthStateContext } from "../../context-api/AuthContext";
import { useEffect } from "react";

const LoginPage = () => {
  const user = useAuthStateContext();
  const setUser = useAuthSetStateContext();
  const navigate = useNavigate();

  const handleChange = (name: string , value: string) => setUser({...user, [name]: value});
  const onSubmit = () => setUser({...user, isLogined: true, token: "Bearer aaa"});
  
  useEffect(()=> {
    if(user.isLogined) navigate("/profile");
  },[user.isLogined, navigate]);

  return (
    <div>
      <div> Login Page </div>
      <input name="name" value={user.name} onChange={e=> handleChange(e.target.name , e.target.value)}/> <br/>
      <input name="password" value={user.password} onChange={e=> handleChange(e.target.name , e.target.value)}/> <br/>
      <button onClick={onSubmit}> LOGIN </button>
    </div>
  )
}

export default LoginPage