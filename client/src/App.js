import React from "react";
import { Switch, Route } from "react-router-dom";

///Import Components Here

import Header from "./components/header";
import Inventory from "./components/inventory";
import ProductSummary from "./components/inventory/productSummary";
import EditProduct from "./components/inventory/editProduct"; 
import Location from "./components/location";

// import TableHeader from "./components/location/locationTableHeader";
// import TableHeaderInventory from "./components/inventory/InventoryTableHeader";
// import InventoryKbabMenu from "./components/inventory/InventoryKbabMenu";

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route exact path="/inventory" component={Inventory} />
        <Route
          path="/inventory/:warehouse/:product"
          render={props => {
            return (
              <>
                <ProductSummary {...props} />
              </>
            );
          }}
        />
        <Route path="/edit/:warehouse/:product" component={EditProduct} />
        <Route path="/locations" component={Location} />
      </Switch>
    </div>
  );
}

export default App;
