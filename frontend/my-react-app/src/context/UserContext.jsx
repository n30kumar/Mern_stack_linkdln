import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { authDataContext } from './AuthContext';

export const userDataContext = createContext();

function UserContext({ children }) {
  const [userData, setUserData] = useState(null);
  const { serverUrl } = useContext(authDataContext);

  const getCurrentUser = async () => {
    try {
      let result = await axios.get(`${serverUrl}/api/user/currentuser`, {
        withCredentials: true,
      });
      setUserData(result.data);
    } catch (error) {
      console.log(error);
      setUserData(result.data);
    }
  };

  useEffect(() => {
    // Avoid async race conditions by calling an inner async function
    (async () => {
      await getCurrentUser();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = { userData, setUserData };

  return <userDataContext.Provider value={value}>{children}</userDataContext.Provider>;
}

export default UserContext;

