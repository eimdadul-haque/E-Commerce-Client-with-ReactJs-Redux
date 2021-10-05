import React from 'react';
import SignUp from "../pages/account/SignUp";
import BlogList from "../pages/blog/BlogList";
import LogIn from "../pages/account/LogIn";
import Blog from "../pages/blog/Blog";
import Profile from "../pages/profile/Profile";
import Dashboard_User from "../pages/dashboard/Dashboard_User";
import SearchPage from "../pages/search/SearchPage";
import BlogForm from "../pages/blog/BlogForm";
import { Route, Switch } from "react-router-dom";

export default function RouteComponent() {
  return (
    <Switch>
      <Route path="/" exact>
        <BlogList />
      </Route>
      <Route path="/search" exact>
        <SearchPage />
      </Route>
      <Route path="/blog/:id">
        <Blog />
      </Route>
      <Route path="/login">
        <LogIn />
      </Route>
      <Route path="/blogForm" exact>
        <BlogForm />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/deshboard" exact>
        <Dashboard_User />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
    </Switch>
  );
}


