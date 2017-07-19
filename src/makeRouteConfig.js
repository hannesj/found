import React from 'react';

/**
 * Create a route configuration from JSX configuration elements.
 */
export default function makeRouteConfig(node) {
  return React.Children.toArray(node)
    .filter(React.isValidElement)
    .map(({ type: Type, props: { children, groups, ...props } }) => {
      const route = new Type(props);

      if (children) {
        route.children = makeRouteConfig(children);
      }

      if (groups) {
        const routeGroups = {};
        Object.entries(groups).forEach(([groupName, groupRoutes]) => {
          routeGroups[groupName] = makeRouteConfig(groupRoutes);
        });

        route.groups = routeGroups;
      }

      return route;
    });
}
