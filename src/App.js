import React from 'react';
// import { 
//   HashRouter as Router,
//   Route
//  } from "react-router-dom";
// import MainPage from "./Containers/MainPage";
// import DisplayDetails from "./Components/DisplayDetails";
import ExpenseHandler from "./ExpenseHandler/ExpenseHandlerContainer";
const App = () => {
  return (
    // <Router basename="/">
    //   <Route path='/' exact component={MainPage} />
    //   <Route path='/details' component={DisplayDetails} />
    // </Router>   
    <ExpenseHandler />
  );
}

export default App;
