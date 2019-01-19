"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require(".");

// State :: Effect
var State = (0, _.createEffect)('State', {
  get: (0, _.func)([], 'a'),
  set: (0, _.func)(['a']),
  update: (0, _.func)(['a -> a'], 'a')
}); // State.of :: a -> Runner a

State.of = function (initState) {
  var current = initState;
  return State.handler({
    get: function get(_ref) {
      var resume = _ref.resume;
      return function () {
        return resume(current);
      };
    },
    set: function set(_ref2) {
      var resume = _ref2.resume;
      return function (x) {
        return resume(current = x);
      };
    },
    update: function update(_ref3) {
      var resume = _ref3.resume;
      return function (fn) {
        return resume(current = fn(current));
      };
    }
  });
};

var _default = State;
exports.default = _default;