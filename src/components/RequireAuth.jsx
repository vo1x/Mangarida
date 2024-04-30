import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
  const { user } = useAuth();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (!user) {
  //     axios.get('/profile')
  //       .then(({ data }) => {
  //         setUser(data);
  //       })
  //       .catch(error => {
  //         console.error('Failed to fetch user data:', error);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }
  // }, [user, setUser]);

  const location = useLocation();

  // if (isLoading) {
  //   return null; // You can render a loading spinner or message here if you want
  // }

  return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
