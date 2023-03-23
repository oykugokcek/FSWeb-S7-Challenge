import Header from "./Components/Header";
import Body from "./Components/Body";
import RestaurantList from "./Components/RestaurantList";
import { Switch, Route } from "react-router-dom";
import Help from "./Pages/Help";
import KitchenList from "./Components/KitchenList";
import { useState } from "react";
import PizzaForm from "./Components/PizzaForm";
import CalculateCost from "./Components/CalculateCost";
import MockupPizza from "./Components/MockupPizza";

function App() {
  let initialData = {
    size: "",
    gluten:"",
    toppings: [],
    anythingelse:"" 
}
const [data, setData] = useState(initialData);
const [cost, setCost] = useState(0);
  return (
    <div className="font-openSans bg-[#F1F1F1] ">
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="">
            <Body />
            <KitchenList/>
            <RestaurantList />
          </div>
        </Route>
        <Route path="/form">
          
          <MockupPizza cost={cost}/>
          <PizzaForm data={data} setData={setData}/>
          <CalculateCost data={data} cost={cost} setCost={setCost}/>
        
        </Route>
        <Route path="/help">
        <Help />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
