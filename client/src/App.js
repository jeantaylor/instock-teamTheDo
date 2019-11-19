import React from 'react';
import {Switch, Route} from 'react-router-dom'; 

///Import Components Here
import Header from "./components/header"; 
import Inventory from "./components/inventory"; 
import Location from "./components/location"; 

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/inventory" component={Inventory}/>
        <Route path="/inventory/:ref" render = {props =>{
          return (<Inventory {...props} />); 
        }}/>

        <Route path="/location" component={Location} />
      </Switch>
    </div>
  );
}

export default App;
