import { Route, Switch } from "react-router-dom";

import ROUTES from "./routes";

const Router = () => (
  <Switch>
    {ROUTES.map(({ exact, path, component, key }) => {
      if (path)
        return (
          <Route component={component} path={path} exact={exact} key={key} />
        );

      return <Route component={component} key={key} />;
    })}
  </Switch>
);

export default Router;
