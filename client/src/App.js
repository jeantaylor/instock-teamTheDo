import React from "react";
import { Switch, Route } from "react-router-dom";

///Import Components Here

import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Location from "./components/Location";
// import TableHeader from "./components/location/locationTableHeader";
// import TableHeaderInventory from "./components/inventory/InventoryTableHeader";

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/inventory' component={Inventory} />
        <Route
          path='/inventory/:ref'
          render={props => {
            return <Inventory {...props} />;
          }}
        />
        <Route path='/locations' component={Location} />
      </Switch>
    </div>
  );
}

export default App;
