import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, Route, useHistory, useLocation } from 'react-router-dom';

const AuthMiddleware = ({
  component: Component,
  isAuthProtected,
  roles = [],
  children,
  path,
  key,
  exact,
  ...rest
}) => {

  const history = useHistory()
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  //const userHasRequiredRole = user && roles.includes(user?.role) ? true : false;

  if (isAuthProtected) {
    if (isSuccess || user) {
    }
    else {
      return <Redirect to="/login" />
    }
    // if (!userHasRequiredRole) {
    //   // return <Redirect to="/access-denied" />;
    //   alert('You are not authorized to access this page!');
    //   // return <Redirect to='/' />
    //   return history.goBack()
    // }
  }


  return <Route exact={exact} path={path} component={Component} />
}

export default AuthMiddleware;
