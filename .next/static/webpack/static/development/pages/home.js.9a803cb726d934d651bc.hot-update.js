webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/ResultCard.js":
/*!**********************************!*\
  !*** ./components/ResultCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultCard; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-styled-flexboxgrid */ "./node_modules/react-styled-flexboxgrid/dist/styled-flexboxgrid.es.js");
var _jsxFileName = "/Users/gracieliu-fang/Desktop/personal/stash/components/ResultCard.js";

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: magenta;\n    opacity: 1;\n    text-align: right;\n\n    &:hover {\n        cursor: pointer;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 0.2rem;\n    opacity: 1;\n    width: 300px;\n\n    &:hover {\n        cursor: pointer;\n        opacity: 0.6;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 0.2rem;\n    margin: 1rem;\n    padding: 0rem;\n    position: absolute;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 20rem;\n    height: 20rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Third Party */




var ResultCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var ResultCardBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var ResultGif = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3());
var Favorite = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());

var ResultCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResultCard, _React$Component);

  function ResultCard(props) {
    var _this;

    _classCallCheck(this, ResultCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultCard).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFavoritesUpdate", function () {
      _this.setState({
        favorited: !_this.state.favorited
      });

      _this.props.updateFavorites(_this.props.gif);
    });

    _this.state = {
      favorited: false
    };
    return _this;
  }

  _createClass(ResultCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          gif = _this$props.gif,
          favorited = _this$props.favorited;
      var handleFavoritesUpdate = this.handleFavoritesUpdate;
      var gifUrl = gif.images.fixed_width_downsampled.url;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultCardContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultCardBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Favorite, {
        onClick: handleFavoritesUpdate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, favorited ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "favorite") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "favorite_border")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultGif, {
        src: gifUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })));
    }
  }]);

  return ResultCard;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


ResultCard.defaultProps = {
  gif: {},
  updateFavorites: function updateFavorites() {}
};
ResultCard.propTypes = {
  gif: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  updateFavorites: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=home.js.9a803cb726d934d651bc.hot-update.js.map