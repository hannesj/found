'use strict';

exports.__esModule = true;

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = makeRouteConfig;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a route configuration from JSX configuration elements.
 */
function makeRouteConfig(node) {
  return _react2.default.Children.toArray(node).filter(_react2.default.isValidElement).map(function (_ref) {
    var Type = _ref.type,
        _ref$props = _ref.props,
        children = _ref$props.children,
        props = (0, _objectWithoutProperties3.default)(_ref$props, ['children']);

    var route = new Type(props);

    if (children) {
      if (_react2.default.isValidElement(children) || Array.isArray(children)) {
        route.children = makeRouteConfig(children);
      } else {
        var routeGroups = {};
        (0, _entries2.default)(children).forEach(function (_ref2) {
          var groupName = _ref2[0],
              groupRoutes = _ref2[1];

          routeGroups[groupName] = makeRouteConfig(groupRoutes);
        });

        route.children = routeGroups;
      }
    }

    return route;
  });
}
module.exports = exports['default'];