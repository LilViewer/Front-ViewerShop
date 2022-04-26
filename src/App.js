import logo from './logo.svg';
import './App.css';
import React from "react";
import General from "./routes/General/General";
import Basket from "./routes/Basket/Basket";
import Desired from "./routes/Desired/Desired";
import Keys from "./routes/Keys/Keys";
import Login from "./routes/Login/Login";
import Loterey from "./routes/Loterey/Loterey";
import Profil from "./routes/Profil/Profil";
import Tovar from "./routes/Tovar/Tovar";

import {Route, Switch} from "react-router-dom";
import ContextData from "./Context/Date/ContextData";
import ReducerData from "./Context/Date/ReducerData";
import StateData from "./Context/Date/StateData";
import Test from "./routes/Test/Test";
import Filteres from "./routes/Filteres/Filteres";
import Buy from "./Buy/Buy";

function App() {
  const [stateData, dispatchData] = React.useReducer(ReducerData, StateData)
  return (
    <Switch>
      <ContextData.Provider value={{stateData, dispatchData}}>
        <Route path='/' exact component={General} />
        <Route path='/Basket'  component={Basket} />
        <Route path='/Desired'  component={Desired} />
        <Route path='/Keys'  component={Keys} />
        <Route path='/Login'  component={Login} />
        <Route path='/Loterey'  component={Loterey} />
        <Route path='/Profil'  component={Profil} />
        <Route path='/Tovar/:tovarid'  component={Tovar} />
        <Route path='/Test'  component={Test} />
        <Route path='/Filter/Genre/:GenreTovars' component={Filteres} />
        <Route path='/Filter/Developer/:DeveloperTovars' component={Filteres} />
        <Route path='/Filter/Publisher/:PublisherTovars' component={Filteres} />
        <Route path='/Filter/Activation/:ActivationTovars' component={Filteres} />
        <Route path='/Filter/Region/:RegionTovars' component={Filteres} />
        <Route path='/Buy'  component={Buy} />

      </ContextData.Provider>
    </Switch>


  );
}

export default App;
