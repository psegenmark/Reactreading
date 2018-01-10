import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path ="/" exact component={Books}/>
        <Route exact path ="/books" exact component={Books}/>
        <Route exact path ="/books/:id" exact component={Detail}/>
        <Route exact component={NoMatch}/>
      </Switch>
    </div>
  </Router>
)

export default App;
