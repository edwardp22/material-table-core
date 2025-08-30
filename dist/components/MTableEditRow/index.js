'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _TableCell = _interopRequireDefault(require('@mui/material/TableCell'));
var _TableRow = _interopRequireDefault(require('@mui/material/TableRow'));
var _Typography = _interopRequireDefault(require('@mui/material/Typography'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _utils = require('../../utils');
var _store = require('../../store');
var CommonValues = _interopRequireWildcard(
  require('../../utils/common-values')
);
var _validate = require('../../utils/validate');
var _excluded = ['editComponent'],
  _excluded2 = [
    'detailPanel',
    'isTreeData',
    'onRowClick',
    'onRowSelected',
    'onTreeExpandChanged',
    'onToggleDetailPanel',
    'onEditingApproved',
    'onEditingCanceled',
    'getFieldValue',
    'components',
    'columns',
    'errorState',
    'onBulkEditRowChanged',
    'bulkEditChangedRows',
    'scrollWidth',
    'forwardedRef'
  ];
function _getRequireWildcardCache(e) {
  if ('function' != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ('object' != _typeof(e) && 'function' != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ('default' !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n['default'] = e), t && t.set(e, n), n;
}
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
}
function MTableEditRow(props) {
  var icons = (0, _store.useIconStore)();
  var options = (0, _store.useOptionStore)();
  var _useState = (0, _react.useState)(function () {
      var data = props.data
        ? props.data
        : props.columns
            .filter(function (column) {
              return 'initialEditValue' in column && column.field;
            })
            .reduce(function (prev, column) {
              (0,
              _utils.setObjectByKey)(prev, column.field, column.initialEditValue);
              return prev;
            }, {});
      if (
        props.mode === 'bulk' &&
        props.bulkEditChangedRows[data.tableData.id]
      ) {
        data = props.bulkEditChangedRows[data.tableData.id].newData;
      }
      return {
        data: data
      };
    }),
    _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  function renderColumns() {
    var size = CommonValues.elementSize(props);
    var focusedCol = -1;
    var mapArr = props.columns
      .filter(function (columnDef) {
        return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
      })
      .sort(function (a, b) {
        return a.tableData.columnOrder - b.tableData.columnOrder;
      })
      .map(function (columnDef, index) {
        var value = props.getFieldValue(state.data, columnDef, false);
        var getCellStyle = function getCellStyle(columnDef, value) {
          var cellStyle = {
            color: 'inherit'
          };
          if (typeof columnDef.cellStyle === 'function') {
            cellStyle = _objectSpread(
              _objectSpread({}, cellStyle),
              columnDef.cellStyle(value, props.data)
            );
          } else {
            cellStyle = _objectSpread(
              _objectSpread({}, cellStyle),
              columnDef.cellStyle
            );
          }
          if (columnDef.disableClick) {
            cellStyle.cursor = 'default';
          }
          return _objectSpread({}, cellStyle);
        };
        var style = {};
        if (index === 0) {
          style.paddingLeft = 24 + props.level * 20;
        }
        var allowEditing = false;
        if (columnDef.editable === undefined) {
          allowEditing = true;
        }
        if (columnDef.editable === 'always') {
          allowEditing = true;
        }
        if (columnDef.editable === 'onAdd' && props.mode === 'add') {
          allowEditing = true;
        }
        if (columnDef.editable === 'onUpdate' && props.mode === 'update') {
          allowEditing = true;
        }
        if (typeof columnDef.editable === 'function') {
          allowEditing = columnDef.editable(columnDef, props.data);
        }
        if (!columnDef.field || !allowEditing) {
          var readonlyValue = props.getFieldValue(state.data, columnDef);
          return /*#__PURE__*/ _react['default'].createElement(
            props.components.Cell,
            {
              size: size,
              icons: icons,
              columnDef: columnDef,
              value: readonlyValue,
              key: columnDef.tableData.id,
              rowData: props.data,
              style: getCellStyle(columnDef, value)
            }
          );
        } else {
          var editComponent = columnDef.editComponent,
            cellProps = (0, _objectWithoutProperties2['default'])(
              columnDef,
              _excluded
            );
          var EditComponent = editComponent || props.components.EditField;
          var error = (0, _validate.validateInput)(columnDef, state.data);
          if (focusedCol === -1) {
            focusedCol = index;
          }
          return /*#__PURE__*/ _react['default'].createElement(
            _TableCell['default'],
            {
              size: size,
              key: columnDef.tableData.id,
              align:
                ['numeric'].indexOf(columnDef.type) !== -1 ? 'right' : 'left',
              style: getCellStyle(columnDef, value)
            },
            /*#__PURE__*/ _react['default'].createElement(EditComponent, {
              key: columnDef.tableData.id,
              columnDef: cellProps,
              autoFocus: focusedCol === index,
              value: value,
              error: !error.isValid,
              helperText: error.helperText,
              locale: props.localization.dateTimePickerLocalization,
              rowData: state.data,
              onChange: function onChange(value) {
                var data = _objectSpread({}, state.data);
                (0, _utils.setObjectByKey)(data, columnDef.field, value);
                // data[columnDef.field] = value;
                setState({
                  data: data
                });
                if (props.onBulkEditRowChanged) {
                  props.onBulkEditRowChanged(props.data, data);
                }
              },
              onRowDataChange: function onRowDataChange(data) {
                setState({
                  data: data
                });
                if (props.onBulkEditRowChanged) {
                  props.onBulkEditRowChanged(props.data, data);
                }
              }
            })
          );
        }
      });
    return mapArr;
  }
  var isValid = props.columns.every(function (column) {
    var error = (0, _validate.validateInput)(column, state.data);
    return error.isValid;
  });
  var handleSave = function handleSave() {
    if (!isValid) {
      return;
    }
    props.onEditingApproved(props.mode, state.data, props.data);
  };
  function renderActions() {
    if (props.mode === 'bulk') {
      return;
    }
    var size = CommonValues.elementSize(props);
    var actions = [
      {
        icon: icons.Check,
        tooltip: props.localization.saveTooltip,
        disabled: !isValid,
        onClick: handleSave
      },
      {
        icon: icons.Clear,
        tooltip: props.localization.cancelTooltip,
        onClick: function onClick() {
          props.onEditingCanceled(props.mode, props.data);
        }
      }
    ];
    return /*#__PURE__*/ _react['default'].createElement(
      _TableCell['default'],
      {
        size: size,
        padding: 'none',
        key: 'key-actions-column',
        style: _objectSpread(
          _objectSpread(
            {
              width: 42 * actions.length,
              padding: '0px 5px'
            },
            options.editCellStyle
          ),
          options.actionsCellStyle
        )
      },
      /*#__PURE__*/ _react['default'].createElement(props.components.Actions, {
        data: props.data,
        actions: actions,
        components: props.components,
        size: size
      })
    );
  }
  function getStyle() {
    var style = {
      // boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.2)',
      borderBottom: '1px solid red'
    };
    return style;
  }
  var handleKeyDown = function handleKeyDown(e) {
    if (
      e.keyCode === 13 &&
      e.target.type !== 'textarea' &&
      e.target.type !== 'button'
    ) {
      handleSave();
    } else if (e.keyCode === 13 && e.target.type === 'textarea' && e.shiftKey) {
      handleSave();
    } else if (e.keyCode === 27) {
      props.onEditingCanceled(props.mode, props.data);
    }
  };
  var size = CommonValues.elementSize(props);
  var columns;
  if (
    props.mode === 'add' ||
    props.mode === 'update' ||
    props.mode === 'bulk'
  ) {
    columns = renderColumns();
  } else {
    var colSpan = props.columns.filter(function (columnDef) {
      return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
    }).length;
    columns = [
      /*#__PURE__*/ _react['default'].createElement(
        _TableCell['default'],
        {
          size: size,
          padding: options.actionsColumnIndex === 0 ? 'none' : undefined,
          key: 'key-edit-cell',
          colSpan: colSpan
        },
        /*#__PURE__*/ _react['default'].createElement(
          _Typography['default'],
          {
            variant: 'h6'
          },
          props.localization.deleteText
        )
      )
    ];
  }
  if (options.selection) {
    columns.splice(
      0,
      0,
      /*#__PURE__*/ _react['default'].createElement(_TableCell['default'], {
        padding: 'none',
        key: 'key-selection-cell'
      })
    );
  }
  if (props.isTreeData) {
    columns.splice(
      0,
      0,
      /*#__PURE__*/ _react['default'].createElement(_TableCell['default'], {
        padding: 'none',
        key: 'key-tree-data-cell'
      })
    );
  }
  if (options.actionsColumnIndex === -1) {
    columns.push(renderActions());
  } else if (options.actionsColumnIndex >= 0) {
    var endPos = 0;
    if (options.selection) {
      endPos = 1;
    }
    if (props.isTreeData) {
      endPos = 1;
      if (options.selection) {
        columns.splice(1, 1);
      }
    }
    columns.splice(options.actionsColumnIndex + endPos, 0, renderActions());
  }

  // Lastly we add detail panel icon
  if (
    props.detailPanel &&
    options.showDetailPanelIcon !== false &&
    props.mode !== 'bulk'
  ) {
    var alignment = options.detailPanelColumnAlignment;
    var index = alignment === 'left' ? 0 : columns.length;
    columns.splice(
      index,
      0,
      /*#__PURE__*/ _react['default'].createElement(_TableCell['default'], {
        padding: 'none',
        key: 'key-detail-panel-cell'
      })
    );
  }
  props.columns
    .filter(function (columnDef) {
      return columnDef.tableData.groupOrder > -1;
    })
    .forEach(function (columnDef) {
      columns.splice(
        0,
        0,
        /*#__PURE__*/ _react['default'].createElement(_TableCell['default'], {
          padding: 'none',
          key: 'key-group-cell' + columnDef.tableData.id
        })
      );
    });
  var _defaultProps$props = _objectSpread(
      _objectSpread({}, defaultProps),
      props
    ),
    detailPanel = _defaultProps$props.detailPanel,
    isTreeData = _defaultProps$props.isTreeData,
    onRowClick = _defaultProps$props.onRowClick,
    onRowSelected = _defaultProps$props.onRowSelected,
    onTreeExpandChanged = _defaultProps$props.onTreeExpandChanged,
    onToggleDetailPanel = _defaultProps$props.onToggleDetailPanel,
    onEditingApproved = _defaultProps$props.onEditingApproved,
    onEditingCanceled = _defaultProps$props.onEditingCanceled,
    getFieldValue = _defaultProps$props.getFieldValue,
    components = _defaultProps$props.components,
    columnsProp = _defaultProps$props.columns,
    errorState = _defaultProps$props.errorState,
    onBulkEditRowChanged = _defaultProps$props.onBulkEditRowChanged,
    bulkEditChangedRows = _defaultProps$props.bulkEditChangedRows,
    scrollWidth = _defaultProps$props.scrollWidth,
    forwardedRef = _defaultProps$props.forwardedRef,
    rowProps = (0, _objectWithoutProperties2['default'])(
      _defaultProps$props,
      _excluded2
    );
  return /*#__PURE__*/ _react['default'].createElement(
    _TableRow['default'],
    (0, _extends2['default'])(
      {
        onKeyDown: handleKeyDown
      },
      rowProps,
      {
        ref: forwardedRef,
        style: getStyle()
      }
    ),
    columns
  );
}
var defaultProps = {
  actions: [],
  index: 0,
  options: {},
  path: [],
  onBulkEditRowChanged: function onBulkEditRowChanged() {}
};
MTableEditRow.propTypes = {
  actions: _propTypes['default'].array,
  index: _propTypes['default'].number.isRequired,
  data: _propTypes['default'].object,
  detailPanel: _propTypes['default'].oneOfType([
    _propTypes['default'].func,
    _propTypes['default'].arrayOf(
      _propTypes['default'].oneOfType([
        _propTypes['default'].object,
        _propTypes['default'].func
      ])
    )
  ]),
  onRowSelected: _propTypes['default'].func,
  path: _propTypes['default'].arrayOf(_propTypes['default'].number),
  columns: _propTypes['default'].array,
  onRowClick: _propTypes['default'].func,
  onEditingApproved: _propTypes['default'].func,
  onEditingCanceled: _propTypes['default'].func,
  localization: _propTypes['default'].object,
  getFieldValue: _propTypes['default'].func,
  errorState: _propTypes['default'].oneOfType([
    _propTypes['default'].object,
    _propTypes['default'].bool
  ]),
  onBulkEditRowChanged: _propTypes['default'].func
};
var _default = (exports['default'] = /*#__PURE__*/ _react['default'].forwardRef(
  function MTableWithRefEditRow(props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      MTableEditRow,
      (0, _extends2['default'])({}, props, {
        forwardedRef: ref
      })
    );
  }
));
