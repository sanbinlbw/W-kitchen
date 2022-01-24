import React from "react";
import { Switch, Route } from "react-router-dom";

function RouteComponent(props) {
  const { component: Component, childrenRoutes } = props;
  return (
    <Route
      render={(routeProps) => {
        return (
          <Component>
            {Array.isArray(childrenRoutes) ? (
              <Switch>
                {childrenRoutes.map((route, index) => (
                  <RouteComponent {...route} key={index} />
                ))}
              </Switch>
            ) : null}
          </Component>
        );
      }}
    />
  );
}

export default RouteComponent;
