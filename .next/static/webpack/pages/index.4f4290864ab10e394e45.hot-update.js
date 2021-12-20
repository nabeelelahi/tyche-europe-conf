webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/src/components/braceletModal/index.js":
/*!*****************************************************!*\
  !*** ./pages/src/components/braceletModal/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BraceletModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets */ "./pages/src/assets/index.js");
var _jsxFileName = "D:\\Sufyan Bhai\\Tyche-Europe\\configurator-shopify-app\\custom-bracelet-builder\\pages\\src\\components\\braceletModal\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function BraceletModal(_ref) {
  var _this = this;

  var bracelet = _ref.bracelet,
      visible = _ref.visible,
      setVisible = _ref.setVisible;
  console.log(setVisible);

  function handleCancel() {
    setVisible(false);
  }

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    visible: visible,
    title: "Your Customized Bracelet",
    onCancel: handleCancel,
    footer: [],
    style: {
      height: '100vh',
      width: '100vw'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-bracelet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, bracelet && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, bracelet === null || bracelet === void 0 ? void 0 : bracelet.map(function (item, index) {
    return __jsx("div", {
      className: "bracelet-leaf-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 37
      }
    }, item ? __jsx("img", {
      className: "leaf",
      src: item === null || item === void 0 ? void 0 : item.img,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 57
      }
    }) : __jsx("img", {
      className: "leaf",
      src: _assets__WEBPACK_IMPORTED_MODULE_2__["Leaf"],
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 57
      }
    }));
  })))));
}
_c = BraceletModal;

var _c;

