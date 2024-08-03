import React from 'react'
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import AuthMiddleware from '../middleware/AuthMiddleware';
import SignUp from '../pages/signup/SignUp';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import UserList from '../pages/users/UserList';
import CompanyList from '../pages/company/CompanyList';
import EventList from '../pages/Events/EventsList';
import JobPostList from '../pages/jobpost/JobPostList';
import UserOnBoarding from '../pages/onboarding/UserOnBoarding';
import CompanyOnBoarding from '../pages/onboarding/CompanyOnBoarding';
// import { UserList } from '../pages/users/UserList';
import { UserProfile } from '../pages/users/userDetails';
import AdminDashboard from '../pages/dashboard/AdminDashboard';

const publicPages = [
  { exact: true, path: "/login", element: Login },
  { exact: true, path: "/signup", element: SignUp },
  { exact: true, path: "/user-onboarding", element: UserOnBoarding },
  { exact: true, path: "/company-onboarding", element: CompanyOnBoarding },
];

const adminPages = [
  { exact: true, path: "/admin/home", element: Home },
  { exact: true, path: "/admin/dashboard", element: AdminDashboard },
  { exact: true, path: "/admin/users", element: UserList },
  { exact: true, path: "/admin/all-companies", element: CompanyList },
  { exact: true, path: "/admin/events", element: EventList },
  { exact: true, path: "/admin/job-posts", element: JobPostList },
];

const Routes = () => {
  const location = useLocation()
  return (
    <BrowserRouter basename="/">
      <Switch>
        {publicPages.map((route, idx) => (
          <AuthMiddleware
            component={route.element}
            isAuthProtected={false}
            //roles={Config.ROLES.ALL}
            path={route.path}
            key={route.path + idx}
            exact={!!route.exact} />
        ))}
        {adminPages.map((route, idx) => (
          <AuthMiddleware
            component={route.element}
            // isAuthProtected={true}
            //roles={Config.ROLES.ALL}
            path={route.path}
            key={route.path + idx}
            exact={!!route.exact} />
        ))}
        <Route render={() => <p>404 not found</p>} />
      </Switch>
    </BrowserRouter >
  )
}

export default Routes