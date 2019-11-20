import React from "react";
import { Switch, Route } from "react-router-dom";

///Import Components Here

import Header from "./components/header";
import Inventory from "./components/inventory";
import Location from "./components/location";
// import TableHeader from "./components/location/locationTableHeader";
// import TableHeaderInventory from "./components/inventory/InventoryTableHeader";
// import InventoryKbabMenu from "./components/inventory/InventoryKbabMenu";
import ProductSummary from "./components/inventory/productSummary";

function App() {
  return (
    <div className="app">
      <Header />
      <ProductSummary product={Inventory} />
      <Switch>
        <Route exact path="/inventory" component={Inventory} />
        <Route
          path="/inventory/:ref"
          render={props => {
            return <Inventory {...props} />;
          }}
        />
        <Route path="/locations" component={Location} />
      </Switch>
    </div>
  );
}

export default App;
