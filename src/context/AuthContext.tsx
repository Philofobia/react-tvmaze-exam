import { createContext, useContext, useState } from 'react';

const UserContext = createContext<string | null>(null)

export const AuthContextProvider = () =>{
    return (
        <UserContext.Provider value={"this is my string value"}>
           {/* {children} */}
        </UserContext.Provider>
    )
}