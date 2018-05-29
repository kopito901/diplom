import React from 'react';
import RouteBlock from './routeBlock';

export default function(props, state) {
  function buildRoutes() {
    let routes = props.routes.list;

    return routes.map((route) => {
      return (
        <RouteBlock route={route} match={props.match} key={route.id}/>
      );
    });
    console.log(routes);
  }

  return (
    <div>
      <h2 className="title">Направления на пересдачу</h2>
      { buildRoutes() }
    </div>
  );
}
