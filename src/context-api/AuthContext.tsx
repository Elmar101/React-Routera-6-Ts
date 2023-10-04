import { createContext, useContext, useState } from "react";

interface IAuth {
  name: string;
  password: string;
  isLogined: boolean;
  token: string;
}

const defaultValue: IAuth = {
  name: "Elmar",
  password: "123",
  isLogined: false,
  token: "a",
};

const AuthStateContext = createContext<IAuth>(defaultValue);
const AuthSetStateContext = createContext<
  React.Dispatch<React.SetStateAction<IAuth>> | undefined
>(undefined);

export const AuthContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(defaultValue);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthSetStateContext.Provider value={setState}>{children}</AuthSetStateContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthStateContext = (): IAuth => {
    const user = useContext(AuthStateContext);
    if(!user){throw new Error("useUserStateContext was called outside of the AuthStateContext provider");}
    return user;
}

export const useAuthSetStateContext = (): React.Dispatch<React.SetStateAction<IAuth>> => {
    const setUser = useContext(AuthSetStateContext);
    if(!setUser){throw new Error("useUserSetStateContext was called outside of the AuthSetStateContext provider");}
    return setUser;
};

 
