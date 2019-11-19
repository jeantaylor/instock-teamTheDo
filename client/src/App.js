import React from "react";
import { Switch, Route } from "react-router-dom";

///Import Components Here

import Header from "./components/Header"; 
import Inventory from "./components/Inventory"; 
import Location from "./components/Location"; 
// import TableHeader from "./components/location/LocationTableHeader";
import TableHeaderInventory from "./components/inventory/InventoryTableHeader";
import ProductHeader from "./components/inventory/ProductHeader";

function App() {
  return (
    <div className='app'>
      <Header />
      <ProductHeader/>
      <div className='inventory'>
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
