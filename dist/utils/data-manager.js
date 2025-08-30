"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _dateFns = require("date-fns");
var _uuid = require("uuid");
var _ = require("./");
var _commonValues = require("./common-values");
var _constants = require("./constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var DataManager = exports["default"] = /*#__PURE__*/function () {
  function DataManager() {
    var _this = this;
    (0, _classCallCheck2["default"])(this, DataManager);
    (0, _defineProperty2["default"])(this, "checkForId", false);
    (0, _defineProperty2["default"])(this, "applyFilters", false);
    (0, _defineProperty2["default"])(this, "applySearch", false);
    (0, _defineProperty2["default"])(this, "applySort", false);
    (0, _defineProperty2["default"])(this, "currentPage", 0);
    (0, _defineProperty2["default"])(this, "detailPanelType", 'multiple');
    (0, _defineProperty2["default"])(this, "lastDetailPanelRow", undefined);
    (0, _defineProperty2["default"])(this, "lastEditingRow", undefined);
    (0, _defineProperty2["default"])(this, "maxColumnSort", 1);
    (0, _defineProperty2["default"])(this, "orderByCollection", []);
    (0, _defineProperty2["default"])(this, "defaultOrderByCollection", []);
    (0, _defineProperty2["default"])(this, "pageSize", 5);
    (0, _defineProperty2["default"])(this, "paging", true);
    (0, _defineProperty2["default"])(this, "parentFunc", null);
    (0, _defineProperty2["default"])(this, "searchText", '');
    (0, _defineProperty2["default"])(this, "searchDebounceDelay", 500);
    (0, _defineProperty2["default"])(this, "selectedCount", 0);
    (0, _defineProperty2["default"])(this, "treefiedDataLength", 0);
    (0, _defineProperty2["default"])(this, "treeDataMaxLevel", 0);
    (0, _defineProperty2["default"])(this, "groupedDataLength", 0);
    (0, _defineProperty2["default"])(this, "defaultExpanded", false);
    (0, _defineProperty2["default"])(this, "bulkEditOpen", false);
    (0, _defineProperty2["default"])(this, "bulkEditChangedRows", {});
    (0, _defineProperty2["default"])(this, "clientSorting", true);
    (0, _defineProperty2["default"])(this, "data", []);
    (0, _defineProperty2["default"])(this, "columns", []);
    (0, _defineProperty2["default"])(this, "filteredData", []);
    (0, _defineProperty2["default"])(this, "searchedData", []);
    (0, _defineProperty2["default"])(this, "groupedData", []);
    (0, _defineProperty2["default"])(this, "treefiedData", []);
    (0, _defineProperty2["default"])(this, "sortedData", []);
    (0, _defineProperty2["default"])(this, "pagedData", []);
    (0, _defineProperty2["default"])(this, "renderData", []);
    (0, _defineProperty2["default"])(this, "filtered", false);
    (0, _defineProperty2["default"])(this, "searched", false);
    (0, _defineProperty2["default"])(this, "grouped", false);
    (0, _defineProperty2["default"])(this, "treefied", false);
    (0, _defineProperty2["default"])(this, "sorted", false);
    (0, _defineProperty2["default"])(this, "paged", false);
    (0, _defineProperty2["default"])(this, "tableWidth", 'full');
    (0, _defineProperty2["default"])(this, "tableStyleWidth", '100%');
    (0, _defineProperty2["default"])(this, "rootGroupsIndex", {});
    (0, _defineProperty2["default"])(this, "changeGroupSelected", function (checked, path) {
      var currentGroup;
      var currentGroupArray = _this.groupedData;
      path.forEach(function (value) {
        currentGroup = currentGroupArray.find(function (group) {
          return group.value === value;
        });
        currentGroupArray = currentGroup.groups;
      });
      var _setCheck = function setCheck(data) {
        data.forEach(function (element) {
          if (element.groups.length > 0) {
            _setCheck(element.groups);
          } else {
            element.data.forEach(function (d) {
              if (d.tableData.checked !== checked) {
                d.tableData.checked = d.tableData.disabled ? false : checked;
                _this.selectedCount = _this.selectedCount + (checked ? 1 : -1);
              }
            });
          }
        });
      };
      _setCheck([currentGroup]);
    });
    (0, _defineProperty2["default"])(this, "getOrderByCollection", function () {
      return _this.orderByCollection.filter(function (collection) {
        return collection.sortOrder;
      });
    });
    (0, _defineProperty2["default"])(this, "sortOrderCollection", function (list) {
      return list.sort(function (a, b) {
        if (!a.sortOrder) return 1;
        if (!b.sortOrder) return -1;
        return a.sortOrder - b.sortOrder;
      });
    });
    (0, _defineProperty2["default"])(this, "startCellEditable", function (rowData, columnDef) {
      rowData.tableData.editCellList = [].concat((0, _toConsumableArray2["default"])(rowData.tableData.editCellList || []), [columnDef]);
    });
    (0, _defineProperty2["default"])(this, "finishCellEditable", function (rowData, columnDef) {
      if (rowData.tableData.editCellList) {
        var index = rowData.tableData.editCellList.findIndex(function (c) {
          return c.tableData.id.toString() === columnDef.tableData.id.toString();
        });
        if (index !== -1) {
          rowData.tableData.editCellList.splice(index, 1);
        }
      }
    });
    (0, _defineProperty2["default"])(this, "clearBulkEditChangedRows", function () {
      _this.bulkEditChangedRows = {};
    });
    (0, _defineProperty2["default"])(this, "onBulkEditRowChanged", function (oldData, newData) {
      _this.bulkEditChangedRows[oldData.tableData.id] = {
        oldData: oldData,
        newData: newData
      };
    });
    (0, _defineProperty2["default"])(this, "expandTreeForNodes", function (data) {
      data.forEach(function (row) {
        var currentRow = row;
        while (_this.parentFunc(currentRow, _this.data)) {
          var parent = _this.parentFunc(currentRow, _this.data);
          if (parent) {
            parent.tableData.isTreeExpanded = true;
          }
          currentRow = parent;
        }
      });
    });
    (0, _defineProperty2["default"])(this, "findDataByPath", function (renderData, path) {
      if (_this.isDataType('tree')) {
        var node = path.reduce(function (result, current) {
          return result && result.tableData && result.tableData.childRows && result.tableData.childRows.find(function (row) {
            return row && row.tableData.uuid === current;
          });
        }, {
          tableData: {
            childRows: renderData
          }
        });
        return node;
      } else {
        var data = {
          groups: renderData
        };
        var _node = path.reduce(function (result, current) {
          if (result.groups.length > 0) {
            return result.groups[current];
          } else if (result.data) {
            return result.data[current] || result.data.find(function (data) {
              var _data$tableData;
              return ((_data$tableData = data.tableData) === null || _data$tableData === void 0 ? void 0 : _data$tableData.uuid) === current;
            });
          } else {
            return undefined;
          }
        }, data);
        return _node;
      }
    });
    (0, _defineProperty2["default"])(this, "getFieldValue", function (rowData, columnDef) {
      var lookup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var value = typeof rowData[columnDef.field] !== 'undefined' ? rowData[columnDef.field] : (0, _.selectFromObject)(rowData, columnDef.field);
      if (columnDef.lookup && lookup) {
        value = columnDef.lookup[value];
      }
      return value;
    });
    (0, _defineProperty2["default"])(this, "getRenderState", function () {
      if (_this.filtered === false) {
        _this.filterData();
      }
      if (_this.searched === false) {
        _this.searchData();
      }
      if (_this.grouped === false && _this.isDataType('group')) {
        _this.groupData();
      }
      if (_this.treefied === false && _this.isDataType('tree')) {
        _this.treefyData();
      }
      if (_this.sorted === false) {
        _this.sortData();
      }
      if (_this.paged === false) {
        _this.pageData();
      }
      return {
        columns: _this.columns,
        currentPage: _this.currentPage,
        data: _this.sortedData,
        lastEditingRow: _this.lastEditingRow,
        orderByCollection: _this.orderByCollection,
        maxColumnSort: _this.maxColumnSort,
        originalData: (0, _toConsumableArray2["default"])(_this.data),
        pageSize: _this.pageSize,
        renderData: _this.pagedData,
        searchText: _this.searchText,
        selectedCount: _this.selectedCount,
        treefiedDataLength: _this.treefiedDataLength,
        treeDataMaxLevel: _this.treeDataMaxLevel,
        groupedDataLength: _this.groupedDataLength,
        tableStyleWidth: _this.tableStyleWidth
      };
    });
    // =====================================================================================================
    // DATA MANIPULATIONS
    // =====================================================================================================
    (0, _defineProperty2["default"])(this, "filterData", function () {
      _this.searched = _this.grouped = _this.treefied = _this.sorted = _this.paged = false;
      _this.filteredData = (0, _toConsumableArray2["default"])(_this.data);
      if (_this.applyFilters) {
        _this.columns.filter(function (columnDef) {
          return columnDef.tableData.filterValue !== undefined;
        }).forEach(function (columnDef) {
          var lookup = columnDef.lookup,
            type = columnDef.type,
            tableData = columnDef.tableData;
          if (columnDef.customFilterAndSearch) {
            _this.filteredData = _this.filteredData.filter(function (row) {
              return !!columnDef.customFilterAndSearch(tableData.filterValue, row, columnDef);
            });
          } else {
            if (lookup) {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef, false);
                return !tableData.filterValue || tableData.filterValue.length === 0 || tableData.filterValue.indexOf(value !== undefined && value !== null && value.toString()) > -1;
              });
            } else if (type === 'numeric') {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef);
                return value + '' === tableData.filterValue;
              });
            } else if (type === 'boolean' && tableData.filterValue) {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef);
                return value && tableData.filterValue === 'checked' || !value && tableData.filterValue === 'unchecked';
              });
            } else if (['date', 'datetime'].includes(type)) {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef);
                var currentDate = value ? new Date(value) : null;
                if (currentDate && currentDate.toString() !== 'Invalid Date') {
                  var selectedDate = tableData.filterValue;
                  var currentDateToCompare = '';
                  var selectedDateToCompare = '';
                  if (type === 'date') {
                    currentDateToCompare = (0, _dateFns.formatDate)(currentDate, 'MM/dd/yyyy');
                    selectedDateToCompare = (0, _dateFns.formatDate)(selectedDate, 'MM/dd/yyyy');
                  } else if (type === 'datetime') {
                    currentDateToCompare = (0, _dateFns.formatDate)(currentDate, 'MM/dd/yyyy - HH:mm');
                    selectedDateToCompare = (0, _dateFns.formatDate)(selectedDate, 'MM/dd/yyyy - HH:mm');
                  }
                  return currentDateToCompare === selectedDateToCompare;
                }
                return true;
              });
            } else if (type === 'time') {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef);
                var currentHour = value || null;
                if (currentHour) {
                  var selectedHour = tableData.filterValue;
                  var currentHourToCompare = (0, _dateFns.formatDate)(selectedHour, 'HH:mm');
                  return currentHour === currentHourToCompare;
                }
                return true;
              });
            } else {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef);
                return value !== undefined && value !== null && value.toString().toUpperCase().includes(tableData.filterValue.toUpperCase());
              });
            }
          }
        });
      }
      _this.filtered = true;
    });
    (0, _defineProperty2["default"])(this, "searchData", function () {
      _this.grouped = _this.treefied = _this.sorted = _this.paged = false;
      _this.searchedData = (0, _toConsumableArray2["default"])(_this.filteredData);
      if (_this.searchText && _this.applySearch) {
        var trimmedSearchText = _this.searchText.trim();
        _this.searchedData = _this.searchedData.filter(function (row) {
          return _this.columns.filter(function (columnDef) {
            return columnDef.searchable === undefined ? !columnDef.hidden : columnDef.searchable;
          }).some(function (columnDef) {
            if (columnDef.customFilterAndSearch) {
              return !!columnDef.customFilterAndSearch(trimmedSearchText, row, columnDef);
            } else if (columnDef.field) {
              var value = _this.getFieldValue(row, columnDef);
              if (value) {
                return value.toString().toUpperCase().includes(trimmedSearchText.toUpperCase());
              }
            }
            return false;
          });
        });
      }
      _this.searched = true;
    });
    (0, _defineProperty2["default"])(this, "clearCriteria", function () {
      _this.changeOrder(-1, '');
      _this.changeSearchText('');
      var _iterator = _createForOfIteratorHelper(_this.columns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var column = _step.value;
          _this.changeFilterValue(column.tableData.id, '');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      _this.changeSearchText('');
      _this.changePaging(0);
    });
  }
  return (0, _createClass2["default"])(DataManager, [{
    key: "setData",
    value: function setData(data, idSynonym) {
      var _this2 = this;
      this.selectedCount = 0;
      var prevDataObject = {};
      if (this.data.length !== 0 && this.data[0][idSynonym] !== undefined) {
        prevDataObject = this.data.reduce(function (obj, row) {
          obj[row.tableData.id] = row.tableData;
          return obj;
        }, {});
      }
      if (process.env.NODE_ENV === 'development' && !this.checkForId) {
        this.checkForId = true;
        if (data.some(function (d) {
          return d[idSynonym] === undefined;
        })) {
          console.warn('The table requires all rows to have an unique id property. A row was provided without id in the rows prop. To prevent the loss of state between renders, please provide an unique id for each row.');
        }
      }
      this.data = data.map(function (row, index) {
        var prevTableData = prevDataObject[row[idSynonym]] || {};
        var tableData = _objectSpread(_objectSpread({
          index: index,
          id: row[idSynonym] || index,
          // `uuid` acts as our 'key' and is generated when new data
          // is passed into material-table externally.
          uuid: row.uuid || (0, _uuid.v4)()
        }, prevTableData), row.tableData);
        if (tableData.checked) {
          _this2.selectedCount++;
        }
        var newRow = _objectSpread(_objectSpread({}, row), {}, {
          tableData: tableData
        });
        if (_this2.lastDetailPanelRow && _this2.lastDetailPanelRow.tableData === prevTableData) {
          _this2.lastDetailPanelRow = newRow;
        }
        if (_this2.lastEditingRow && _this2.lastEditingRow.tableData === prevTableData) {
          _this2.lastEditingRow = newRow;
        }
        return newRow;
      });
      this.filtered = false;
    }
  }, {
    key: "setTableWidth",
    value: function setTableWidth(tableWidth) {
      this.tableWidth = tableWidth;
    }
  }, {
    key: "setColumns",
    value: function setColumns(columns) {
      var prevColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var savedColumns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var usedWidthPx = 0;
      var usedWidthNotPx = [];
      this.columns = columns.map(function (columnDef, index) {
        var _savedColumns$columnD;
        var widthPx = (0, _commonValues.widthToNumber)(columnDef.width);
        var width = typeof columnDef.width === 'number' ? columnDef.width + 'px' : columnDef.width;
        if (width // &&
        // columnDef.tableData // &&
        // columnDef.tableData.width !== undefined
        ) {
          if (!isNaN(widthPx)) {
            usedWidthPx += widthPx;
          } else {
            usedWidthNotPx.push(width);
          }
        }
        var prevColumn = prevColumns.find(function (_ref) {
          var id = _ref.id;
          return id === index;
        });
        var savedColumnTableData = (_savedColumns$columnD = savedColumns[columnDef.field]) !== null && _savedColumns$columnD !== void 0 ? _savedColumns$columnD : {};
        var tableData = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
          columnOrder: index,
          filterValue: columnDef.defaultFilter,
          filterOperator: columnDef.defaultFilterOperator || '=',
          groupOrder: columnDef.defaultGroupOrder,
          groupSort: columnDef.defaultGroupSort || 'asc',
          width: width,
          initialWidth: width,
          widthPx: isNaN(widthPx) ? undefined : widthPx,
          additionalWidth: 0
        }, savedColumnTableData), prevColumn ? prevColumn.tableData : {}), columnDef.tableData), {}, {
          id: index
        });
        columnDef.tableData = tableData;
        return columnDef;
      });
      var undefWidthCols = this.columns.filter(function (c) {
        if (c.hidden) {
          // Hidden column
          return false;
        }
        if (c.columnDef && c.columnDef.tableData && c.columnDef.tableData.width) {
          // tableData.width already calculated
          return false;
        }
        // Calculate width if no value provided
        return c.width === undefined;
      });
      var usedWidth = (usedWidthPx !== 0 ? "".concat(usedWidthPx, "px") : '0px') + (usedWidthNotPx.length > 0 ? ' - ' + usedWidthNotPx.join(' - ') : '');
      undefWidthCols.forEach(function (columnDef) {
        columnDef.tableData.width = columnDef.tableData.initialWidth = "calc((100% - ".concat(usedWidth, ") / ").concat(undefWidthCols.length, ")");
      });
      this.tableStyleWidth = this.tableWidth === 'full' || undefWidthCols.length > 0 || usedWidthNotPx.length > 0 ? '100%' : usedWidthPx;
    }
  }, {
    key: "setDefaultExpanded",
    value: function setDefaultExpanded(expanded) {
      this.defaultExpanded = expanded;
    }
  }, {
    key: "setClientSorting",
    value: function setClientSorting(clientSorting) {
      this.clientSorting = !!clientSorting;
    }
  }, {
    key: "setMaxColumnSort",
    value: function setMaxColumnSort(maxColumnSort) {
      var availableColumnsLength = this.columns.filter(function (column) {
        return column.sorting !== false;
      }).length;
      if (maxColumnSort === _constants.ALL_COLUMNS) {
        this.maxColumnSort = availableColumnsLength;
      } else {
        this.maxColumnSort = Math.min(maxColumnSort, availableColumnsLength);
      }
    }
  }, {
    key: "setOrderByCollection",
    value: function setOrderByCollection() {
      var prevOrderByCollection = this.getOrderByCollection();
      var prevColumns = this.columns.map(function (columnDef) {
        var id = columnDef.tableData.id;
        var foundCollection = prevOrderByCollection.find(function (collection) {
          return collection.orderBy === id;
        });
        if (foundCollection) {
          return _objectSpread({}, foundCollection);
        } else {
          return {
            orderBy: columnDef.tableData.id,
            sortOrder: undefined,
            orderDirection: '',
            orderByField: columnDef.field
          };
        }
      });
      prevColumns = this.sortOrderCollection(prevColumns);
      this.orderByCollection = (0, _toConsumableArray2["default"])(prevColumns);
    }
  }, {
    key: "setDefaultOrderByCollection",
    value: function setDefaultOrderByCollection(defaultOrderByCollection) {
      this.defaultOrderByCollection = (0, _toConsumableArray2["default"])(defaultOrderByCollection);
    }
  }, {
    key: "getDefaultOrderByCollection",
    value: function getDefaultOrderByCollection() {
      return this.defaultOrderByCollection;
    }
  }, {
    key: "changeApplySearch",
    value: function changeApplySearch(applySearch) {
      this.applySearch = applySearch;
      this.searched = false;
    }
  }, {
    key: "changeApplyFilters",
    value: function changeApplyFilters(applyFilters) {
      this.applyFilters = applyFilters;
      this.filtered = false;
    }
  }, {
    key: "changeApplySort",
    value: function changeApplySort(applySort) {
      this.applySort = applySort;
      this.sorted = false;
    }
  }, {
    key: "changePaging",
    value: function changePaging(paging) {
      this.paging = paging;
      this.paged = false;
    }
  }, {
    key: "changeCurrentPage",
    value: function changeCurrentPage(currentPage) {
      this.currentPage = currentPage;
      this.paged = false;
    }
  }, {
    key: "changePageSize",
    value: function changePageSize(pageSize) {
      this.pageSize = pageSize;
      this.paged = false;
    }
  }, {
    key: "changeParentFunc",
    value: function changeParentFunc(parentFunc) {
      this.parentFunc = parentFunc;
    }
  }, {
    key: "changeFilterValue",
    value: function changeFilterValue(columnId, value) {
      var column = this.columns.find(function (c) {
        return c.tableData.id === columnId;
      });
      column.tableData.filterValue = value;
      this.filtered = false;
    }
  }, {
    key: "changeFilterOperator",
    value: function changeFilterOperator(columnId, operator) {
      var column = this.columns.find(function (c) {
        return c.tableData.id === columnId;
      });
      column.tableData.filterOperator = operator;
      this.filtered = false;
    }
  }, {
    key: "changeRowSelected",
    value: function changeRowSelected(checked, path) {
      var _this3 = this;
      var rowData = this.findDataByPath(this.sortedData, path);
      rowData.tableData.checked = checked;
      this.selectedCount = this.selectedCount + (checked ? 1 : -1);
      var _checkChildRows = function checkChildRows(rowData) {
        if (rowData.tableData.childRows) {
          rowData.tableData.childRows.forEach(function (childRow) {
            if (childRow.tableData.checked !== checked) {
              childRow.tableData.checked = checked;
              _this3.selectedCount = _this3.selectedCount + (checked ? 1 : -1);
            }
            _checkChildRows(childRow);
          });
        }
      };
      _checkChildRows(rowData);
      this.filtered = false;
    }
  }, {
    key: "changeDetailPanelVisibility",
    value: function changeDetailPanelVisibility(path, render) {
      var rowData = this.findDataByPath(this.sortedData, path);
      if ((rowData.tableData.showDetailPanel || '').toString() === render.toString()) {
        rowData.tableData.showDetailPanel = undefined;
      } else {
        rowData.tableData.showDetailPanel = render;
      }
      if (this.detailPanelType === 'single' && this.lastDetailPanelRow && this.lastDetailPanelRow !== rowData) {
        this.lastDetailPanelRow.tableData.showDetailPanel = undefined;
      }
      this.lastDetailPanelRow = rowData;
      return rowData;
    }
  }, {
    key: "changeGroupExpand",
    value: function changeGroupExpand(path) {
      var rowData = this.findDataByPath(this.sortedData, path);
      rowData.isExpanded = !rowData.isExpanded;
    }
  }, {
    key: "changeSearchText",
    value: function changeSearchText(searchText) {
      this.searchText = searchText;
      this.searched = false;
      this.currentPage = 0;
    }
  }, {
    key: "changeSearchDebounce",
    value: function changeSearchDebounce(searchDebounceDelay) {
      this.searchDebounceDelay = searchDebounceDelay;
    }
  }, {
    key: "changeRowEditing",
    value: function changeRowEditing(rowData, mode) {
      if (rowData) {
        rowData.tableData.editing = mode;
        if (this.lastEditingRow && this.lastEditingRow !== rowData) {
          this.lastEditingRow.tableData.editing = undefined;
        }
        if (mode) {
          this.lastEditingRow = rowData;
        } else {
          this.lastEditingRow = undefined;
        }
      } else if (this.lastEditingRow) {
        this.lastEditingRow.tableData.editing = undefined;
        this.lastEditingRow = undefined;
      }
    }
  }, {
    key: "changeBulkEditOpen",
    value: function changeBulkEditOpen(bulkEditOpen) {
      this.bulkEditOpen = bulkEditOpen;
    }
  }, {
    key: "changeAllSelected",
    value: function changeAllSelected(checked, selectionProps) {
      var selectedCount = 0;
      var isChecked = function isChecked(row) {
        var selectionResult = selectionProps instanceof Function ? selectionProps(row) : {
          disabled: false
        };
        return row.tableData.disabled || selectionResult.disabled ? false : checked;
      };
      if (this.isDataType('group')) {
        var _setCheck2 = function setCheck(data) {
          data.forEach(function (element) {
            if (element.groups.length > 0) {
              _setCheck2(element.groups);
            } else {
              element.data.forEach(function (d) {
                d.tableData.checked = isChecked(d);
                selectedCount++;
              });
            }
          });
        };
        _setCheck2(this.groupedData);
      } else {
        var _checkChild = function checkChild(row) {
          row.tableData.childRows && row.tableData.childRows.forEach(function (child) {
            child.tableData.checked = isChecked(row);
            _checkChild(child);
          });
        };
        this.searchedData.forEach(function (row) {
          row.tableData.checked = isChecked(row);
          _checkChild(row);
        });
        selectedCount = this.searchedData.length;
      }
      this.selectedCount = checked ? selectedCount : 0;
    }
  }, {
    key: "changeColumnOrder",
    value: function changeColumnOrder(orderBy, orderDirection, sortOrder) {
      var prevColumns = [];
      var sortColumns = this.getOrderByCollection();
      if (sortColumns.length === this.maxColumnSort && !sortOrder) {
        this.orderByCollection[0].orderDirection = '';
        this.orderByCollection[0].sortOrder = undefined;
        prevColumns = this.orderByCollection.map(function (collection) {
          if (collection.sortOrder) {
            collection.sortOrder -= 1;
          } else if (collection.orderBy === orderBy && orderDirection) {
            collection.sortOrder = sortColumns.length;
            collection.orderDirection = orderDirection;
          }
          return collection;
        });
      } else {
        prevColumns = this.orderByCollection.map(function (collection) {
          if (collection.orderBy === orderBy && orderDirection) {
            collection.orderDirection = orderDirection;
            collection.sortOrder = sortOrder || sortColumns.length + 1;
          } else if (!orderDirection && collection.orderBy === orderBy) {
            collection.orderDirection = orderDirection;
            collection.sortOrder = undefined;
          } else if (!orderDirection && sortOrder < collection.sortOrder) {
            collection.sortOrder -= 1;
          }
          return collection;
        });
      }
      prevColumns = this.sortOrderCollection(prevColumns);
      this.orderByCollection = (0, _toConsumableArray2["default"])(prevColumns);
      this.currentPage = 0;
      this.sorted = false;
    }
  }, {
    key: "changeGroupOrder",
    value: function changeGroupOrder(columnId) {
      var column = this.columns.find(function (c) {
        return c.tableData.id === columnId;
      });
      if (column.tableData.groupSort === 'asc') {
        column.tableData.groupSort = 'desc';
      } else {
        column.tableData.groupSort = 'asc';
      }
      this.sorted = false;
    }
  }, {
    key: "changeColumnHidden",
    value: function changeColumnHidden(column, hidden) {
      column.hidden = hidden;
      // https://github.com/mbrn/material-table/pull/2655
      // https://github.com/material-table-core/core/issues/20#issuecomment-752265651
      // Fix #20
      this.setColumns(this.columns);
    }
  }, {
    key: "changeTreeExpand",
    value: function changeTreeExpand(path) {
      var rowData = this.findDataByPath(this.sortedData, path);
      rowData.tableData.isTreeExpanded = !rowData.tableData.isTreeExpanded;
    }
  }, {
    key: "changeDetailPanelType",
    value: function changeDetailPanelType(type) {
      this.detailPanelType = type;
    }
  }, {
    key: "changeByDrag",
    value: function changeByDrag(result) {
      var start = 0;
      var groups = this.columns.filter(function (col) {
        return col.tableData.groupOrder > -1;
      }).sort(function (col1, col2) {
        return col1.tableData.groupOrder - col2.tableData.groupOrder;
      });
      if (result.destination.droppableId === 'groups' && result.source.droppableId === 'groups') {
        start = Math.min(result.destination.index, result.source.index);
        var end = Math.max(result.destination.index, result.source.index);
        groups = groups.slice(start, end + 1);
        if (result.destination.index < result.source.index) {
          // Take last and add as first
          var last = groups.pop();
          groups.unshift(last);
        } else {
          // Take first and add as last
          var _last = groups.shift();
          groups.push(_last);
        }
      } else if (result.destination.droppableId === 'groups' && result.source.droppableId === 'headers') {
        var newGroup = this.columns.find(function (c) {
          return c.tableData.id.toString() === result.draggableId.toString();
        });
        if (!newGroup || newGroup.grouping === false || !newGroup.field) {
          return;
        }
        groups.splice(result.destination.index, 0, newGroup);
      } else if (result.destination.droppableId === 'headers' && result.source.droppableId === 'groups') {
        var removeGroup = this.columns.find(function (c) {
          return c.tableData.id.toString() === result.draggableId.toString();
        });
        removeGroup.tableData.groupOrder = undefined;
        groups.splice(result.source.index, 1);
      } else if (result.destination.droppableId === 'headers' && result.source.droppableId === 'headers') {
        start = Math.min(result.destination.index, result.source.index);
        var _end = Math.max(result.destination.index, result.source.index);

        // get the effective start and end considering hidden columns
        var sorted = this.columns.sort(function (a, b) {
          return a.tableData.columnOrder - b.tableData.columnOrder;
        }).filter(function (column) {
          return column.tableData.groupOrder === undefined && !column.hidden;
        });
        var numHiddenBeforeStart = 0;
        var numVisibleBeforeStart = 0;
        for (var i = 0; i < sorted.length && numVisibleBeforeStart <= start; i++) {
          if (sorted[i].hidden) {
            numHiddenBeforeStart++;
          } else {
            numVisibleBeforeStart++;
          }
        }
        var effectiveStart = start + numHiddenBeforeStart;
        var effectiveEnd = effectiveStart;
        for (var numVisibleInRange = 0; numVisibleInRange < _end - start && effectiveEnd < sorted.length; effectiveEnd++) {
          if (!sorted[effectiveEnd].hidden) {
            numVisibleInRange++;
          }
        }
        var colsToMov = sorted.slice(effectiveStart, effectiveEnd + 1);
        if (result.destination.index < result.source.index) {
          // Take last and add as first
          var _last2 = colsToMov.pop();
          colsToMov.unshift(_last2);
        } else {
          // Take first and add as last
          var _last3 = colsToMov.shift();
          colsToMov.push(_last3);
        }
        for (var _i = 0; _i < colsToMov.length; _i++) {
          colsToMov[_i].tableData.columnOrder = effectiveStart + _i;
        }
        return;
      } else {
        return;
      }
      for (var _i2 = 0; _i2 < groups.length; _i2++) {
        groups[_i2].tableData.groupOrder = start + _i2;
      }
      this.sorted = this.grouped = false;
    }
  }, {
    key: "onColumnResized",
    value: function onColumnResized(id, offset, changedColumnWidthsBeforeOffset, initialColWidths) {
      var column = this.columns.find(function (c) {
        return c.tableData.id === id;
      });
      if (!column) {
        return [];
      }
      var nextColumn = this.columns.find(function (c) {
        return c.tableData.id === id + 1;
      });
      if (this.tableWidth === 'full' && !nextColumn) {
        return [];
      }
      if (offset === 0) {
        // We've finished the column resize
        return this.tableWidth === 'full' ? [column, nextColumn] : [column];
      }
      if (this.tableWidth === 'variable' && this.tableStyleWidth === '100%') {
        // First time we're resizing - resolve all the column widths
        // MTableHeader has ref to
        this.columns.forEach(function (col, index) {
          return _objectSpread(_objectSpread({}, col), {}, {
            tableData: _objectSpread(_objectSpread({}, col.tableData), {}, {
              width: "".concat(initialColWidths[index], "px"),
              widthPx: initialColWidths[index]
            })
          });
        });
        this.tableStyleWidth = initialColWidths.reduce(function (acc, width) {
          return acc + width;
        });
      }
      var changed = [column];
      column.tableData.widthPx = changedColumnWidthsBeforeOffset[0] + offset;
      column.tableData.additionalWidth += offset;
      column.tableData.width = this.tableWidth === 'full' ? "calc(".concat(column.tableData.initialWidth, " + ").concat(column.tableData.additionalWidth, "px)") : "".concat(column.tableData.widthPx, "px");
      if (this.tableWidth === 'full') {
        nextColumn.tableData.widthPx = changedColumnWidthsBeforeOffset[1] - offset;
        nextColumn.tableData.additionalWidth -= offset;
        nextColumn.tableData.width = "calc(".concat(nextColumn.tableData.initialWidth, " + ").concat(nextColumn.tableData.additionalWidth, "px)");
        changed.push(nextColumn);
      }
      if (this.tableWidth === 'variable') {
        this.tableStyleWidth += offset;
      }
      return changed;
    }
  }, {
    key: "findGroupByGroupPath",
    value: function findGroupByGroupPath(renderData, path) {
      var data = {
        groups: renderData,
        groupsIndex: this.rootGroupsIndex
      };
      var node = path.reduce(function (result, current) {
        if (!result) {
          return undefined;
        }
        if (result.groupsIndex[current] !== undefined) {
          return result.groups[result.groupsIndex[current]];
        }
        return undefined;
        // const group = result.groups.find(a => a.value === current);
        // return group;
      }, data);
      return node;
    }
  }, {
    key: "isDataType",
    value: function isDataType(type) {
      var dataType = 'normal';
      if (this.parentFunc) {
        dataType = 'tree';
      } else if (this.columns.find(function (a) {
        return a.tableData.groupOrder > -1;
      })) {
        dataType = 'group';
      }
      return type === dataType;
    }
  }, {
    key: "sort",
    value: function sort(a, b, type) {
      if (type === 'numeric') {
        return a - b;
      } else {
        if (a !== b) {
          // to find nulls
          if (!a) return -1;
          if (!b) return 1;
        }
        return a < b ? -1 : a > b ? 1 : 0;
      }
    }
  }, {
    key: "sortList",
    value: function sortList(list) {
      if (!this.clientSorting) {
        return list;
      }
      var collectionIds = this.orderByCollection.map(function (collection) {
        return collection.orderBy;
      });
      var columnsDefs = new Map();
      this.columns.forEach(function (column) {
        var columnId = column.tableData.id;
        if (collectionIds.includes(columnId)) {
          columnsDefs.set(columnId, column);
        }
      });
      var sort = this.sort;
      var getFieldValue = this.getFieldValue;
      var orderByCollection = this.orderByCollection;
      return list.sort(function sortData(a, b) {
        var columns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : columnsDefs;
        var collection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : orderByCollection;
        var _collection$ = collection[0],
          orderBy = _collection$.orderBy,
          orderDirection = _collection$.orderDirection;
        var columnDef = columns.get(orderBy);
        var compareValue = 0;
        if (columnDef.customSort) {
          if (orderDirection === 'desc') {
            compareValue = columnDef.customSort(b, a, 'row', orderDirection);
          } else {
            compareValue = columnDef.customSort(a, b, 'row', orderDirection);
          }
        } else {
          // Calculate compare value and modify based on order
          compareValue = sort(getFieldValue(a, columnDef), getFieldValue(b, columnDef), columnDef.type);
          compareValue = orderDirection.toLowerCase() === 'desc' ? compareValue * -1 : compareValue;
        }

        // See if the next key needs to be considered
        var checkNextKey = compareValue === 0 && collection.filter(function (col) {
          return col.sortOrder !== undefined;
        }).length !== 1;
        return checkNextKey ? sortData(a, b, columns, collection.slice(1)) : compareValue;
      });
    }
  }, {
    key: "groupData",
    value: function groupData() {
      var _this4 = this;
      this.sorted = this.paged = false;
      this.groupedDataLength = 0;
      var tmpData = (0, _toConsumableArray2["default"])(this.searchedData);
      var groups = this.columns.filter(function (col) {
        return col.tableData.groupOrder > -1;
      }).sort(function (col1, col2) {
        return col1.tableData.groupOrder - col2.tableData.groupOrder;
      });
      var subData = tmpData.reduce(function (result, currentRow) {
        var object = result;
        object = groups.reduce(function (o, colDef) {
          var value = currentRow[colDef.field] || (0, _.selectFromObject)(currentRow, colDef.field);
          var group;
          if (o.groupsIndex[value] !== undefined) {
            group = o.groups[o.groupsIndex[value]];
          }
          if (!group) {
            var path = [].concat((0, _toConsumableArray2["default"])(o.path || []), [value]);
            var isDefaultExpanded = false;
            switch ((0, _typeof2["default"])(_this4.defaultExpanded)) {
              case 'boolean':
                isDefaultExpanded = _this4.defaultExpanded;
                break;
              case 'function':
                isDefaultExpanded = _this4.defaultExpanded(currentRow);
                break;
            }
            var oldGroup = _this4.findGroupByGroupPath(_this4.groupedData, path) || {
              isExpanded: isDefaultExpanded
            };
            group = {
              value: value,
              groups: [],
              groupsIndex: {},
              data: [],
              isExpanded: oldGroup.isExpanded,
              path: path
            };
            o.groups.push(group);
            o.groupsIndex[value] = o.groups.length - 1;
          }
          return group;
        }, object);
        object.data.push(currentRow);
        _this4.groupedDataLength++;
        return result;
      }, {
        groups: [],
        groupsIndex: {}
      });
      this.groupedData = subData.groups;
      this.grouped = true;
      this.rootGroupsIndex = subData.groupsIndex;
    }
  }, {
    key: "treefyData",
    value: function treefyData() {
      var _this5 = this;
      this.sorted = this.paged = false;
      this.data.forEach(function (a) {
        return a.tableData.childRows = null;
      });
      this.treefiedData = [];
      this.treefiedDataLength = 0;
      this.treeDataMaxLevel = 0;
      // if filter or search is enabled, collapse the tree
      if (this.searchText || this.columns.some(function (columnDef) {
        return columnDef.tableData.filterValue;
      })) {
        this.data.forEach(function (row) {
          row.tableData.isTreeExpanded = false;
        });

        // expand the tree for all nodes present after filtering and searching
        this.expandTreeForNodes(this.searchedData);
      }
      var _addRow = function addRow(rowData) {
        rowData.tableData.markedForTreeRemove = false;
        var parent = _this5.parentFunc(rowData, _this5.data);
        if (parent) {
          parent.tableData.childRows = parent.tableData.childRows || [];
          if (!parent.tableData.childRows.includes(rowData)) {
            parent.tableData.childRows.push(rowData);
            _this5.treefiedDataLength++;
          }
          _addRow(parent);
          rowData.tableData.path = [].concat((0, _toConsumableArray2["default"])(parent.tableData.path), [rowData.tableData.uuid]);
          _this5.treeDataMaxLevel = Math.max(_this5.treeDataMaxLevel, rowData.tableData.path.length);
        } else {
          if (!_this5.treefiedData.includes(rowData)) {
            _this5.treefiedData.push(rowData);
            _this5.treefiedDataLength++;
            rowData.tableData.path = [rowData.tableData.uuid];
          }
        }
      };

      // Add all rows initially
      this.data.forEach(function (rowData) {
        _addRow(rowData);
      });
      var markForTreeRemove = function markForTreeRemove(rowData) {
        var pointer = _this5.treefiedData;
        rowData.tableData.path.forEach(function (pathPart) {
          if (pointer.tableData && pointer.tableData.childRows) {
            pointer = pointer.tableData.childRows;
          }
          if (Array.isArray(pointer)) {
            pointer = pointer.find(function (p) {
              return p.tableData.uuid === pathPart;
            });
          }
        });
        pointer.tableData.markedForTreeRemove = true;
      };
      var _traverseChildrenAndUnmark = function traverseChildrenAndUnmark(rowData) {
        if (rowData.tableData.childRows) {
          rowData.tableData.childRows.forEach(function (row) {
            _traverseChildrenAndUnmark(row);
          });
        }
        rowData.tableData.markedForTreeRemove = false;
      };

      // for all data rows, restore initial expand if no search term is available and remove items that shouldn't be there
      this.data.forEach(function (rowData) {
        if (!_this5.searchText && !_this5.columns.some(function (columnDef) {
          return columnDef.tableData.filterValue;
        })) {
          if (rowData.tableData.isTreeExpanded === undefined) {
            var isDefaultExpanded = false;
            switch ((0, _typeof2["default"])(_this5.defaultExpanded)) {
              case 'boolean':
                isDefaultExpanded = _this5.defaultExpanded;
                break;
              case 'function':
                isDefaultExpanded = _this5.defaultExpanded(rowData);
                break;
            }
            rowData.tableData.isTreeExpanded = isDefaultExpanded;
          }
        }
        var hasSearchMatchedChildren = rowData.tableData.isTreeExpanded;
        if (!hasSearchMatchedChildren && _this5.searchedData.indexOf(rowData) < 0) {
          markForTreeRemove(rowData);
        }
      });

      // preserve all children of nodes that are matched by search or filters
      this.data.forEach(function (rowData) {
        if (_this5.searchedData.indexOf(rowData) > -1) {
          _traverseChildrenAndUnmark(rowData);
        }
      });
      var _traverseTreeAndDeleteMarked = function traverseTreeAndDeleteMarked(rowDataArray) {
        for (var i = rowDataArray.length - 1; i >= 0; i--) {
          var item = rowDataArray[i];
          if (item.tableData.childRows) {
            _traverseTreeAndDeleteMarked(item.tableData.childRows);
          }
          if (item.tableData.markedForTreeRemove) rowDataArray.splice(i, 1);
        }
      };
      _traverseTreeAndDeleteMarked(this.treefiedData);
      this.treefiedDataLength = this.treefiedData.length;
      this.treefied = true;
    }
  }, {
    key: "sortData",
    value: function sortData() {
      var _this6 = this;
      this.paged = false;
      if (this.isDataType('group')) {
        this.sortedData = (0, _toConsumableArray2["default"])(this.groupedData);
        var groups = this.columns.filter(function (col) {
          return col.tableData.groupOrder > -1;
        }).sort(function (col1, col2) {
          return col1.tableData.groupOrder - col2.tableData.groupOrder;
        });
        var sortGroups = function sortGroups(list, columnDef) {
          if (columnDef.customSort) {
            return list.sort(columnDef.tableData.groupSort === 'desc' ? function (a, b) {
              return columnDef.customSort(b.value, a.value, 'group', columnDef.tableData.groupSort);
            } : function (a, b) {
              return columnDef.customSort(a.value, b.value, 'group', columnDef.tableData.groupSort);
            });
          } else {
            return list.sort(columnDef.tableData.groupSort === 'desc' ? function (a, b) {
              return _this6.sort(b.value, a.value, columnDef.type);
            } : function (a, b) {
              return _this6.sort(a.value, b.value, columnDef.type);
            });
          }
        };
        this.sortedData = sortGroups(this.sortedData, groups[0]);

        // If you have nested grouped rows and wanted to select one of those row
        // there was an issue.
        // -https://github.com/material-table-core/core/pull/74
        // -https://github.com/mbrn/material-table/issues/2258
        // -https://github.com/mbrn/material-table/issues/2249
        // getGroupsIndex resolves this nested grouped rows selection issue.
        var getGroupsIndex = function getGroupsIndex(groups) {
          return groups.reduce(function (result, group) {
            result[group.value] = groups.findIndex(function (g) {
              return g.value === group.value;
            });
            return result;
          }, {});
        };
        var _sortGroupData = function sortGroupData(list, level) {
          list.forEach(function (element) {
            if (element.groups.length > 0) {
              var column = groups[level];
              element.groups = sortGroups(element.groups, column);
              // For grouped rows that are nested
              element.groupsIndex = getGroupsIndex(element.groups);
              _sortGroupData(element.groups, level + 1);
            } else {
              if (_this6.maxColumnSort > 0 && _this6.getOrderByCollection().length > 0) {
                element.data = _this6.sortList(element.data);
              } else if (_this6.maxColumnSort > 0) {
                element.data = element.data.sort(function (a, b) {
                  return _this6.data.findIndex(function (val) {
                    return val.tableData.id === a.tableData.id;
                  }) - _this6.data.findIndex(function (val) {
                    return val.tableData.id === b.tableData.id;
                  });
                });
              }
            }
          });
        };
        _sortGroupData(this.sortedData, 1);
      } else if (this.isDataType('tree')) {
        this.sortedData = (0, _toConsumableArray2["default"])(this.treefiedData);
        if (this.maxColumnSort > 0 && this.getOrderByCollection().length > 0) {
          this.sortedData = this.sortList(this.sortedData);
          var _sortTree = function sortTree(list) {
            list.forEach(function (item) {
              if (item.tableData.childRows) {
                item.tableData.childRows = _this6.sortList(item.tableData.childRows);
                _sortTree(item.tableData.childRows);
              }
            });
          };
          _sortTree(this.sortedData);
        }
      } else if (this.isDataType('normal')) {
        this.sortedData = (0, _toConsumableArray2["default"])(this.searchedData);
        if (this.maxColumnSort > 0 && this.getOrderByCollection().length > 0 && this.applySort) {
          this.sortedData = this.sortList(this.sortedData);
        }
      }
      this.sorted = true;
    }
  }, {
    key: "pageData",
    value: function pageData() {
      this.pagedData = (0, _toConsumableArray2["default"])(this.sortedData);
      if (this.paging) {
        var startIndex = this.currentPage * this.pageSize;
        var endIndex = startIndex + this.pageSize;
        this.pagedData = this.pagedData.slice(startIndex, endIndex);
      }
      this.paged = true;
    }
  }]);
}();