import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IAuth, useAuthSetStateContext, useAuthStateContext } from "../../context-api/AuthContext";
import { LocationState, Location } from "../../models/Location";

const LoginPage = () => {
  const [state, setState] = useState<Pick<IAuth , 'name'| 'password'> >({name: '', password: ''});
  const navigate = useNavigate();
  const location = useLocation() as  Location<LocationState>;

  const user = useAuthStateContext();
  const setUser = useAuthSetStateContext();

  const handleChange = (name: string , value: string) => setState({...state, [name]: value});

  const onSubmit = () => {
    if(state.name && state.password) {
      setUser({...state, isLogined: true, token: "Bearer aaa"});
      setState({name: '', password: ''});
    }
  }
  
  useEffect(()=> {
    if(user.isLogined) { 
      navigate(location?.state?.url || '/profile' , {state: {url: '/'} , replace: true});
    };
  },[user.isLogined, navigate, location.state.url]);

  return (
    <div>
      <div> Login Page </div>
      <input name="name" value={state.name} onChange={e=> handleChange(e.target.name , e.target.value)}/> <br/>
      <input name="password" value={state.password} onChange={e=> handleChange(e.target.name , e.target.value)}/> <br/>
      <button onClick={onSubmit}> LOGIN </button>
    </div>
  )
}

export default LoginPage