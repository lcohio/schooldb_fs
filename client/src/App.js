import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={ Courses }></Route>
        <Route exact path="/courses/:id" component={ CourseDetail }></Route>
        <Route path="/signin" component={ UserSignIn }></Route>
        <Route path="/signup" component={ UserSignUp }></Route>
        <Route component={ NotFound }></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App
