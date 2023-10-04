import { Navigate, useLocation } from "react-router-dom";
import { useAuthStateContext } from "../context-api/AuthContext";
import { LocationState, Location } from "../models/ILocation";

interface IPrivateRouting {
  children: React.ReactNode;
}

const PrivateRouting: React.FC<IPrivateRouting> = ({children}) => {
  const {isLogined} = useAuthStateContext();
  const location = useLocation() as  Location<LocationState>;

  if(!isLogined){
    return <Navigate to="/login"  state={{url: location.pathname + location.search}} replace={true} />
  }
  return (
    <>
      <div style={{background: "yellow"}}>Private Routing</div>
      {children}
    </>
  )
}

export default PrivateRouting