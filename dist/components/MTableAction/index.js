'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _Icon = _interopRequireDefault(require('@mui/material/Icon'));
var _IconButton = _interopRequireDefault(require('@mui/material/IconButton'));
var _Tooltip = _interopRequireDefault(require('@mui/material/Tooltip'));
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          (0, _defineProperty2['default'])(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
} /* eslint-disable multiline-ternary */
function MTableAction(_ref) {
  var _ref$action = _ref.action,
    propsAction = _ref$action === void 0 ? defaultProps.action : _ref$action,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? defaultProps.data : _ref$data,
    size = _ref.size,
    forwardedRef = _ref.forwardedRef,
    disabled = _ref.disabled;
  var action = propsAction;
  if (typeof action === 'function') {
    action = action(data);
    if (!action) {
      return null;
    }
  }
  if (action.action) {
    action = action.action(data);
    if (!action) {
      return null;
    }
  }
  if (action.hidden) {
    return null;
  }
  var isDisabled = action.disabled || disabled;
  var handleOnClick = function handleOnClick(event) {
    if (action.onClick) {
      action.onClick(event, data);
      event.stopPropagation();
    }
  };

  // You may provide events via the "action.handlers" prop. It is an object.
  // The event name is the key, and the value is the handler func.
  var handlers = action.handlers || {};
  var eventHandlers = Object.entries(handlers).reduce(function (o, _ref2) {
    var _ref3 = (0, _slicedToArray2['default'])(_ref2, 2),
      k = _ref3[0],
      v = _ref3[1];
    o[k] = function (e) {
      return v(e, data);
    };
    return o;
  }, {});
  var icon = null;
  switch ((0, _typeof2['default'])(action.icon)) {
    case 'string':
      icon = /*#__PURE__*/ _react['default'].createElement(
        _Icon['default'],
        action.iconProps,
        action.icon
      );
      break;
    case 'function':
      icon = action.icon(
        _objectSpread(
          _objectSpread({}, action.iconProps),
          {},
          {
            disabled: disabled
          }
        )
      );
      break;
    case 'undefined':
      icon = null;
      break;
    default:
      icon = /*#__PURE__*/ _react['default'].createElement(
        action.icon,
        action.iconProps
      );
  }
  var button = /*#__PURE__*/ _react['default'].createElement(
    _IconButton['default'],
    (0, _extends2['default'])(
      {
        ref: forwardedRef,
        size: size,
        color: 'inherit',
        disabled: isDisabled,
        onClick: handleOnClick
      },
      eventHandlers
    ),
    icon
  );
  if (action.tooltip) {
    // fix for issue #1049
    // https://github.com/mbrn/material-table/issues/1049
    return isDisabled
      ? /*#__PURE__*/ _react['default'].createElement(
          _Tooltip['default'],
          {
            title: action.tooltip
          },
          /*#__PURE__*/ _react['default'].createElement('span', null, button)
        )
      : /*#__PURE__*/ _react['default'].createElement(
          _Tooltip['default'],
          {
            title: action.tooltip
          },
          button
        );
  } else {
    return button;
  }
}
var defaultProps = {
  action: {},
  data: {}
};
MTableAction.propTypes = {
  action: _propTypes['default'].oneOfType([
    _propTypes['default'].func,
    _propTypes['default'].object
  ]).isRequired,
  columns: _propTypes['default'].array,
  data: _propTypes['default'].oneOfType([
    _propTypes['default'].object,
    _propTypes['default'].arrayOf(_propTypes['default'].object)
  ]),
  disabled: _propTypes['default'].bool,
  onColumnsChanged: _propTypes['default'].func,
  size: _propTypes['default'].string
};
var _default = (exports['default'] = /*#__PURE__*/ _react['default'].forwardRef(
  function MTableActionRef(props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      MTableAction,
      (0, _extends2['default'])({}, props, {
        forwardedRef: ref
      })
    );
  }
));
