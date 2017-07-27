'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createMatchEnhancer;

var _ActionTypes = require('farce/lib/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _redux = require('redux');

var _ActionTypes3 = require('./ActionTypes');

var _ActionTypes4 = _interopRequireDefault(_ActionTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMatchMiddleware(matcher) {
  return function matchMiddleware() {
    return function (next) {
      return function (action) {
        var type = action.type,
            payload = action.payload;

        if (type !== _ActionTypes2.default.UPDATE_LOCATION) {
          return next(action);
        }

        return next({
          type: _ActionTypes4.default.UPDATE_MATCH,
          payload: (0, _extends3.default)({
            location: payload
          }, matcher.match(payload))
        });
      };
    };
  };
}

function createMatchEnhancer(matcher) {
  return function matchEnhancer(createStore) {
    return function () {
      var middlewareEnhancer = (0, _redux.applyMiddleware)(createMatchMiddleware(matcher));

      var store = middlewareEnhancer(createStore).apply(undefined, arguments);

      return (0, _extends3.default)({}, store, {
        found: { matcher: matcher }
      });
    };
  };
}
module.exports = exports['default'];