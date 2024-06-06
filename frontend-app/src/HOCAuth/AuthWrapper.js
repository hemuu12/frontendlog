import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const token = Cookies.get('token');
    const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        navigate('/login');
        localStorage.clear("user");
      }
    }, [token]);

    return token ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default withAuth;
