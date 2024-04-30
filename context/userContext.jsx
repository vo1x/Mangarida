import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const {
    data: userData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['profile'],
    queryFn: () => axios.get('/profile').then(({ data }) => data),
    enabled: !user
  });

  useEffect(() => {
    if (userData) {
      if (userData.error) {
        console.log(userData.error);
      } else {
        setUser(userData);
      }
    }
  }, [userData]);

  const logout = async () => {
    setUser(null);
    await axios
      .post('/logout')
      .then(({ data }) => {
        console.log(data.message);
      })
      .then(() => window.location.reload())
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  };

  return <UserContext.Provider value={{ user, setUser, logout }}>{children}</UserContext.Provider>;
}
