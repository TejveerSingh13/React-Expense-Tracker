import React from 'react';
import { 
  HashRouter as Router,
  Route,
  Switch
 } from "react-router-dom";
import MainPage from "./Containers/MainPage";
import PageNotFound from "./Components/404File";
import ExpenseHandler from "./ExpenseHandler/ExpenseHandlerContainer";
const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/expenses/:userName' component={ExpenseHandler} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Router>   
  );
}

export default App;
