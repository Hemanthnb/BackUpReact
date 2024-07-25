// import { useState } from "react"
// import UserContext from "./UserContext";

// const UserContextProvider=({children})=>{
//     const [user,setUser]=useState<string>("");
//     return(
//         <UserContext.Provider value={user,setUser}>
//             {children}
//         </UserContext.Provider>
//     )
// }

import { useState, ReactNode } from "react";
import UserContext from "./UserContext";

interface UserContextProviderProps {
  children: ReactNode;
}

interface userCredential {
  userName: string | null;
  password: string | null;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<userCredential | null>(null);

  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
