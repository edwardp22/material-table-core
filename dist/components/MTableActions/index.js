"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function MTableActions(_ref) {
  var actions = _ref.actions,
    columns = _ref.columns,
    components = _ref.components,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? {} : _ref$data,
    onColumnsChanged = _ref.onColumnsChanged,
    size = _ref.size,
    disabled = _ref.disabled,
    forwardedRef = _ref.forwardedRef;
  if (!actions) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    },
    ref: forwardedRef
  }, actions.map(function (action, index) {
    return /*#__PURE__*/_react["default"].createElement(components.Action, {
      action: action,
      key: 'action-' + index,
      columns: columns,
      data: data,
      size: size,
      onColumnsChanged: onColumnsChanged,
      disabled: disabled
    });
  }));
}
MTableActions.propTypes = {
  columns: _propTypes["default"].array,
  components: _propTypes["default"].object.isRequired,
  actions: _propTypes["default"].array.isRequired,
  data: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].arrayOf(_propTypes["default"].object)]),
  disabled: _propTypes["default"].bool,
  onColumnsChanged: _propTypes["default"].func,
  size: _propTypes["default"].string,
  forwardedRef: _propTypes["default"].element
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].forwardRef(function MTableActionsRef(props, ref) {
  return /*#__PURE__*/_react["default"].createElement(MTableActions, (0, _extends2["default"])({}, props, {
    forwardedRef: ref
  }));
});