webpackHotUpdate_N_E("pages/index",{

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
    lg: 23,
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
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [0, 0],
    className: "bracelet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 37
    }
  }, bracelet && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, bracelet === null || bracelet === void 0 ? void 0 : bracelet.map(function (item, index) {
    var offset;

    if (index === 0) {
      offset = bracelet.length === 15 || bracelet.length === 16 ? 4 : bracelet.length === 17 || bracelet.length === 18 ? 3 : bracelet.length === 19 || bracelet.length === 20 ? 2 : bracelet.length === 21 || bracelet.length === 22 ? 1 : 0;
    }

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      lg: {
        offset: offset,
        span: 1
      },
      key: "bracelet-leaf-".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 61
      }
    }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["DroppableComp"], {
      droppableId: "".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 65
      }
    }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["DraggableComp"], {
      index: index,
      draggableId: "bracelet-draggable-".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 69
      }
    }, item ? __jsx("img", {
      className: "leaf",
      src: item === null || item === void 0 ? void 0 : item.img,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 81
      }
    }) : __jsx("img", {
      className: "leaf",
      src: _assets__WEBPACK_IMPORTED_MODULE_6__["Leaf"],
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 81
      }
    }))));
  })))), __jsx("div", {
    className: "categories-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [16, 16],
    className: "categories-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 37
    }
  }, _config__WEBPACK_IMPORTED_MODULE_8__["categories"].map(function (item, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      key: item.title,
      span: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
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
        lineNumber: 269,
        columnNumber: 53
      }
    }, __jsx("img", {
      alt: "",
      src: item.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 57
      }
    }), item.title));
  }))))), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["DroppableComp"], {
    droppableId: "beats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "beats-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
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
            lineNumber: 294,
            columnNumber: 65
          }
        }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["DraggableComp"], {
          draggableId: item.title,
          index: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295,
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
            lineNumber: 299,
            columnNumber: 73
          }
        }, __jsx("img", {
          src: item.img,
          alt: "",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303,
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
          lineNumber: 312,
          columnNumber: 61
        }
      }, __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["DraggableComp"], {
        draggableId: item.title,
        index: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
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
          lineNumber: 317,
          columnNumber: 69
        }
      }, __jsx("img", {
        src: item.img,
        alt: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 73
        }
      }))));
    }
  })) : __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["LoaderComp"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 41
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "right-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "right-card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
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
      lineNumber: 340,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 33
    }
  }, isAddToCart ? __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "top-button-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 49
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 53
    }
  }, " YOUR SELECTION "))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
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
      lineNumber: 355,
      columnNumber: 53
    }
  }, "$", braceletPrice)), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    onClick: function onClick() {
      return setIsAddToCart(true);
    },
    lg: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "top-button-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 53
    }
  }, "Add to Cart"))))), __jsx("div", {
    className: "item-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 33
    }
  }, !item && isAddToCart ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("img", {
    src: _assets__WEBPACK_IMPORTED_MODULE_6__["Links"],
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
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
      lineNumber: 377,
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
      lineNumber: 383,
      columnNumber: 49
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null))), isAddToCart ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "add-to-cart-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "add-to-cart-text-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "add-to-cart-text-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 49
    }
  }, __jsx("p", {
    className: "size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
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
      lineNumber: 401,
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
      lineNumber: 405,
      columnNumber: 57
    }
  }, "-"))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
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
      lineNumber: 410,
      columnNumber: 45
    }
  }, selections.map(function (item) {
    return __jsx("div", {
      key: item.title,
      className: "image-text-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 57
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 61
      }
    }, __jsx("img", {
      src: item.img,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 65
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 65
      }
    }, item.title)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 61
      }
    }, "$ ", item.price));
  }))), __jsx("div", {
    className: "bottom-buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 45
    }
  }, "Add to cart"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 45
    }
  }, " $", braceletPrice))) : __jsx("div", {
    className: "right-text-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 37
    }
  }, item ? __jsx("div", {
    className: "item-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "item-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
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
      lineNumber: 438,
      columnNumber: 57
    }
  })), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 53
    }
  }, item.title), __jsx("img", {
    src: item.img,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 53
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 53
    }
  }, "Price: $ ", item.price)) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 53
    }
  }, "YOUR SELECTION"), selections.length ? __jsx("div", {
    className: "selection-flow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 61
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 65
    }
  }, selections.map(function (item) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      lg: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 77
      }
    }, __jsx("div", {
      className: "beats-cards",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 81
      }
    }, __jsx("img", {
      src: item.img,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 85
      }
    })));
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 65
    }
  }, "You haven't selected any"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 65
    }
  }, "Every time you will add a Link to your bracelet, it will automatically be saved here in Your Selection. ")))))))), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["BraceletModal"], {
    visible: visible,
    setVisible: setVisible,
    bracelet: bracelet,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3JjL3BhZ2VzL2NvbmZpZ3VyYXRvci9pbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJDb25maWd1cmF0b3IiLCJ1c2VTdGF0ZSIsImJyYWNlbGV0UHJpY2UiLCJzZXRCcmFjZWxldFByaWNlIiwic2VsZWN0aW9ucyIsInNldFNlbGVjdGlvbnMiLCJsZWF2ZXMiLCJzZXRMZWF2ZXMiLCJjYXRlZ29yeVN0YXRlIiwic2V0Q2F0ZWdvcnlTdGF0ZSIsIml0ZW0iLCJzZXRJdGVtIiwiY2F0ZWdvcnlJbmRleCIsInNldENhdGVnb3J5SW5kZXgiLCJzaXplIiwic2V0U2l6ZSIsImxpbmtQcml6ZSIsInNldExpbmtQcml6ZSIsImlzQWRkVG9DYXJ0Iiwic2V0SXNBZGRUb0NhcnQiLCJicmFjZWxldCIsInNldEJyYWNlbGV0IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJhZGRUb0NhcnRNYXJnaW4iLCJsZW5ndGgiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0cyIsInNlbGVjdGlvbkFuZFByaXplIiwidXJsIiwiaHR0cCIsInJlc3BvbnNlIiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwiZHJhZ0VuZCIsInJlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiZHJvcHBhYmxlSWQiLCJ0ZW1wQXJyYXkiLCJpbmRleCIsInNldFRpbWVvdXQiLCJOdW1iZXIiLCJjYXJ0QXJyYXkiLCJ0b3RhbCIsImZvckVhY2giLCJwcmljZSIsInB1c2giLCJtYXAiLCJvblNpemVDaGFuZ2UiLCJvcCIsImFkZFN1YiIsInByZXYiLCJvbkNhdGVnb3JpZUNoYW5nZSIsInN0YXRlIiwiTG9nbyIsIkhlYXJ0IiwiZm9udFNpemUiLCJjb2xvciIsIkZpbHRlciIsIkNvbG9yIiwib2Zmc2V0Iiwic3BhbiIsImltZyIsIkxlYWYiLCJjYXRlZ29yaWVzIiwidGl0bGUiLCJib3JkZXIiLCJjYXRlZ29yeSIsImJhY2tncm91bmRDb2xv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QUksQ0FBQ3FDLEtBQW5CLENBVEosQ0FEQSxHQWFBLG1FQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFHUTNDLFVBQVUsQ0FBQ3FCLE1BQVgsR0FDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFyQixVQUFVLENBQUM2QyxHQUFYLENBQWUsVUFBQ3ZDLElBQUQ7QUFBQSxXQUNYLE1BQUMsd0NBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVBLElBQUksQ0FBQ3NELEdBQWY7QUFBb0IsU0FBRyxFQUFDLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLENBRFc7QUFBQSxHQUFmLENBRlIsQ0FESixDQURKLEdBZUksbUVBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0hBRkosQ0FsQlosQ0FmWixDQTlGWixDQURKLENBREosQ0EzSUosQ0FKSixFQWdTSSxNQUFDLHlEQUFEO0FBQ0ksV0FBTyxFQUFFMUMsT0FEYjtBQUVJLGNBQVUsRUFBRUMsVUFGaEI7QUFHSSxZQUFRLEVBQUVILFFBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhTSixDQURKO0FBeVNIOztHQXhjdUJwQixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJkMzc0NzQyZWM0ZTZiOTY3M2E0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJ1xyXG5pbXBvcnQge1xyXG4gICAgUm93LFxyXG4gICAgQ29sLFxyXG4gICAgTGF5b3V0XHJcbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHtcclxuICAgIENsb3NlT3V0bGluZWQsXHJcbiAgICBEb3duT3V0bGluZWQsXHJcbiAgICBVcE91dGxpbmVkLFxyXG4gICAgWm9vbUluT3V0bGluZWRcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgICBMb2dvLFxyXG4gICAgSGVhcnQsXHJcbiAgICBGaWx0ZXIsXHJcbiAgICBDb2xvcixcclxuICAgIExpbmtzLFxyXG4gICAgTGVhZlxyXG59IGZyb20gJy4uLy4uL2Fzc2V0cydcclxuaW1wb3J0IHtcclxuICAgIEJyYWNlbGV0TW9kYWwsXHJcbiAgICBEcm9wcGFibGVDb21wLFxyXG4gICAgRHJhZ2dhYmxlQ29tcCxcclxuICAgIExvYWRlckNvbXBcclxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBjYXRlZ29yaWVzIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBodHRwIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnXHJcblxyXG5cclxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uZmlndXJhdG9yKCkge1xyXG5cclxuXHJcbiAgICBjb25zdCBbYnJhY2VsZXRQcmljZSwgc2V0QnJhY2VsZXRQcmljZV0gPSB1c2VTdGF0ZSgwLjAwKVxyXG5cclxuICAgIGNvbnN0IFtzZWxlY3Rpb25zLCBzZXRTZWxlY3Rpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IFtsZWF2ZXMsIHNldExlYXZlc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlTdGF0ZSwgc2V0Q2F0ZWdvcnlTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgW2NhdGVnb3J5SW5kZXgsIHNldENhdGVnb3J5SW5kZXhdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSgxNSlcclxuXHJcbiAgICBjb25zdCBbbGlua1ByaXplLCBzZXRMaW5rUHJpemVdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBbaXNBZGRUb0NhcnQsIHNldElzQWRkVG9DYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFticmFjZWxldCwgc2V0QnJhY2VsZXRdID0gdXNlU3RhdGUoW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdKVxyXG5cclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGFkZFRvQ2FydE1hcmdpbiA9XHJcbiAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAyMyA/IFwiNTc1cHhcIiA6XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbnMubGVuZ3RoID4gMjIgPyBcIjU1MHB4XCIgOlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAyMSA/IFwiNTAwcHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAyMCA/IFwiNDc1cHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnMubGVuZ3RoID4gMTkgPyBcIjQ1MHB4XCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxOCA/IFwiNDI1cHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxNyA/IFwiNDAwcHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnMubGVuZ3RoID4gMTYgPyBcIjM3NXB4XCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxNSA/IFwiMzUwcHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxNCA/IFwiMzI1cHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnMubGVuZ3RoID4gMTMgPyBcIjMwMHB4XCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxMiA/IFwiMjc1cHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggPiAxMCA/IFwiMjUwcHhcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnMubGVuZ3RoID4gOCAmJiBcIjIyNXB4XCJcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2R1Y3RzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2VsZWN0aW9uQW5kUHJpemUoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHMoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3R5Y2hlLWV1cnBlLWFwaS5oZXJva3VhcHAuY29tL2FwaWBcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwKHVybClcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHNldExlYXZlcyhyZXNwb25zZS5wcm9kdWN0cylcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucHJvZHVjdHMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmFnRW5kKHJlcykge1xyXG5cclxuICAgICAgICBjb25zdCB7IHNvdXJjZSwgZGVzdGluYXRpb24gfSA9IHJlcztcclxuXHJcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIHNvdXJjZS5kcm9wcGFibGVJZCA9PT0gJ2JlYXRzJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRlbXBBcnJheSA9IGJyYWNlbGV0O1xyXG5cclxuICAgICAgICAgICAgdGVtcEFycmF5W2Rlc3RpbmF0aW9uLmluZGV4XSA9IGxlYXZlc1tzb3VyY2UuaW5kZXhdXHJcblxyXG4gICAgICAgICAgICBzZXRCcmFjZWxldChudWxsKVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRCcmFjZWxldCh0ZW1wQXJyYXkpLCAwLjUpXHJcblxyXG4gICAgICAgICAgICBzZWxlY3Rpb25BbmRQcml6ZSgpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoIWRlc3RpbmF0aW9uICYmIHNvdXJjZS5kcm9wcGFibGVJZCA9PT0gJ2JlYXRzJykgcmV0dXJuXHJcblxyXG4gICAgICAgIGVsc2UgaWYgKE51bWJlcihzb3VyY2UuZHJvcHBhYmxlSWQpID49IDAgJiYgTnVtYmVyKHNvdXJjZS5kcm9wcGFibGVJZCkgPCAyMykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRlbXBBcnJheSA9IGJyYWNlbGV0O1xyXG5cclxuICAgICAgICAgICAgdGVtcEFycmF5W3NvdXJjZS5pbmRleF0gPSBudWxsXHJcblxyXG4gICAgICAgICAgICBzZXRCcmFjZWxldChudWxsKVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRCcmFjZWxldCh0ZW1wQXJyYXkpLCAwLjUpXHJcblxyXG4gICAgICAgICAgICBzZWxlY3Rpb25BbmRQcml6ZSgpXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3Rpb25BbmRQcml6ZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IGNhcnRBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgdG90YWwgPSBsaW5rUHJpemU7XHJcblxyXG4gICAgICAgIGJyYWNlbGV0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0/LnByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJ0QXJyYXkucHVzaChpdGVtKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2FydEFycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdG90YWwgKz0gTnVtYmVyKGl0ZW0ucHJpY2UpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0QnJhY2VsZXRQcmljZSh0b3RhbClcclxuXHJcbiAgICAgICAgc2V0U2VsZWN0aW9ucyhjYXJ0QXJyYXkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uU2l6ZUNoYW5nZShvcCkge1xyXG5cclxuICAgICAgICBsZXQgdGVtcEFycmF5ID0gYnJhY2VsZXQ7XHJcblxyXG4gICAgICAgIHRlbXBBcnJheS5sZW5ndGggPSBzaXplICsgMTtcclxuXHJcbiAgICAgICAgaWYgKG9wID09PSBcImFkZFwiICYmIHRlbXBBcnJheSkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyYXlbdGVtcEFycmF5Py5sZW5ndGggLSAxXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRCcmFjZWxldChudWxsKVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0QnJhY2VsZXQodGVtcEFycmF5KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhicmFjZWxldClcclxuICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFN1YihvcCkge1xyXG5cclxuICAgICAgICBpZiAob3AgPT09ICdhZGQnKSB7XHJcbiAgICAgICAgICAgIHNldFNpemUocHJldiA9PiBwcmV2ICsgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wID09PSAnc3ViJykge1xyXG4gICAgICAgICAgICBzZXRTaXplKHByZXYgPT4gcHJldiAtIDEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvblNpemVDaGFuZ2Uob3ApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DYXRlZ29yaWVDaGFuZ2UoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICBzZXRDYXRlZ29yeUluZGV4KGluZGV4KVxyXG4gICAgICAgIHNldENhdGVnb3J5U3RhdGUoaXRlbS5zdGF0ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17ZHJhZ0VuZH0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPVwiY29uZi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXtMb2dvfSAvPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezE3fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtaWNvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9e0hlYXJ0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Wm9vbUluT3V0bGluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMzBweCcsIGNvbG9yOiAnIzk0OTQ5NCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXtGaWx0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXtDb2xvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJsZWZ0LXRvcFwiIGxnPXsyM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFjZWxldC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyPXtbMCwgMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJicmFjZWxldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFjZWxldCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYWNlbGV0Py5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGJyYWNlbGV0Lmxlbmd0aCA9PT0gMTUgfHwgYnJhY2VsZXQubGVuZ3RoID09PSAxNiA/IDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYnJhY2VsZXQubGVuZ3RoID09PSAxNyB8fCBicmFjZWxldC5sZW5ndGggPT09IDE4ID8gM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYnJhY2VsZXQubGVuZ3RoID09PSAxOSB8fCBicmFjZWxldC5sZW5ndGggPT09IDIwID8gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGJyYWNlbGV0Lmxlbmd0aCA9PT0gMjEgfHwgYnJhY2VsZXQubGVuZ3RoID09PSAyMiA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGc9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbjogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGJyYWNlbGV0LWxlYWYtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlQ29tcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BwYWJsZUlkPXtgJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ9e2BicmFjZWxldC1kcmFnZ2FibGUtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2xlYWYnIHNyYz17aXRlbT8uaW1nfSBhbHQ9JycgLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdsZWFmJyBzcmM9e0xlYWZ9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGVDb21wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwgMTZdfSBjbGFzc05hbWU9XCJjYXRlZ29yaWVzLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGtleT17aXRlbS50aXRsZX0gc3Bhbj17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DYXRlZ29yaWVDaGFuZ2UoaXRlbSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogY2F0ZWdvcnlJbmRleCA9PT0gaW5kZXggJiYgJzJweCBzb2xpZCAjZGRkZGRkJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhdGVnb3JpZXMtY2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9e2l0ZW0uaW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlQ29tcCBkcm9wcGFibGVJZD1cImJlYXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImJlYXRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZXM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeVN0YXRlICYmIGNhdGVnb3J5U3RhdGUgPT09IGl0ZW0uY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gY2F0ZWdvcnlTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBrZXk9e2l0ZW0udGl0bGV9IHNwYW49ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZWF0cy1jYXJkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJdGVtKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlQ29tcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWNhdGVnb3J5U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGtleT17aXRlbS50aXRsZX0gbGc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUNvbXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVJZD17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZWF0cy1jYXJkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEl0ZW0oaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXJDb21wIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlQ29tcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNBZGRUb0NhcnQoIWlzQWRkVG9DYXJ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtYnV0dG9uLWJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZGRUb0NhcnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYnV0dG9uLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gWU9VUiBTRUxFQ1RJT04gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJywgY29sb3I6ICcjZmZmJyB9fSBjbGFzc05hbWU9XCJ0b3AtYnV0dG9uLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2JyYWNlbGV0UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQWRkVG9DYXJ0KHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGc9ezEyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1idXR0b24tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbSAmJiBpc0FkZFRvQ2FydCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0xpbmtzfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXBPdXRsaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNBZGRUb0NhcnQoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiLCBjb2xvcjogXCIjYjViM2IzXCIsIG1hcmdpbjogXCIxLjV2aCAxLjV2d1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAhaXRlbSAmJiAhaXNBZGRUb0NhcnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG93bk91dGxpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0FkZFRvQ2FydCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgY29sb3I6IFwiI2I1YjNiM1wiLCBtYXJnaW46IFwiMS41dmggMS41dndcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRkVG9DYXJ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtdG8tY2FydC10ZXh0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC10by1jYXJ0LXRleHQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaXplXCI+e3NpemV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgPCAyMyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuc1wiIG9uQ2xpY2s9eygpID0+IGFkZFN1YignYWRkJyl9Pis8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplID4gMTUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bnNcIiBvbkNsaWNrPXsoKSA9PiBhZGRTdWIoJ3N1YicpfT4tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnQtdGV4dC1ib3ggb3Zlci1mbG93LWNvbXBzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogYWRkVG9DYXJ0TWFyZ2luIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLnRpdGxlfSBjbGFzc05hbWU9XCJpbWFnZS10ZXh0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7aXRlbS5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BZGQgdG8gY2FydDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+ICR7YnJhY2VsZXRQcmljZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtdGV4dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIyNXB4XCIsIGNvbG9yOiBcIiNiNWIzYjNcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJdGVtKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlByaWNlOiAkIHtpdGVtLnByaWNlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+WU9VUiBTRUxFQ1RJT048L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnMubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdGlvbi1mbG93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVhdHMtY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgaGF2ZW4ndCBzZWxlY3RlZCBhbnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FdmVyeSB0aW1lIHlvdSB3aWxsIGFkZCBhIExpbmsgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3VyIGJyYWNlbGV0LCBpdCB3aWxsIGF1dG9tYXRpY2FsbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZSBzYXZlZCBoZXJlIGluIFlvdXIgU2VsZWN0aW9uLiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPEJyYWNlbGV0TW9kYWxcclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICBzZXRWaXNpYmxlPXtzZXRWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgYnJhY2VsZXQ9e2JyYWNlbGV0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9