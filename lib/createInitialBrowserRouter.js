'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _BrowserProtocol = require('farce/lib/BrowserProtocol');

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createInitialFarceRouter = require('./createInitialFarceRouter');

var _createInitialFarceRouter2 = _interopRequireDefault(_createInitialFarceRouter);

var _resolver = require('./resolver');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(options) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', (0, _createInitialFarceRouter2.default)((0, _extends3.default)({}, options, {
              historyProtocol: new _BrowserProtocol2.default(),
              resolver: _resolver2.default
            })));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function createInitialBrowserRouter(_x) {
    return _ref.apply(this, arguments);
  }

  return createInitialBrowserRouter;
}();

module.exports = exports['default'];