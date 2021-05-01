import React from 'react';
import { 
  HashRouter as Router,
  Route
 } from "react-router-dom";
import MainPage from "./Containers/MainPage";
import UnderConstruction from "./Components/UnderConstruction";
// import DisplayDetails from "./Components/DisplayDetails";
// import ExpenseHandler from "./ExpenseHandler/ExpenseHandlerContainer";
const App = () => {
  return (
    <Router basename="/">
      <Route path='/' exact component={MainPage} />
      <Route path='/expenses' component={UnderConstruction} />
    </Router>   
    // <ExpenseHandler />
  );
}

export default App;
