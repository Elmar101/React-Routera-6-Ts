import { createContext, useContext, useEffect, useState } from "react";

export interface IAuth {
  name: string;
  password: string;
  isLogined: boolean;
  token: string;
}

const defaultValue: IAuth = {
  name: "",
  password: "",
  isLogined: false,
  token: "",
};

const AuthStateContext = createContext<IAuth>(defaultValue);

const AuthSetStateContext = createContext<React.Dispatch<React.SetStateAction<IAuth>> | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const defaultStateValue:IAuth = JSON.parse(localStorage.getItem("user") as string) || defaultValue;
  const [state, setState] = useState(defaultStateValue);
  
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthSetStateContext.Provider value={setState}>{children}</AuthSetStateContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthStateContext = (): IAuth => {
    const user = useContext(AuthStateContext);
    if(!user){throw new Error("useAuthStateContext was called outside of the AuthStateContext provider");}
    return user;
}

export const useAuthSetStateContext = (): React.Dispatch<React.SetStateAction<IAuth>> => {
    const setUser = useContext(AuthSetStateContext);
    if(!setUser){throw new Error("useAuthSetStateContext was called outside of the AuthSetStateContext provider");}
    return setUser;
};

 
