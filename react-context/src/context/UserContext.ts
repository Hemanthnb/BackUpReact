import { createContext } from "react";

interface userCredentials {
    userName: string|null,
    password: string|null,
}

// interface userContextType {
//     user: userCredentials | null,
//     setUser: (user: userCredentials | null) => void,
// }

interface userContextType {
    user: userCredentials|null ,
    setUser: (user: userCredentials | null) => void,
}


const UserContext = createContext<userContextType | null>(null);

export default UserContext;
