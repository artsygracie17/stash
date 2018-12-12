webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-styled-flexboxgrid */ "./node_modules/react-styled-flexboxgrid/dist/styled-flexboxgrid.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Searchbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Searchbar */ "./components/Searchbar.js");
/* harmony import */ var _components_ResultCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ResultCard */ "./components/ResultCard.js");
var _jsxFileName = "/Users/gracieliu-fang/Desktop/personal/stash/pages/home.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'NeueHaasUnicaPro-Regular';\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 0rem;  \n    margin-left: 0.8rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin-right: 0.3rem;\n    color: ", ";\n\n    &:hover {\n        cursor: pointer;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: gray;    \n    font-size: 2rem;\n    margin-top: 4rem;\n    margin-bottom: 1rem;\n    text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* First party */



/* Third party */



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Search = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject3(), function (props) {
  return props.isActive ? 'black' : 'gray';
});
var Favorites = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Search)(_templateObject4());
var Theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Grid"])(_templateObject5());
var apiKey = 'G3kX7Y9C74tjpHZadKuIGqjwLrCmfZnU';

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearchTermChange", function (event) {
      _this.setState({
        searchTerm: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearchbarSubmit", function (searchTerm) {
      console.log('in handlesubmit: ', searchTerm);
      var urlRequest = "http://api.giphy.com/v1/gifs/search?q=".concat(_this.state.searchTerm, "&api_key=").concat(apiKey, "&limit=50");
      fetch(urlRequest).then(function (res) {
        return res.json();
      }).then(function (results) {
        var resultsArray = results.data;

        _this.setState({
          results: resultsArray
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePageToggle", function () {
      _this.setState({
        home: !_this.state.home
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFavoritesUpdate", function (gif) {
      _this.setState({
        favorites: favorites.push(gif)
      });
    });

    _this.state = {
      home: true,
      searchTerm: '',
      results: [],
      favorites: []
    };
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          searchTerm = _this$state.searchTerm,
          results = _this$state.results,
          favorites = _this$state.favorites,
          home = _this$state.home;
      var handleSearchTermChange = this.handleSearchTermChange,
          handleSearchbarSubmit = this.handleSearchbarSubmit,
          handlePageToggle = this.handlePageToggle,
          handleFavoritesUpdate = this.handleFavoritesUpdate;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, {
        isActive: home,
        onClick: handlePageToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, " search "), " .", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Favorites, {
        isActive: !home,
        onClick: handlePageToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, " favorites ")), home ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Theme, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        center: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Searchbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        searchTerm: searchTerm,
        onChange: handleSearchTermChange,
        onSubmit: handleSearchbarSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        center: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, console.log('resultssss: ', results), results.map(function (result) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          key: result.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ResultCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          gif: result,
          updateFavorites: handleFavoritesUpdate,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }));
      }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Theme, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, " favs page ")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=home.js.66874b5bd9750ba7ccce.hot-update.js.map