import './App.css';
import React from 'react'
import Main from "./components/main";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Favourites from "./components/favourites";



function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path={'/'}
                         component={Main}/>
                  <Route exact path={'/favourites'}
                         component={Favourites}/>
              </Switch>


          </div>
      </Router>

  );
}

export default App;