$RefreshReg$(_c, "BraceletModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/src/pages/configurator/index.js":
/*!***********************************************!*\
  !*** ./pages/src/pages/configurator/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Configurator; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets */ "./pages/src/assets/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components */ "./pages/src/components/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config */ "./pages/src/config/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services */ "./pages/src/services/index.js");



var _jsxFileName = "D:\\Sufyan Bhai\\Tyche-Europe\\configurator-shopify-app\\custom-bracelet-builder\\pages\\src\\pages\\configurator\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Header = antd__WEBPACK_IMPORTED_MODULE_4__["Layout"].Header;
function Configurator() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0.00),
      braceletPrice = _useState[0],
      setBraceletPrice = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      selections = _useState2[0],
      setSelections = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      leaves = _useState3[0],
      setLeaves = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      categoryState = _useState4[0],
      setCategoryState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      item = _useState5[0],
      setItem = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      categoryIndex = _useState6[0],
      setCategoryIndex = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(15),
      size = _useState7[0],
      setSize = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      linkPrize = _useState8[0],
      setLinkPrize = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isAddToCart = _useState9[0],
      setIsAddToCart = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]),
      bracelet = _useState10[0],
      setBracelet = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      visible = _useState11[0],
      setVisible = _useState11[1];

  var addToCartMargin = selections.length > 23 ? "575px" : selections.length > 22 ? "550px" : selections.length > 21 ? "500px" : selections.length > 20 ? "475px" : selections.length > 19 ? "450px" : selections.length > 18 ? "425px" : selections.length > 17 ? "400px" : selections.length > 16 ? "375px" : selections.length > 15 ? "350px" : selections.length > 14 ? "325px" : selections.length > 13 ? "300px" : selections.length > 12 ? "275px" : selections.length > 10 ? "250px" : selections.length > 8 && "225px";
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getProducts();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    selectionAndPrize();
  }, []);

  function getProducts() {
    return _getProducts.apply(this, arguments);
  }

  function _getProducts() {
    _getProducts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var url, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "https://tyche-eurpe-api.herokuapp.com/api";
              _context.next = 3;
              return Object(_services__WEBPACK_IMPORTED_MODULE_9__["http"])(url);

            case 3:
              response = _context.sent;

              if (response) {
                setLeaves(response.products);
                console.log(response.products);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getProducts.apply(this, arguments);
  }

  function dragEnd(res) {
    var source = res.source,
        destination = res.destination;

    if (destination && source.droppableId === 'beats') {
      var tempArray = bracelet;
      tempArray[destination.index] = leaves[source.index];
      setBracelet(null);
      setTimeout(function () {
        return setBracelet(tempArray);
      }, 0.5);
      selectionAndPrize();
    } else if (!destination && source.droppableId === 'beats') return;else if (Number(source.droppableId) >= 0 && Number(source.droppableId) < 23) {
      var _tempArray = bracelet;
      _tempArray[source.index] = null;
      setBracelet(null);
      setTimeout(function () {
        return setBracelet(_tempArray);
      }, 0.5);
      selectionAndPrize();
    }
  }

  function selectionAndPrize() {
    var cartArray = [];
    var total = linkPrize;
    bracelet.forEach(function (item) {
      if (item === null || item === void 0 ? void 0 : item.price) {
        cartArray.push(item);
      }
    });
    cartArray.map(function (item, index) {
      total += Number(item.price);
    });
    setBraceletPrice(total);
    setSelections(cartArray);
  }

  function onSizeChange(op) {
    var tempArray = bracelet;
    tempArray.length = size + 1;

    if (op === "add" && tempArray) {
      tempArray[(tempArray === null || tempArray === void 0 ? void 0 : tempArray.length) - 1] = null;
    }

    setBracelet(null);
    setTimeout(function () {
      setBracelet(tempArray);
      console.log(bracelet);
    }, 0.5);
  }

  function addSub(op) {
    if (op === 'add') {
      setSize(function (prev) {
        return prev + 1;
      });
    }

    if (op === 'sub') {
      setSize(function (prev) {
        return prev - 1;
      });
    }

    onSizeChange(op);
  }

  function onCategorieChange(item, index) {
    setCategoryIndex(index);
    setCategoryState(item.state);
  }

  return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["DragDropContext"], {
    onDragEnd: dragEnd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, __jsx(Header, {
    className: "conf-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: "",
    src: _assets__WEBPACK_IMPORTED_MODULE_6__["Logo"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 17,
    md: 16,
    sm: 24,
    xs: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "left-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 1,
    xs: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "left-icon-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 33
    }
  }, __jsx("img", {
    alt: "",
    src: _assets__WEBPACK_IMPORTED_MODULE_6__["Heart"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 37
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["ZoomInOutlined"], {
    style: {
      fontSize: '30px',
      color: '#949494'
    },
    onClick: function onClick() {
      return setVisible(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 37
    }
  }), __jsx("img", {
    alt: "",
    src: _assets__WEBPACK_IMPORTED_MODULE_6__["Filter"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 37
    }
  }), __jsx("img", {
    alt: "",
    src: _assets__WEBPACK_IMPORTED_MODULE_6__["Color"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 37
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "left-top",
    lg: {
      offset: 1,
      span: 22
    },
    xs: {
      offset: 3,
      span: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "bracelet-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "bracelet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 37
    }
  }, bracelet && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, bracelet === null || bracelet === void 0 ? void 0 : bracelet.map(function (item, index) {
    return __jsx("div", {
      className: "bracelet-leaf-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 61
      }
    }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["DroppableComp"], {
      droppableId: "".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 65
      }
    }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["DraggableComp"], {
      index: index,
      draggableId: "bracelet-draggable-".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 69
      }
    }, item ? __jsx("img", {
      className: "leaf",
      src: item === null || item === void 0 ? void 0 : item.img,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 81
      }
    }) : __jsx("img", {
      className: "leaf",
      src: _assets__WEBPACK_IMPORTED_MODULE_6__["Leaf"],
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 81
      }
    }))));
  })))), __jsx("div", {
    className: "categories-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [16, 16],
    className: "categories-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 37
    }
  }, _config__WEBPACK_IMPORTED_MODULE_8__["categories"].map(function (item, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      key: item.title,
      lg: 6,
      xs: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 49
      }
    }, __jsx("div", {
      onClick: function onClick() {
        return onCategorieChange(item, index);
      },
      style: {
        border: categoryIndex === index && '2px solid #dddddd'
      },
      className: "categories-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 53
      }
    }, __jsx("img", {
      alt: "",
      src: item.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 57
      }
    }), item.title));
  }))))), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["DroppableComp"], {
    droppableId: "beats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "beats-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 29
    }
  }, leaves ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, leaves === null || leaves === void 0 ? void 0 : leaves.map(function (item, index) {
    if (categoryState && categoryState === item.category) {
      if (item.category === categoryState) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          key: item.title,
          span: 3,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 65
          }
        }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["DraggableComp"], {
          draggableId: item.title,
          index: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 69
          }
        }, __jsx("div", {
          className: "beats-cards",
          onClick: function onClick() {
            return setItem(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 73
          }
        }, __jsx("img", {
          src: item.img,
          alt: "",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 77
          }
        }))));
      }
    } else if (!categoryState) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        key: item.title,
        lg: 3,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 61
        }
      }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["DraggableComp"], {
        draggableId: item.title,
        index: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 65
        }
      }, __jsx("div", {
        className: "beats-cards",
        onClick: function onClick() {
          return setItem(item);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 69
        }
      }, __jsx("img", {
        src: item.img,
        alt: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 73
        }
      }))));
    }
  })) : __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["LoaderComp"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 41
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: {
      offset: 0,
      span: 7
    },
    md: {
      offset: 0,
      span: 8
    },
    sm: {
      offset: 5,
      span: 14
    },
    xs: {
      offset: 0,
      span: 24
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "right-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "right-card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 25
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return setIsAddToCart(!isAddToCart);
    },
    className: "top-button-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 33
    }
  }, isAddToCart ? __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "top-button-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 49
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 53
    }
  }, " YOUR SELECTION "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 49
    }
  }, __jsx("div", {
    style: {
      backgroundColor: '#000',
      color: '#fff'
    },
    className: "top-button-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 53
    }
  }, "$", braceletPrice)), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    onClick: function onClick() {
      return setIsAddToCart(true);
    },
    span: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "top-button-right top-button-right-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 53
    }
  }, "Add to Cart"))))), __jsx("div", {
    className: "item-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 33
    }
  }, !item && isAddToCart ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("img", {
    src: _assets__WEBPACK_IMPORTED_MODULE_6__["Links"],
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 49
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UpOutlined"], {
    onClick: function onClick() {
      return setIsAddToCart(false);
    },
    style: {
      fontSize: "25px",
      color: "#b5b3b3",
      margin: "1.5vh 1.5vw"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 49
    }
  })) : !item && !isAddToCart ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["DownOutlined"], {
    onClick: function onClick() {
      return setIsAddToCart(true);
    },
    style: {
      fontSize: "25px",
      color: "#b5b3b3",
      margin: "1.5vh 1.5vw"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 49
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null))), isAddToCart ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "add-to-cart-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "add-to-cart-text-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "add-to-cart-text-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 49
    }
  }, __jsx("p", {
    className: "size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 53
    }
  }, size), size < 23 && __jsx("div", {
    className: "btns",
    onClick: function onClick() {
      return addSub('add');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 57
    }
  }, "+"), size > 15 && __jsx("div", {
    className: "btns",
    onClick: function onClick() {
      return addSub('sub');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 57
    }
  }, "-"))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "add-to-cart-text-box over-flow-comps",
    style: {
      paddingTop: addToCartMargin
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 45
    }
  }, selections.map(function (item) {
    return __jsx("div", {
      key: item.title,
      className: "image-text-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 57
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 61
      }
    }, __jsx("img", {
      src: item.img,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 65
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 65
      }
    }, item.title)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 61
      }
    }, "$ ", item.price));
  }))), __jsx("div", {
    className: "bottom-buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 45
    }
  }, "Add to cart"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 45
    }
  }, " $", braceletPrice))) : __jsx("div", {
    className: "right-text-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 37
    }
  }, item ? __jsx("div", {
    className: "item-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "item-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 53
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CloseOutlined"], {
    style: {
      fontSize: "25px",
      color: "#b5b3b3"
    },
    onClick: function onClick() {
      return setItem(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 57
    }
  })), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 53
    }
  }, item.title), __jsx("img", {
    src: item.img,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 53
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 53
    }
  }, "Price: $ ", item.price)) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 53
    }
  }, "YOUR SELECTION"), selections.length ? __jsx("div", {
    className: "selection-flow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 61
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 65
    }
  }, selections.map(function (item) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      lg: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 77
      }
    }, __jsx("div", {
      className: "beats-cards",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 81
      }
    }, __jsx("img", {
      src: item.img,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 85
      }
    })));
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 65
    }
  }, "You haven't selected any"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 65
    }
  }, "Every time you will add a Link to your bracelet, it will automatically be saved here in Your Selection. ")))))))), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["BraceletModal"], {
    visible: visible,
    setVisible: setVisible,
    bracelet: bracelet,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 13
    }
  }));
}

