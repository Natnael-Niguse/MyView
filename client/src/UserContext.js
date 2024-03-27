import { createContext, useState } from "react";

// Create a context for user information
export const UserContext = createContext({});

/**
 * UserContextProvider component to provide user information context to its children.
 * @param {object} children - The children components to be wrapped by the context provider.
 * @returns {JSX.Element} - Returns the UserContextProvider component JSX. 
 */
export function UserContextProvider({ children }) {
  // State for storing user information
  const [userInfo, setUserInfo] = useState({});

  return (
    // Provide user information context to children components
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
