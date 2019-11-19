import React from "react";
import { Switch, Route } from "react-router-dom";

///Import Components Here
import Header from "./components/header";
import Inventory from "./components/inventory";
import Location from "./components/location";
// import TableHeader from "./components/location/locationTableHeader";
import TableHeaderInventory from "./components/inventory/inventoryTableHeader";

function App() {
  return (
    <div className='app'>
      <div className='inventory'>
        <Header />
        <h1 className='inventory__heading'>Inventory</h1>
        <TableHeaderInventory />
        <Switch>
          <Route exact path='/inventory' component={Inventory} />
          <Route
            path='/inventory/:ref'
            render={props => {
              return <Inventory {...props} />;
            }}
          />
          <Route path='/location' component={Location} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
