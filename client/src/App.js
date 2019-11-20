import React from "react";
import { Switch, Route } from "react-router-dom";

///Import Components Here

<<<<<<< HEAD
import Header from "./components/header";
import Inventory from "./components/inventory";
import Location from "./components/location";
=======
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Location from "./components/Location";
//import ProductHeader from "./components/inventory/ProductHeader";
>>>>>>> 099ddbf0a41a3d6488234f37a8533665dceda601
// import TableHeader from "./components/location/locationTableHeader";
// import TableHeaderInventory from "./components/inventory/InventoryTableHeader";
// import InventoryKbabMenu from "./components/inventory/InventoryKbabMenu"; 


function App() {
  return (
    <div className="app">
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
