import { Navigate } from "react-router-dom";
import { useAuthStateContext } from "../context-api/AuthContext";

interface IPrivateRouting {
  children: React.ReactNode;
}

const PrivateRouting: React.FC<IPrivateRouting> = ({children}) => {
  const {isLogined} = useAuthStateContext();
  if(!isLogined){
    return <Navigate to="/auth" />
  }
  return (
    <>
      <div>PrivateRouting</div>
      {children}
    </>
  )
}

export default PrivateRouting