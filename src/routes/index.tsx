/* React imports */
import React from "react";
import { Switch, Route } from "react-router-dom";

/* Components */
import Home from "../pages/Home";

const Routes: React.FC = () => (
  <Switch>
    {/* HOME PAGE */}
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routes;