_s(Configurator, "vfQ98qck1Bhv9OHkdzSsh45XiZg=");

_c = Configurator;

var _c;

$RefreshReg$(_c, "Configurator");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3JjL2NvbXBvbmVudHMvYnJhY2VsZXRNb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3JjL3BhZ2VzL2NvbmZpZ3VyYXRvci9pbmRleC5qcyJdLCJuYW1lcyI6WyJCcmFjZWxldE1vZGFsIiwiYnJhY2VsZXQiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYW5jZWwiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImltZyIsIkxlYWYiLCJIZWFkZXIiLCJMYXlvdXQiLCJDb25maWd1cmF0b3IiLCJ1c2VTdGF0ZSIsImJyYWNlbGV0UHJpY2UiLCJzZXRCcmFjZWxldFByaWNlIiwic2VsZWN0aW9ucyIsInNldFNlbGVjdGlvbnMiLCJsZWF2ZXMiLCJzZXRMZWF2ZXMiLCJjYXRlZ29yeVN0YXRlIiwic2V0Q2F0ZWdvcnlTdGF0ZSIsInNldEl0ZW0iLCJjYXRlZ29yeUluZGV4Iiwic2V0Q2F0ZWdvcnlJbmRleCIsInNpemUiLCJzZXRTaXplIiwibGlua1ByaXplIiwic2V0TGlua1ByaXplIiwiaXNBZGRUb0NhcnQiLCJzZXRJc0FkZFRvQ2FydCIsInNldEJyYWNlbGV0IiwiYWRkVG9DYXJ0TWFyZ2luIiwibGVuZ3RoIiwidXNlRWZmZWN0IiwiZ2V0UHJvZHVjdHMiLCJzZWxlY3Rpb25BbmRQcml6ZSIsInVybCIsImh0dHAiLCJyZXNwb25zZSIsInByb2R1Y3RzIiwiZHJhZ0VuZCIsInJlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiZHJvcHBhYmxlSWQiLCJ0ZW1wQXJyYXkiLCJzZXRUaW1lb3V0IiwiTnVtYmVyIiwiY2FydEFycmF5IiwidG90YWwiLCJmb3JFYWNoIiwicHJpY2UiLCJwdXNoIiwib25TaXplQ2hhbmdlIiwib3AiLCJhZGRTdWIiLCJwcmV2Iiwib25DYXRlZ29yaWVDaGFuZ2UiLCJzdGF0ZSIsIkxvZ28iLCJIZWFydCIsImZvbnRTaXplIiwiY29sb3IiLCJGaWx0ZXIiLCJDb2xvciIsIm9mZnNldCIsInNwYW4iLCJjYXRlZ29yaWVzIiwidGl0bGUiLCJib3JkZXIiLCJjYXRlZ29yeSIsImJhY2tncm91bmRDb2xvciIsIkxpbmtzIiwibWFyZ2luIiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBRWUsU0FBU0EsYUFBVCxPQUEwRDtBQUFBOztBQUFBLE1BQWpDQyxRQUFpQyxRQUFqQ0EsUUFBaUM7QUFBQSxNQUF2QkMsT0FBdUIsUUFBdkJBLE9BQXVCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBRXJFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjs7QUFFQSxXQUFTRyxZQUFULEdBQXdCO0FBQ3BCSCxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0g7O0FBRUQsU0FDSSxNQUFDLDBDQUFEO0FBQ0ksV0FBTyxFQUFFRCxPQURiO0FBRUksU0FBSyxFQUFDLDBCQUZWO0FBR0ksWUFBUSxFQUFFSSxZQUhkO0FBSUksVUFBTSxFQUFFLEVBSlo7QUFLSSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFLE9BQVY7QUFBbUJDLFdBQUssRUFBRTtBQUExQixLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRUCxRQUFRLElBQ1IsbUVBRVFBLFFBRlIsYUFFUUEsUUFGUix1QkFFUUEsUUFBUSxDQUFFUSxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDVjtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRWdCRCxJQUFJLEdBQ0E7QUFBSyxl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YjtBQUVJLGNBQVUsRUFBRUMsVUFGaEI7QUFHSSxZQUFRLEVBQUVGLFFBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNRSixDQURKO0FBb1JIOztHQW5idUJlLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGY0MjkwODY0YWIxMGUzOTRlNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICAgIE1vZGFsXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IExlYWYgfSBmcm9tICcuLi8uLi9hc3NldHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcmFjZWxldE1vZGFsKHsgYnJhY2VsZXQsIHZpc2libGUsIHNldFZpc2libGUgfSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHNldFZpc2libGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNhbmNlbCgpIHtcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgICB0aXRsZT1cIllvdXIgQ3VzdG9taXplZCBCcmFjZWxldFwiXHJcbiAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgICAgIGZvb3Rlcj17W119XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgd2lkdGg6ICcxMDB2dycgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJyYWNlbGV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmFjZWxldCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYWNlbGV0Py5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmFjZWxldC1sZWFmLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbGVhZicgc3JjPXtpdGVtPy5pbWd9IGFsdD0nJyAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2xlYWYnIHNyYz17TGVhZn0gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJ1xyXG5pbXBvcnQge1xyXG4gICAgUm93LFxyXG4gICAgQ29sLFxyXG4gICAgTGF5b3V0XHJcbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHtcclxuICAgIENsb3NlT3V0bGluZWQsXHJcbiAgICBEb3duT3V0bGluZWQsXHJcbiAgICBVcE91dGxpbmVkLFxyXG4gICAgWm9vbUluT3V0bGluZWRcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgICBMb2dvLFxyXG4gICAgSGVhcnQsXHJcbiAgICBGaWx0ZXIsXHJcbiAgICBDb2xvcixcclxuICAgIExpbmtzLFxyXG4gICAgTGVhZlxyXG59IGZyb20gJy4uLy4uL2Fzc2V0cydcclxuaW1wb3J0IHtcclxuICAgIEJyYWNlbGV0TW9kYWwsXHJcbiAgICBEcm9wcGFibGVDb21wLFxyXG4gICAgRHJhZ2dhYmxlQ29tcCxcclxuICAgIExvYWRlckNvbXBcclxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBjYXRlZ29yaWVzIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBodHRwIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnXHJcblxyXG5cclxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uZmlndXJhdG9yKCkge1xyXG5cclxuXHJcbiAgICBjb25zdCBbYnJhY2VsZXRQcmljZSwgc2V0QnJhY2VsZXRQcmljZV0gPSB1c2VTdGF0ZSgwLjAwKVxyXG5cclxuICAgIGNvbnN0IFtzZWxlY3Rpb25zLCBzZXRTZWxlY3Rpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IFtsZWF2ZXMsIHNldExlYXZlc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlTdGF0ZSwgc2V0Q2F0ZWdvcnlTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgW2NhdGVnb3J5SW5kZXgsIHNldENhdGVnb3J5SW5kZXhdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSgxNSlcclxuXHJcbiAgICBjb25zdCBbbGlua1ByaXplLCBzZXRMaW5rUHJpemVdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBbaXNBZGRUb0NhcnQsIHNldElzQWRkVG9DYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFticmFjZWxldCwgc2V0QnJhY2VsZXRdID0gdXNlU3RhdGUoW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdKVxyXG5cclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGFkZFRvQ2FydE1hcmdpbiA9XHJcbiAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAyMyA/IFwiNTc1cHhcIiA6XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMubGVuZ3RoID4gMjIgPyBcIjU1MHB4XCIgOlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAyMSA/IFwiNTAwcHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAyMCA/IFwiNDc1cHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnMubGVuZ3RoID4gMTkgPyBcIjQ1MHB4XCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxOCA/IFwiNDI1cHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxNyA/IFwiNDAwcHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnMubGVuZ3RoID4gMTYgPyBcIjM3NXB4XCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxNSA/IFwiMzUwcHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxNCA/IFwiMzI1cHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnMubGVuZ3RoID4gMTMgPyBcIjMwMHB4XCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxMiA/IFwiMjc1cHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxMCA/IFwiMjUwcHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnMubGVuZ3RoID4gOCAmJiBcIjIyNXB4XCJcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2R1Y3RzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2VsZWN0aW9uQW5kUHJpemUoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHMoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3R5Y2hlLWV1cnBlLWFwaS5oZXJva3VhcHAuY29tL2FwaWBcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwKHVybClcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHNldExlYXZlcyhyZXNwb25zZS5wcm9kdWN0cylcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucHJvZHVjdHMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmFnRW5kKHJlcykge1xyXG5cclxuICAgICAgICBjb25zdCB7IHNvdXJjZSwgZGVzdGluYXRpb24gfSA9IHJlcztcclxuXHJcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIHNvdXJjZS5kcm9wcGFibGVJZCA9PT0gJ2JlYXRzJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRlbXBBcnJheSA9IGJyYWNlbGV0O1xyXG5cclxuICAgICAgICAgICAgdGVtcEFycmF5W2Rlc3RpbmF0aW9uLmluZGV4XSA9IGxlYXZlc1tzb3VyY2UuaW5kZXhdXHJcblxyXG4gICAgICAgICAgICBzZXRCcmFjZWxldChudWxsKVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRCcmFjZWxldCh0ZW1wQXJyYXkpLCAwLjUpXHJcblxyXG4gICAgICAgICAgICBzZWxlY3Rpb25BbmRQcml6ZSgpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoIWRlc3RpbmF0aW9uICYmIHNvdXJjZS5kcm9wcGFibGVJZCA9PT0gJ2JlYXRzJykgcmV0dXJuXHJcblxyXG4gICAgICAgIGVsc2UgaWYgKE51bWJlcihzb3VyY2UuZHJvcHBhYmxlSWQpID49IDAgJiYgTnVtYmVyKHNvdXJjZS5kcm9wcGFibGVJZCkgPCAyMykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRlbXBBcnJheSA9IGJyYWNlbGV0O1xyXG5cclxuICAgICAgICAgICAgdGVtcEFycmF5W3NvdXJjZS5pbmRleF0gPSBudWxsXHJcblxyXG4gICAgICAgICAgICBzZXRCcmFjZWxldChudWxsKVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRCcmFjZWxldCh0ZW1wQXJyYXkpLCAwLjUpXHJcblxyXG4gICAgICAgICAgICBzZWxlY3Rpb25BbmRQcml6ZSgpXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3Rpb25BbmRQcml6ZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IGNhcnRBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgdG90YWwgPSBsaW5rUHJpemU7XHJcblxyXG4gICAgICAgIGJyYWNlbGV0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0/LnByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJ0QXJyYXkucHVzaChpdGVtKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2FydEFycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdG90YWwgKz0gTnVtYmVyKGl0ZW0ucHJpY2UpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0QnJhY2VsZXRQcmljZSh0b3RhbClcclxuXHJcbiAgICAgICAgc2V0U2VsZWN0aW9ucyhjYXJ0QXJyYXkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uU2l6ZUNoYW5nZShvcCkge1xyXG5cclxuICAgICAgICBsZXQgdGVtcEFycmF5ID0gYnJhY2VsZXQ7XHJcblxyXG4gICAgICAgIHRlbXBBcnJheS5sZW5ndGggPSBzaXplICsgMTtcclxuXHJcbiAgICAgICAgaWYgKG9wID09PSBcImFkZFwiICYmIHRlbXBBcnJheSkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyYXlbdGVtcEFycmF5Py5sZW5ndGggLSAxXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRCcmFjZWxldChudWxsKVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0QnJhY2VsZXQodGVtcEFycmF5KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhicmFjZWxldClcclxuICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFN1YihvcCkge1xyXG5cclxuICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XHJcbiAgICAgICAgICAgIHNldFNpemUocHJldiA9PiBwcmV2ICsgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wID09PSAnc3ViJykge1xyXG4gICAgICAgICAgICBzZXRTaXplKHByZXYgPT4gcHJldiAtIDEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvblNpemVDaGFuZ2Uob3ApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DYXRlZ29yaWVDaGFuZ2UoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICBzZXRDYXRlZ29yeUluZGV4KGluZGV4KVxyXG4gICAgICAgIHNldENhdGVnb3J5U3RhdGUoaXRlbS5zdGF0ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17ZHJhZ0VuZH0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPVwiY29uZi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXtMb2dvfSAvPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezE3fSBtZD17MTZ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxfSB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWljb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXtIZWFydH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFpvb21Jbk91dGxpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzMwcHgnLCBjb2xvcjogJyM5NDk0OTQnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz17RmlsdGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz17Q29sb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibGVmdC10b3BcIiBsZz17eyBvZmZzZXQ6IDEsIHNwYW46IDIyIH19IHhzPXt7IG9mZnNldDogMywgc3BhbjogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFjZWxldC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFjZWxldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYWNlbGV0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJhY2VsZXQ/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyYWNlbGV0LWxlYWYtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlQ29tcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BwYWJsZUlkPXtgJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e2BicmFjZWxldC1kcmFnZ2FibGUtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2xlYWYnIHNyYz17aXRlbT8uaW1nfSBhbHQ9JycgLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdsZWFmJyBzcmM9e0xlYWZ9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGVDb21wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMTZdfSBjbGFzc05hbWU9XCJjYXRlZ29yaWVzLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGtleT17aXRlbS50aXRsZX0gbGc9ezZ9IHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNhdGVnb3JpZUNoYW5nZShpdGVtLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBjYXRlZ29yeUluZGV4ID09PSBpbmRleCAmJiAnMnB4IHNvbGlkICNkZGRkZGQnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2F0ZWdvcmllcy1jYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz17aXRlbS5pbWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGVDb21wIGRyb3BwYWJsZUlkPVwiYmVhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmVhdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVzPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlTdGF0ZSAmJiBjYXRlZ29yeVN0YXRlID09PSBpdGVtLmNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2F0ZWdvcnkgPT09IGNhdGVnb3J5U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wga2V5PXtpdGVtLnRpdGxlfSBzcGFuPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29tcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVJZD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmVhdHMtY2FyZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXRlbShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFjYXRlZ29yeVN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBrZXk9e2l0ZW0udGl0bGV9IGxnPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmVhdHMtY2FyZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJdGVtKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyQ29tcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZUNvbXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9e3sgb2Zmc2V0OiAwLCBzcGFuOiA3fX0gbWQ9e3sgb2Zmc2V0OiAwLCBzcGFuOiA4fX0gc209e3sgb2Zmc2V0OiA1LCBzcGFuOiAxNCB9fSB4cz17eyBvZmZzZXQ6IDAsIHNwYW46IDI0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNBZGRUb0NhcnQoIWlzQWRkVG9DYXJ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtYnV0dG9uLWJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZGRUb0NhcnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1idXR0b24tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBZT1VSIFNFTEVDVElPTiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsIGNvbG9yOiAnI2ZmZicgfX0gY2xhc3NOYW1lPVwidG9wLWJ1dHRvbi1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHticmFjZWxldFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0FkZFRvQ2FydCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW49ezEyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1idXR0b24tcmlnaHQgdG9wLWJ1dHRvbi1yaWdodC1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtICYmIGlzQWRkVG9DYXJ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17TGlua3N9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcE91dGxpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0FkZFRvQ2FydChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIyNXB4XCIsIGNvbG9yOiBcIiNiNWIzYjNcIiwgbWFyZ2luOiBcIjEuNXZoIDEuNXZ3XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICFpdGVtICYmICFpc0FkZFRvQ2FydCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb3duT3V0bGluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQWRkVG9DYXJ0KHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiLCBjb2xvcjogXCIjYjViM2IzXCIsIG1hcmdpbjogXCIxLjV2aCAxLjV2d1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZGRUb0NhcnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtdG8tY2FydC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC10by1jYXJ0LXRleHQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnQtdGV4dC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpemVcIj57c2l6ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA8IDIzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5zXCIgb25DbGljaz17KCkgPT4gYWRkU3ViKCdhZGQnKX0+KzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgPiAxNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuc1wiIG9uQ2xpY2s9eygpID0+IGFkZFN1Yignc3ViJyl9Pi08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtdG8tY2FydC10ZXh0LWJveCBvdmVyLWZsb3ctY29tcHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiBhZGRUb0NhcnRNYXJnaW4gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT1cImltYWdlLXRleHQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHtpdGVtLnByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFkZCB0byBjYXJ0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4gJHticmFjZWxldFByaWNlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC10ZXh0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgY29sb3I6IFwiI2I1YjNiM1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEl0ZW0obnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UHJpY2U6ICQge2l0ZW0ucHJpY2V9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5ZT1VSIFNFTEVDVElPTjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0aW9uLWZsb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZWF0cy1jYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBoYXZlbid0IHNlbGVjdGVkIGFueTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkV2ZXJ5IHRpbWUgeW91IHdpbGwgYWRkIGEgTGluayB0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgYnJhY2VsZXQsIGl0IHdpbGwgYXV0b21hdGljYWxseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIHNhdmVkIGhlcmUgaW4gWW91ciBTZWxlY3Rpb24uIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8QnJhY2VsZXRNb2RhbFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIHNldFZpc2libGU9e3NldFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICBicmFjZWxldD17YnJhY2VsZXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=