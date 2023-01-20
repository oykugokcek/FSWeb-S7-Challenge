import Header from "./Components/Header";
import Body from "./Components/Body";
import RestaurantList from "./Components/RestaurantList";
import { BrowserRouter, Route } from "react-router-dom";
import FormContainer from "./FormComponents/FormContainer";
import Help from "./Pages/Help";

function App() {
  return (
    <div className="font-openSans">
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <div>
            <Body />
            <RestaurantList />
          </div>
        </Route>
        <Route path="/form">
          <FormContainer />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
