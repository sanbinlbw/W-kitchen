import React, { useEffect } from "react";
// import CONFIG from '@/config'
import { routesMap } from "./router.config";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteComponent from "../component/RouteComponent";

function Routes() {
  return (
    <Router>
      <Switch>
        {routesMap.map((route, index) => (
          <RouteComponent {...route} key={index} />
        ))}
      </Switch>
    </Router>
  );
}

export default Routes;
