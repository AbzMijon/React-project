"use strict";
(self["webpackChunktms_part_3"] = self["webpackChunktms_part_3"] || []).push([["src_Scenes_Sorting_Sorting_jsx"],{

/***/ "./src/Components/HiddenBlock/HiddenBlock.jsx":
/*!****************************************************!*\
  !*** ./src/Components/HiddenBlock/HiddenBlock.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hiddenBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hiddenBlock.scss */ "./src/Components/HiddenBlock/hiddenBlock.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function HiddenBlock(_ref) {
  var searchParams = _ref.searchParams,
      dataArray = _ref.dataArray,
      handleSelect = _ref.handleSelect;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      selectValue = _useState2[0],
      setSelectValue = _useState2[1];

  var selectChange = function selectChange(event) {
    handleSelect(event.target.value);
    setSelectValue(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "tools__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "tools__hidden-list",
    name: "toolItem",
    defaultValue: searchParams || selectValue,
    onChange: selectChange
  }, dataArray.map(function (elem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: elem.id,
      value: elem.id,
      className: "tools__hidden-item"
    }, elem.name);
  })));
}

HiddenBlock.propTypes = {
  searchParams: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)]),
  handleSelect: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  dataArray: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HiddenBlock);

/***/ }),

/***/ "./src/Components/NotAvailableModal/NotAvailableModal.jsx":
/*!****************************************************************!*\
  !*** ./src/Components/NotAvailableModal/NotAvailableModal.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _notAvailableModa_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notAvailableModa.scss */ "./src/Components/NotAvailableModal/notAvailableModa.scss");




function NotAvailableModal(_ref) {
  var bookSrc = _ref.bookSrc,
      valueOfAvailableModal = _ref.valueOfAvailableModal,
      setValueOfAvailableModal = _ref.setValueOfAvailableModal;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: valueOfAvailableModal ? 'modal active' : 'modal',
    onClick: function onClick() {
      setValueOfAvailableModal(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal__content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: bookSrc,
    className: "modal__img",
    alt: "bookIMG"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "modal__text"
  }, "\u042D\u0442\u0430 \u043A\u043D\u0438\u0436\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439;("), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "modal-ok",
    type: "button",
    onClick: function onClick() {
      setValueOfAvailableModal(false);
    }
  }, "\u041E\u043A")));
}

NotAvailableModal.propTypes = {
  bookSrc: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  valueOfAvailableModal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  setValueOfAvailableModal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotAvailableModal);

/***/ }),

/***/ "./src/Components/SelectedBooks/SelectedBooks.jsx":
/*!********************************************************!*\
  !*** ./src/Components/SelectedBooks/SelectedBooks.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _constans_routes_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constans/routes.ts */ "./src/constans/routes.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors/userSelectors */ "./src/store/selectors/userSelectors.js");
/* harmony import */ var _selectedBooks_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectedBooks.scss */ "./src/Components/SelectedBooks/selectedBooks.scss");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









function SelectedBooks(_ref) {
  var selectedBooks = _ref.selectedBooks,
      setCheckLikedBooks = _ref.setCheckLikedBooks,
      setSelectedBooks = _ref.setSelectedBooks;
  var userLoggedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_3__.isLoggedIn);
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal__liked",
    onClick: function onClick() {
      return setCheckLikedBooks(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "selected__wrap",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "selected__title"
  }, selectedBooks.length ? "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435 (".concat(selectedBooks.length, ")") : 'Вы ничего не выбрали!'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "selected__close",
    onClick: function onClick() {
      return setCheckLikedBooks(false);
    }
  }, "x"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "selected__list"
  }, selectedBooks.map(function (selectedBook) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "selected__book",
      key: selectedBook.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "selected__delete-book",
      type: "button",
      onClick: function onClick() {
        var findElem = _toConsumableArray(selectedBooks).find(function (findElem) {
          return +findElem.id === +selectedBook.id;
        });

        var newSelectedBooks = selectedBooks.filter(function (newBook) {
          return newBook.id !== findElem.id;
        });
        setSelectedBooks(newSelectedBooks);
      }
    }, "x"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: "selected__img",
      src: selectedBook.src,
      alt: "selected image",
      onClick: selectedBook.isAvailableForGuest || userLoggedIn ? function () {
        return navigate(_constans_routes_ts__WEBPACK_IMPORTED_MODULE_1__.PATH.bookPage(selectedBook.id));
      } : function () {
        return null;
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "selected__name-book"
    }, selectedBook.title));
  }))));
}

SelectedBooks.propTypes = {
  selectedBooks: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    author: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    genre: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    id: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)]),
    isAvailableForGuest: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    onlyText: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)]),
    src: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    text: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
  })),
  setCheckLikedBooks: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired),
  setSelectedBooks: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedBooks);

/***/ }),

/***/ "./src/Components/ServerError/ServerError.jsx":
/*!****************************************************!*\
  !*** ./src/Components/ServerError/ServerError.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_selectors_serverErrorSelectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/selectors/serverErrorSelectors.js */ "./src/store/selectors/serverErrorSelectors.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_images_serverError_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/serverError.png */ "./src/assets/images/serverError.png");
/* harmony import */ var _serverError_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serverError.scss */ "./src/Components/ServerError/serverError.scss");






function ServerError() {
  var message = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_store_selectors_serverErrorSelectors_js__WEBPACK_IMPORTED_MODULE_1__.serverMessageError);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "response-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "response-error__title"
  }, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_serverError_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: ""
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerError);

/***/ }),

/***/ "./src/Components/Table/Books/Books.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Table/Books/Books.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/selectors/userSelectors */ "./src/store/selectors/userSelectors.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _constans_routes_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constans/routes.ts */ "./src/constans/routes.ts");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _NotAvailableModal_NotAvailableModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../NotAvailableModal/NotAvailableModal */ "./src/Components/NotAvailableModal/NotAvailableModal.jsx");
/* harmony import */ var _books_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books.scss */ "./src/Components/Table/Books/books.scss");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












function Books(_ref) {
  var filteredBooks = _ref.filteredBooks,
      bookSrc = _ref.bookSrc,
      setBookSrc = _ref.setBookSrc,
      valueOfAvailableModal = _ref.valueOfAvailableModal,
      setValueOfAvailableModal = _ref.setValueOfAvailableModal,
      selectedBooks = _ref.selectedBooks,
      setSelectedBooks = _ref.setSelectedBooks;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  var userLoggedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_store_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_1__.isLoggedIn);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "books"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "books__list"
  }, filteredBooks.map(function (filteredBook) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "books__wrapper",
      key: filteredBook.id,
      onClick: function onClick() {
        return setBookSrc(filteredBook.src);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "books__item",
      onClick: filteredBook.isAvailableForGuest || userLoggedIn ? function () {
        navigate("".concat(_constans_routes_ts__WEBPACK_IMPORTED_MODULE_2__.PATH.bookPage(filteredBook.id)));
      } : function () {
        setValueOfAvailableModal(true);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", {
      className: "books__figure"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: filteredBook.src,
      alt: "",
      className: "books__img"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "books__add",
      onClick: function onClick(event) {
        if (!selectedBooks.find(function (book) {
          return +book.id === +filteredBook.id;
        })) {
          setSelectedBooks([].concat(_toConsumableArray(selectedBooks), [filteredBook]));
        } else {
          var findElem = _toConsumableArray(selectedBooks).find(function (elem) {
            return +elem.id === +filteredBook.id;
          });

          var newSelectedBooks = _toConsumableArray(selectedBooks).filter(function (selectBook) {
            return selectBook.id !== findElem.id;
          });

          setSelectedBooks(newSelectedBooks);
        }

        event.stopPropagation();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillHeart, {
      className: selectedBooks.find(function (book) {
        return +book.id === +filteredBook.id;
      }) ? 'fa-add-heart active' : 'fa-add-heart'
    })), !filteredBook.isAvailableForGuest && !userLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaLock, {
      className: "fa-lock"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figcaption", {
      className: "books__name"
    }, filteredBook.title)), valueOfAvailableModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotAvailableModal_NotAvailableModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      bookSrc: bookSrc,
      valueOfAvailableModal: valueOfAvailableModal,
      setValueOfAvailableModal: setValueOfAvailableModal
    }));
  })));
}

Books.propTypes = {
  filteredBooks: prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)),
  bookSrc: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  setBookSrc: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired),
  valueOfAvailableModal: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool.isRequired),
  setValueOfAvailableModal: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired),
  selectedBooks: prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
    author: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    genre: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    id: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)]),
    isAvailableForGuest: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
    onlyText: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool)]),
    src: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    text: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)
  })),
  setSelectedBooks: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Books);

/***/ }),

/***/ "./src/Components/Table/Header/Header.jsx":
/*!************************************************!*\
  !*** ./src/Components/Table/Header/Header.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/selectors/userSelectors */ "./src/store/selectors/userSelectors.js");
/* harmony import */ var _constans_routes_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constans/routes.ts */ "./src/constans/routes.ts");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _SelectedBooks_SelectedBooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SelectedBooks/SelectedBooks */ "./src/Components/SelectedBooks/SelectedBooks.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.scss */ "./src/Components/Table/Header/header.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function Header(_ref) {
  var searchString = _ref.searchString,
      setsearchString = _ref.setsearchString,
      selectedBooks = _ref.selectedBooks,
      setSelectedBooks = _ref.setSelectedBooks,
      setValueOfAvailableModal = _ref.setValueOfAvailableModal;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      checkLikedBooks = _useState2[0],
      setCheckLikedBooks = _useState2[1];

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  var userLoggedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_2__.isLoggedIn);
  var userName = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_2__.loggedUserName);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header__wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "header__login",
    onClick: function onClick() {
      return navigate(userLoggedIn ? _constans_routes_ts__WEBPACK_IMPORTED_MODULE_3__.PATH.userProfile(userName) : _constans_routes_ts__WEBPACK_IMPORTED_MODULE_3__.PATH.loginPage);
    }
  }, !userLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiLogIn, {
    className: "mini-icon-for-ui"
  }), " \u0412\u043E\u0439\u0442\u0438") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logout-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaUserAlt, {
    className: "mini-icon-for-ui"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "header__name"
  }, userName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header__input-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "\u041F\u043E\u0438\u0441\u043A..",
    className: "header__search",
    value: searchString,
    onChange: function onChange(e) {
      return setsearchString(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "header__submit",
    type: "submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaSearch, {
    className: "fa-search"
  })), searchString && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "header__search-prompt"
  }, searchString + '?')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header__liked",
    onClick: function onClick() {
      return setCheckLikedBooks(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillHeart, {
    className: "fa-heart"
  }), selectedBooks.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header__heart-counter"
  }, selectedBooks.length)), checkLikedBooks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SelectedBooks_SelectedBooks__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setValueOfAvailableModal: setValueOfAvailableModal,
    selectedBooks: selectedBooks,
    setSelectedBooks: setSelectedBooks,
    setCheckLikedBooks: setCheckLikedBooks
  }))));
}

Header.propTypes = {
  searchString: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
  setsearchString: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  selectedBooks: prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    author: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
    genre: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
    id: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number)]),
    isAvailableForGuest: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
    onlyText: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)]),
    src: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
    text: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)
  })),
  setSelectedBooks: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  setValueOfAvailableModal: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/Components/Table/Tools/Tools.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Table/Tools/Tools.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTHORS_LIST": () => (/* binding */ AUTHORS_LIST),
/* harmony export */   "GENRE_LIST": () => (/* binding */ GENRE_LIST),
/* harmony export */   "TYPE_LIST": () => (/* binding */ TYPE_LIST),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HiddenBlock_HiddenBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HiddenBlock/HiddenBlock */ "./src/Components/HiddenBlock/HiddenBlock.jsx");
/* harmony import */ var _Contexts_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Contexts/theme */ "./src/Contexts/theme.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools.scss */ "./src/Components/Table/Tools/tools.scss");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var AUTHORS_LIST = [{
  name: 'Все авторы',
  id: 'all'
}, {
  name: 'Ханс Христиан Андерсен',
  id: 1
}, {
  name: 'Леонид Пантеллев',
  id: 2
}, {
  name: 'Виктор Драгунский',
  id: 3
}, {
  name: 'Джозеф Джейкобс',
  id: 4
}, {
  name: 'Дина Непомнящая',
  id: 5
}, {
  name: 'Эндрю Лэнг',
  id: 6
}, {
  name: 'Джек Лондон',
  id: 7
}];
var GENRE_LIST = [{
  name: 'Все жанры',
  id: 'all'
}, {
  name: 'Приключение',
  id: 1
}, {
  name: 'Обучение',
  id: 2
}, {
  name: 'Колыбельная песня',
  id: 3
}];
var TYPE_LIST = [{
  name: 'Показать все',
  id: 'all'
}, {
  name: 'Показать только с текстом',
  id: 1
}, {
  name: 'Показать только со звуком',
  id: 2
}];

function Tools(_ref) {
  var filtersList = _ref.filtersList,
      sortingValue = _ref.sortingValue,
      setSortingValue = _ref.setSortingValue,
      allChecked = _ref.allChecked,
      setAllChecked = _ref.setAllChecked;

  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)(),
      _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
      searchParams = _useSearchParams2[0],
      setSearchParams = _useSearchParams2[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Contexts_theme__WEBPACK_IMPORTED_MODULE_2__.globalThemeContext),
      theme = _useContext.theme,
      setTheme = _useContext.setTheme;

  var updateData = function updateData(sortFieldName) {
    return function (childSelectValue) {
      var newSoringValue = _objectSpread({}, sortingValue);

      newSoringValue[sortFieldName] = childSelectValue;
      setSortingValue(newSoringValue);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "tools"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "tools__list"
  }, Object.keys(filtersList).map(function (listItemName, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HiddenBlock_HiddenBlock__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      searchParams: searchParams.get(listItemName),
      handleSelect: updateData(listItemName),
      dataArray: filtersList[listItemName].filterOptions
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tools__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: allChecked ? true : false,
    className: "tools__checkbox",
    onChange: function onChange() {
      return setAllChecked(!allChecked);
    },
    id: "tools__check"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "tools__check"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "tools__available"
  }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tools__theme",
    onClick: function onClick() {
      return setTheme(theme === 'light' ? 'dark' : 'light');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: theme === 'dark' ? 'tools__wrap-theme--dark wrap-theme' : 'tools__wrap-theme wrap-theme'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: theme === 'dark' ? 'tools__circle-theme--dark circle' : 'tools__circle-theme circle'
  })))));
}

Tools.propTypes = {
  sortingValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    author: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    genre: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    type: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
  }),
  setSortingValue: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  allChecked: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  setAllChecked: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tools);

/***/ }),

/***/ "./src/Scenes/Sorting/Sorting.jsx":
/*!****************************************!*\
  !*** ./src/Scenes/Sorting/Sorting.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _api_booksApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/booksApi */ "./src/api/booksApi.js");
/* harmony import */ var _api_userApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/userApi */ "./src/api/userApi.js");
/* harmony import */ var react_redux_es_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux/es/exports */ "./node_modules/react-redux/es/exports.js");
/* harmony import */ var _Components_SpinnerLoading_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/SpinnerLoading/Spinner */ "./src/Components/SpinnerLoading/Spinner.jsx");
/* harmony import */ var _Components_Table_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Table/Header/Header */ "./src/Components/Table/Header/Header.jsx");
/* harmony import */ var _Components_Table_Tools_Tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/Table/Tools/Tools */ "./src/Components/Table/Tools/Tools.jsx");
/* harmony import */ var _Components_ServerError_ServerError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/ServerError/ServerError */ "./src/Components/ServerError/ServerError.jsx");
/* harmony import */ var _store_selectors_serverErrorSelectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/selectors/serverErrorSelectors */ "./src/store/selectors/serverErrorSelectors.js");
/* harmony import */ var _Components_Table_Books_Books__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Components/Table/Books/Books */ "./src/Components/Table/Books/Books.jsx");
/* harmony import */ var _store_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/selectors/userSelectors */ "./src/store/selectors/userSelectors.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sorting_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sorting.scss */ "./src/Scenes/Sorting/sorting.scss");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var filtersList = {
  author: {
    filterOptions: _Components_Table_Tools_Tools__WEBPACK_IMPORTED_MODULE_6__.AUTHORS_LIST
  },
  genre: {
    filterOptions: _Components_Table_Tools_Tools__WEBPACK_IMPORTED_MODULE_6__.GENRE_LIST
  },
  type: {
    filterOptions: _Components_Table_Tools_Tools__WEBPACK_IMPORTED_MODULE_6__.TYPE_LIST
  }
};

function Sorting() {
  var isError = (0,react_redux_es_exports__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_store_selectors_serverErrorSelectors__WEBPACK_IMPORTED_MODULE_8__.isServerError);
  var isLogged = (0,react_redux_es_exports__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_store_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_10__.isLoggedIn);
  var userId = (0,react_redux_es_exports__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_store_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_10__.IdUser);

  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useSearchParams)(),
      _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
      searchParams = _useSearchParams2[0],
      setSearchParams = _useSearchParams2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      fetchBooks = _useState2[0],
      setFetchBooks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      filteredBooks = _useState4[0],
      setFilteredBooks = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isLogged ? [] : JSON.parse(localStorage.getItem('selectedBooks')) || []),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedBooks = _useState6[0],
      setSelectedBooks = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      successResponseServer = _useState8[0],
      setSuccessResponseServer = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(searchParams.get('searchString') || ''),
      _useState10 = _slicedToArray(_useState9, 2),
      searchString = _useState10[0],
      setsearchString = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      bookSrc = _useState12[0],
      setBookSrc = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(searchParams.get('onlyAvailable') === 'true' ? true : false),
      _useState14 = _slicedToArray(_useState13, 2),
      allChecked = _useState14[0],
      setAllChecked = _useState14[1];

  var initialFilter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var initialFilterState = {};
    Object.keys(filtersList).forEach(function (filterEntryValue) {
      initialFilterState[filterEntryValue] = 'all';
    });
    return initialFilterState;
  }, []);

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialFilter),
      _useState16 = _slicedToArray(_useState15, 2),
      sortingValue = _useState16[0],
      setSortingValue = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      valueOfAvailableModal = _useState18[0],
      setValueOfAvailableModal = _useState18[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api_booksApi__WEBPACK_IMPORTED_MODULE_1__.fetchBooksList)().then(function (_ref) {
      var data = _ref.data;
      setFetchBooks(data);
    });
    (0,_api_userApi__WEBPACK_IMPORTED_MODULE_2__.fetchUserById)(userId).then(function (response) {
      if (isLogged) {
        setSelectedBooks(response.data.likedBooks);
        setSuccessResponseServer(true);
      }
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isLogged && successResponseServer) {
      axios__WEBPACK_IMPORTED_MODULE_11___default().patch("http://localhost:8000/users/".concat(userId), {
        likedBooks: selectedBooks
      });
    } else {
      localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
    }
  }, [selectedBooks]);

  var filterBooks = function filterBooks(booksToFilter, sortingValue, handleAvailable, searchString) {
    return booksToFilter.filter(function (book) {
      var isPassed = true;

      if (!isLogged && handleAvailable && !book.isAvailableForGuest) {
        isPassed = false;
      }

      if (searchString && !book.title.toLowerCase().includes(searchString.toLowerCase())) {
        isPassed = false;
      }

      Object.keys(sortingValue).forEach(function (sortFieldName) {
        var filterSelected = sortingValue[sortFieldName] !== 'all';

        if (filterSelected) {
          var readableName = filtersList[sortFieldName].filterOptions.find(function (author) {
            return author.name === book[sortFieldName];
          });

          if (readableName && readableName.id != sortingValue[sortFieldName] || !readableName) {
            isPassed = false;
          }
        }
      });
      return isPassed;
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (fetchBooks !== null) {
      setFilteredBooks(filterBooks(fetchBooks, sortingValue, allChecked, searchString));
      setSearchParams(_objectSpread({
        searchString: searchString,
        onlyAvailable: allChecked
      }, sortingValue));
    }
  }, [fetchBooks, sortingValue, allChecked, searchString]);

  if (fetchBooks === null && !isError || isLogged && !successResponseServer) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_SpinnerLoading_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (successResponseServer || isLogged === false) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_ServerError_ServerError__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Table_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    searchString: searchString,
    setsearchString: setsearchString,
    selectedBooks: selectedBooks,
    setSelectedBooks: setSelectedBooks,
    setValueOfAvailableModal: setValueOfAvailableModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Table_Tools_Tools__WEBPACK_IMPORTED_MODULE_6__["default"], {
    filtersList: filtersList,
    sortingValue: sortingValue,
    setSortingValue: setSortingValue,
    allChecked: allChecked,
    setAllChecked: setAllChecked
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Table_Books_Books__WEBPACK_IMPORTED_MODULE_9__["default"], {
    filteredBooks: filteredBooks,
    bookSrc: bookSrc,
    setBookSrc: setBookSrc,
    valueOfAvailableModal: valueOfAvailableModal,
    setValueOfAvailableModal: setValueOfAvailableModal,
    selectedBooks: selectedBooks,
    setSelectedBooks: setSelectedBooks
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sorting);

/***/ }),

/***/ "./src/api/booksApi.js":
/*!*****************************!*\
  !*** ./src/api/booksApi.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchBooksList": () => (/* binding */ fetchBooksList)
/* harmony export */ });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./src/api/instance.js");

var fetchBooksList = function fetchBooksList() {
  return _instance__WEBPACK_IMPORTED_MODULE_0__["default"].get('/dataBaseBooks/');
};

/***/ }),

/***/ "./src/api/instance.js":
/*!*****************************!*\
  !*** ./src/api/instance.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_initStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/initStore */ "./src/store/initStore.js");


var fakeServerInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'http://localhost:8000/'
});
fakeServerInstance.interceptors.response.use(function (response) {
  _store_initStore__WEBPACK_IMPORTED_MODULE_1__.store.dispatch({
    type: 'noError'
  });
  return response;
}, function (response) {
  _store_initStore__WEBPACK_IMPORTED_MODULE_1__.store.dispatch({
    type: 'throwError',
    payload: {
      message: response.message
    }
  });
  throw new Error(response);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fakeServerInstance);

/***/ }),

/***/ "./src/api/userApi.js":
/*!****************************!*\
  !*** ./src/api/userApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUserById": () => (/* binding */ fetchUserById),
/* harmony export */   "fetchUsers": () => (/* binding */ fetchUsers)
/* harmony export */ });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./src/api/instance.js");

var fetchUsers = function fetchUsers() {
  return _instance__WEBPACK_IMPORTED_MODULE_0__["default"].get('/users');
};
var fetchUserById = function fetchUserById(id) {
  return _instance__WEBPACK_IMPORTED_MODULE_0__["default"].get("/users/".concat(id));
};

/***/ }),

/***/ "./src/store/selectors/serverErrorSelectors.js":
/*!*****************************************************!*\
  !*** ./src/store/selectors/serverErrorSelectors.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isServerError": () => (/* binding */ isServerError),
/* harmony export */   "serverMessageError": () => (/* binding */ serverMessageError)
/* harmony export */ });
var isServerError = function isServerError(state) {
  return state.server.isError;
};
var serverMessageError = function serverMessageError(state) {
  return state.server.errorMessage;
};

/***/ }),

/***/ "./src/store/selectors/userSelectors.js":
/*!**********************************************!*\
  !*** ./src/store/selectors/userSelectors.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdUser": () => (/* binding */ IdUser),
/* harmony export */   "isLoggedIn": () => (/* binding */ isLoggedIn),
/* harmony export */   "loggedUserName": () => (/* binding */ loggedUserName),
/* harmony export */   "loggedUserPassword": () => (/* binding */ loggedUserPassword)
/* harmony export */ });
var isLoggedIn = function isLoggedIn(state) {
  return state.user.isLoggedIn;
};
var loggedUserName = function loggedUserName(state) {
  return state.user.name;
};
var loggedUserPassword = function loggedUserPassword(state) {
  return state.user.password;
};
var IdUser = function IdUser(state) {
  return state.user.id;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/HiddenBlock/hiddenBlock.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/HiddenBlock/hiddenBlock.scss ***!
  \**********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tools__hidden-list {\n  width: 100%;\n  outline: none;\n  border: none;\n  display: flex;\n  align-items: center;\n  padding: 6px 10px;\n  font-weight: 400;\n  cursor: pointer;\n  position: relative;\n  transition: 0.2s ease-out;\n  color: var(--colorTheme--default);\n  background-color: var(--componentsTheme--default);\n}\n\n.tools__hidden-item + .tools__hidden-item {\n  margin-top: 115px;\n}\n\n.tools__hidden-item:first-child {\n  color: #000;\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/Components/HiddenBlock/hiddenBlock.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,iCAAA;EACA,iDAAA;AACJ;;AACA;EACI,iBAAA;AAEJ;;AAAA;EACI,WAAA;EACA,gBAAA;AAGJ","sourcesContent":[".tools__hidden-list {\r\n    width: 100%;\r\n    outline: none;\r\n    border: none;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 6px 10px;\r\n    font-weight: 400;\r\n    cursor: pointer;\r\n    position: relative;\r\n    transition: 0.2s ease-out;\r\n    color: var(#{--colorTheme--default});\r\n    background-color: var(#{--componentsTheme--default});\r\n}\r\n.tools__hidden-item + .tools__hidden-item {\r\n    margin-top: 115px;\r\n}\r\n.tools__hidden-item:first-child {\r\n    color: #000;\r\n    font-weight: 700;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/NotAvailableModal/notAvailableModa.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/NotAvailableModal/notAvailableModa.scss ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));\n  transition: 20.2s ease-in;\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  padding: 20px 25px;\n  transform: scale(0);\n}\n.modal .modal__content {\n  background-color: var(--componentsTheme--default);\n  width: 300px;\n  border-radius: 10px;\n  padding: 15px 20px;\n  border: 2px solid #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.modal .modal__text {\n  color: var(--colorTheme--default);\n  letter-spacing: 0.5px;\n  margin-top: 15px;\n  text-align: center;\n}\n.modal .modal-ok {\n  padding: 5px 15px;\n  border-radius: 5px;\n  background-color: #792020;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  cursor: pointer;\n  margin-top: 10px;\n  color: #fff;\n}\n\n.modal.active {\n  transform: scale(1);\n}\n\n.modal__img {\n  width: 180px;\n  height: 230px;\n}", "",{"version":3,"sources":["webpack://./src/Components/NotAvailableModal/notAvailableModa.scss"],"names":[],"mappings":"AAAA;EACC,YAAA;EACA,aAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,mEAAA;EACA,yBAAA;EACA,UAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;AACD;AAAC;EACC,iDAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAEF;AAAC;EACC,iCAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AAEF;AAAC;EACC,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;AAEF;;AAEA;EACC,mBAAA;AACD;;AAEA;EACC,YAAA;EACA,aAAA;AACD","sourcesContent":[".modal {\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbackground: linear-gradient(rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.1));\r\n\ttransition: 20.2s ease-in;\r\n\tz-index: 3;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\toverflow: hidden;\r\n\tpadding: 20px 25px;\r\n\ttransform: scale(0);\r\n\t.modal__content {\r\n\t\tbackground-color: var(#{--componentsTheme--default});\r\n\t\twidth: 300px;\r\n\t\tborder-radius: 10px;\r\n\t\tpadding: 15px 20px;\r\n\t\tborder: 2px solid #000;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tflex-direction: column;\r\n\t}\r\n\t.modal__text {\r\n\t\tcolor: var(#{--colorTheme--default});\r\n\t\tletter-spacing: 0.5px;\r\n\t\tmargin-top: 15px;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.modal-ok {\r\n\t\tpadding: 5px 15px;\r\n\t\tborder-radius: 5px;\r\n\t\tbackground-color: #792020;\r\n\t\tfont-size: 10px;\r\n\t\tfont-weight: bold;\r\n\t\ttext-align: center;\r\n\t\tcursor: pointer;\r\n\t\tmargin-top: 10px;\r\n\t\tcolor: #fff;\r\n\t}\r\n}\r\n\r\n.modal.active {\r\n\ttransform: scale(1);\r\n}\r\n\r\n.modal__img {\r\n\twidth: 180px;\r\n\theight: 230px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/SelectedBooks/selectedBooks.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/SelectedBooks/selectedBooks.scss ***!
  \**************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal__liked {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 11;\n}\n\n.selected__wrap {\n  position: relative;\n  background-color: var(--componentsTheme--default);\n  padding: 20px 25px;\n  border-radius: 7px;\n}\n\n.selected__title {\n  color: var(--colorTheme--default);\n  font-weight: normal;\n}\n\n.selected__list {\n  margin-top: 15px;\n  overflow-y: overlay;\n  width: 400px;\n  max-height: 500px;\n  z-index: 3;\n  color: var(--colorTheme--default);\n}\n\n.selected__book {\n  display: flex;\n  align-items: center;\n}\n\n.selected__book + .selected__book {\n  margin-top: 25px;\n}\n\n.selected__close {\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  top: 5px;\n  right: 5px;\n  border-radius: 50%;\n  border: 1px solid #000;\n  outline: none;\n  background-color: #cc3030;\n  font-size: 20px;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.selected__delete-book {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 3px 3px 6px rgba(0, 126, 177, 0.25);\n  cursor: pointer;\n  border: none;\n  outline: none;\n}\n\n.selected__img {\n  width: 85px;\n  height: 100px;\n  margin: 0 10px;\n  cursor: pointer;\n}\n\n.selected__name-book {\n  font-size: 15px;\n  margin-left: 25px;\n}", "",{"version":3,"sources":["webpack://./src/Components/SelectedBooks/selectedBooks.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mEAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;AACJ;;AACA;EACI,kBAAA;EACA,iDAAA;EACA,kBAAA;EACA,kBAAA;AAEJ;;AAAA;EACI,iCAAA;EACA,mBAAA;AAGJ;;AADA;EACI,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,UAAA;EACA,iCAAA;AAIJ;;AAFA;EACI,aAAA;EACA,mBAAA;AAKJ;;AAHA;EACI,gBAAA;AAMJ;;AAJA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,QAAA;EACA,UAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,yBAAA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;AAOJ;;AALA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,+CAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;AAQJ;;AANA;EACI,WAAA;EACA,aAAA;EACA,cAAA;EACA,eAAA;AASJ;;AAPA;EACI,eAAA;EACA,iBAAA;AAUJ","sourcesContent":[".modal__liked {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background: linear-gradient(rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.4));\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 11;\r\n}\r\n.selected__wrap {\r\n    position: relative;\r\n    background-color: var(#{--componentsTheme--default});\r\n    padding: 20px 25px;\r\n    border-radius: 7px;\r\n}\r\n.selected__title {\r\n    color: var(#{--colorTheme--default});\r\n    font-weight: normal;\r\n}\r\n.selected__list {\r\n    margin-top: 15px;\r\n    overflow-y: overlay;\r\n    width: 400px;\r\n    max-height: 500px;\r\n    z-index: 3;\r\n    color: var(#{--colorTheme--default});\r\n}\r\n.selected__book {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.selected__book + .selected__book {\r\n    margin-top: 25px;\r\n}\r\n.selected__close {\r\n    position: absolute;\r\n    width: 35px;\r\n    height: 35px;\r\n    top: 5px;\r\n    right: 5px;\r\n    border-radius: 50%;\r\n    border: 1px solid #000;\r\n    outline: none;\r\n    background-color: #cc3030;\r\n    font-size: 20px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n.selected__delete-book {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    box-shadow: 3px 3px 6px rgb(0 126 177 / 25%);\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n}\r\n.selected__img {\r\n    width: 85px;\r\n    height: 100px;\r\n    margin: 0 10px;\r\n    cursor: pointer;\r\n}\r\n.selected__name-book {\r\n    font-size: 15px;\r\n    margin-left: 25px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/ServerError/serverError.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/ServerError/serverError.scss ***!
  \**********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".response-error {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #ffffff;\n  font-weight: bold;\n  z-index: 99;\n}\n.response-error .response-error__title {\n  text-transform: uppercase;\n  font-size: 45px;\n  margin-bottom: 35px;\n  color: #000;\n  font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/Components/ServerError/serverError.scss"],"names":[],"mappings":"AAAA;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBAAA;EACA,iBAAA;EACA,WAAA;AACD;AAAC;EACC,yBAAA;EACA,eAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;AAEF","sourcesContent":[".response-error {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tbackground-color: #ffffff;\r\n\tfont-weight: bold;\r\n\tz-index: 99;\r\n\t.response-error__title {\r\n\t\ttext-transform: uppercase;\r\n\t\tfont-size: 45px;\r\n\t\tmargin-bottom: 35px;\r\n\t\tcolor: #000;\r\n\t\tfont-weight: bold;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Table/Books/books.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Table/Books/books.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".books {\n  padding: 25px 0;\n}\n\n.books__list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));\n  column-gap: 20px;\n  row-gap: 40px;\n  max-height: 625px;\n  min-height: 310px;\n  overflow-y: scroll;\n  padding-bottom: 30px;\n}\n\n.books__item {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-shadow: 5px 5px 10px rgba(0, 126, 177, 0.3);\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.books__item .fa-lock {\n  position: absolute;\n  bottom: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #fffb00;\n  font-size: 20px;\n}\n.books__item .books__add {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 5px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--componentsTheme--default);\n  border-radius: 50%;\n  transition: 0.2s all;\n  cursor: default;\n}\n.books__item .books__add:hover {\n  transform: scale(1.1);\n}\n.books__item .fa-add-heart {\n  font-size: 25px;\n  transition: 0.2s all;\n}\n.books__item .fa-add-heart.active {\n  color: #dd2424;\n}\n.books__item::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n}\n.books__item:hover {\n  transform: scale(0.97);\n}\n\n.books__img,\n.books__figure {\n  height: 100%;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/Components/Table/Books/books.scss"],"names":[],"mappings":"AAAA;EACC,eAAA;AACD;;AAEA;EACC,aAAA;EACA,4DAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,oBAAA;AACD;;AAEA;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,+CAAA;EACA,eAAA;EACA,4BAAA;AACD;AAAC;EACC,kBAAA;EACA,WAAA;EACA,SAAA;EACA,2BAAA;EACA,cAAA;EACA,eAAA;AAEF;AAAC;EACC,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iDAAA;EACA,kBAAA;EACA,oBAAA;EACA,eAAA;AAEF;AADE;EACC,qBAAA;AAGH;AAAC;EACC,eAAA;EACA,oBAAA;AAEF;AAAC;EACC,cAAA;AAEF;AACC;EACC,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,8BAAA;AACF;AACC;EACC,sBAAA;AACF;;AAGA;;EAEC,YAAA;EACA,WAAA;AAAD","sourcesContent":[".books {\r\n\tpadding: 25px 0;\r\n}\r\n\r\n.books__list {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fill, minmax(215px, 1fr));\r\n\tcolumn-gap: 20px;\r\n\trow-gap: 40px;\r\n\tmax-height: 625px;\r\n\tmin-height: 310px;\r\n\toverflow-y: scroll;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\n.books__item {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbox-shadow: 5px 5px 10px rgb(0 126 177 / 30%);\r\n\tcursor: pointer;\r\n\ttransition: 0.2s ease-in-out;\r\n\t.fa-lock {\r\n\t\tposition: absolute;\r\n\t\tbottom: 5px;\r\n\t\tleft: 50%;\r\n\t\ttransform: translateX(-50%);\r\n\t\tcolor: #fffb00;\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t.books__add {\r\n\t\tposition: absolute;\r\n\t\ttop: 10px;\r\n\t\tright: 10px;\r\n\t\tpadding: 5px;\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tbackground-color: var(#{--componentsTheme--default});\r\n\t\tborder-radius: 50%;\r\n\t\ttransition: 0.2s all;\r\n\t\tcursor: default;\r\n\t\t&:hover {\r\n\t\t\ttransform: scale(1.1);\r\n\t\t}\r\n\t}\r\n\t.fa-add-heart {\r\n\t\tfont-size: 25px;\r\n\t\ttransition: 0.2s all;\r\n\t}\r\n\t.fa-add-heart.active {\r\n\t\tcolor: #dd2424;\r\n\t}\r\n\r\n\t&::before {\r\n\t\tcontent: '';\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tbackground: rgba(0, 0, 0, 0.2);\r\n\t}\r\n\t&:hover {\r\n\t\ttransform: scale(0.97);\r\n\t}\r\n}\r\n\r\n.books__img,\r\n.books__figure {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Table/Header/header.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Table/Header/header.scss ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n  padding: 40px 0;\n}\n\n.fa-solid {\n  color: #fff;\n}\n\n.header__wrap {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  align-items: center;\n}\n.header__wrap .header__input-wrap {\n  position: relative;\n  z-index: 1;\n}\n.header__wrap .header__login {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  justify-self: left;\n  transition: 0.2s ease-in-out;\n  z-index: 6;\n}\n.header__wrap .header__login:hover {\n  transform: scale(1.05);\n}\n.header__wrap .header__login .mini-icon-for-ui {\n  margin-right: 5px;\n}\n.header__wrap .header__search {\n  width: 100%;\n  background-color: var(--searchBackgroundTheme--default);\n  box-shadow: 5px 5px 20px rgba(0, 126, 177, 0.3);\n  padding: 10px 7px;\n  color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 15px;\n  transition: 0.2s ease-out;\n}\n.header__wrap .header__search::placeholder {\n  color: #fff;\n}\n.header__wrap .header__search:focus {\n  border: 1px solid rgba(250, 250, 250, 0.6);\n}\n.header__wrap .header__liked {\n  position: relative;\n  text-align: right;\n  z-index: 1;\n}\n.header__wrap .login-wrap, .header__wrap .logout-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__wrap .big-user {\n  font-size: 45px;\n}\n.header__wrap .fa-heart {\n  font-size: 35px;\n  cursor: pointer;\n  transition: 0.2s ease-in;\n  color: #fff;\n}\n.header__wrap .fa-heart:hover {\n  color: #e2c3c3;\n}\n.header__wrap .header__heart-counter {\n  border-radius: 50%;\n  padding: 5px;\n  width: 20px;\n  height: 20px;\n  background-color: #e44848;\n  color: #100c40;\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__wrap .header__search-prompt {\n  position: absolute;\n  top: -30px;\n  right: 5px;\n  font-size: 10px;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #5f5f5f;\n  overflow: auto;\n}\n.header__wrap .header__submit {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 7px;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n.header__wrap .header__submit .fa-search {\n  font-size: 17px;\n  color: #fff;\n}\n.header__wrap .header__icon--mobile {\n  font-size: 40px;\n  color: #ffffff;\n  display: none;\n  cursor: pointer;\n  justify-self: left;\n  transition: 0.2s ease-in-out;\n  z-index: 1;\n}\n.header__wrap .header__icon--mobile:hover {\n  transform: scale(1.05);\n}\n\n.header__name {\n  z-index: 7;\n}\n\n@media only screen and (max-width: 550px) {\n  .header__name {\n    display: none;\n  }\n  .header__wrap .header__icon--mobile {\n    display: inline-block;\n  }\n}", "",{"version":3,"sources":["webpack://./src/Components/Table/Header/header.scss"],"names":[],"mappings":"AAAA;EACC,eAAA;AACD;;AAEA;EACC,WAAA;AACD;;AAEA;EACC,aAAA;EACA,kCAAA;EACA,mBAAA;AACD;AACC;EACC,kBAAA;EACA,UAAA;AACF;AACC;EACC,oBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,4BAAA;EACA,UAAA;AACF;AAAE;EACC,sBAAA;AAEH;AAAE;EACC,iBAAA;AAEH;AAEC;EACC,WAAA;EACA,uDAAA;EACA,+CAAA;EACA,iBAAA;EACA,WAAA;EACA,6BAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAAA;AAAF;AACE;EACC,WAAA;AACH;AACE;EACC,0CAAA;AACH;AAEC;EACC,kBAAA;EACA,iBAAA;EACA,UAAA;AAAF;AAEC;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;AAAF;AAEC;EACC,eAAA;AAAF;AAEC;EACC,eAAA;EACA,eAAA;EACA,wBAAA;EACA,WAAA;AAAF;AACE;EACC,cAAA;AACH;AAEC;EACC,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,cAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAAF;AAEC;EACC,kBAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,cAAA;EACA,cAAA;AAAF;AAEC;EACC,kBAAA;EACA,QAAA;EACA,2BAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,eAAA;AAAF;AACE;EACC,eAAA;EACA,WAAA;AACH;AAEC;EACC,eAAA;EACA,cAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,4BAAA;EACA,UAAA;AAAF;AACE;EACC,sBAAA;AACH;;AAIA;EACC,UAAA;AADD;;AAIA;EACC;IACC,aAAA;EADA;EAGD;IACC,qBAAA;EADA;AACF","sourcesContent":[".header {\r\n\tpadding: 40px 0;\r\n}\r\n\r\n.fa-solid {\r\n\tcolor: #fff;\r\n}\r\n\r\n.header__wrap {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 2fr 1fr;\r\n\talign-items: center;\r\n\r\n\t.header__input-wrap {\r\n\t\tposition: relative;\r\n\t\tz-index: 1;\r\n\t}\r\n\t.header__login {\r\n\t\tdisplay: inline-flex;\r\n\t\talign-items: center;\r\n\t\tcursor: pointer;\r\n\t\tjustify-self: left;\r\n\t\ttransition: 0.2s ease-in-out;\r\n\t\tz-index: 6;\r\n\t\t&:hover {\r\n\t\t\ttransform: scale(1.05);\r\n\t\t}\r\n\t\t.mini-icon-for-ui {\r\n\t\t\tmargin-right: 5px;\r\n\t\t}\r\n\t}\r\n\r\n\t.header__search {\r\n\t\twidth: 100%;\r\n\t\tbackground-color: var(#{--searchBackgroundTheme--default});\r\n\t\tbox-shadow: 5px 5px 20px rgb(0 126 177 / 30%);\r\n\t\tpadding: 10px 7px;\r\n\t\tcolor: #fff;\r\n\t\tborder: 1px solid transparent;\r\n\t\tborder-radius: 4px;\r\n\t\tfont-size: 15px;\r\n\t\ttransition: 0.2s ease-out;\r\n\t\t&::placeholder {\r\n\t\t\tcolor: #fff;\r\n\t\t}\r\n\t\t&:focus {\r\n\t\t\tborder: 1px solid rgba(250, 250, 250, 0.6);\r\n\t\t}\r\n\t}\r\n\t.header__liked {\r\n\t\tposition: relative;\r\n\t\ttext-align: right;\r\n\t\tz-index: 1;\r\n\t}\r\n\t.login-wrap, .logout-wrap {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t}\r\n\t.big-user {\r\n\t\tfont-size: 45px;\r\n\t}\r\n\t.fa-heart {\r\n\t\tfont-size: 35px;\r\n\t\tcursor: pointer;\r\n\t\ttransition: 0.2s ease-in;\r\n\t\tcolor: #fff;\r\n\t\t&:hover {\r\n\t\t\tcolor: #e2c3c3;\r\n\t\t}\r\n\t}\r\n\t.header__heart-counter {\r\n\t\tborder-radius: 50%;\r\n\t\tpadding: 5px;\r\n\t\twidth: 20px;\r\n\t\theight: 20px;\r\n\t\tbackground-color: #e44848;\r\n\t\tcolor: #100c40;\r\n\t\tposition: absolute;\r\n\t\ttop: -5px;\r\n\t\tright: -5px;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t}\r\n\t.header__search-prompt {\r\n\t\tposition: absolute;\r\n\t\ttop: -30px;\r\n\t\tright: 5px;\r\n\t\tfont-size: 10px;\r\n\t\tpadding: 5px 10px;\r\n\t\tbackground-color: #ffffff;\r\n\t\tcolor: #5f5f5f;\r\n\t\toverflow: auto;\r\n\t}\r\n\t.header__submit {\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\ttransform: translateY(-50%);\r\n\t\tright: 7px;\r\n\t\tborder: none;\r\n\t\toutline: none;\r\n\t\tbackground-color: transparent;\r\n\t\tcursor: pointer;\r\n\t\t.fa-search {\r\n\t\t\tfont-size: 17px;\r\n\t\t\tcolor: #fff;\r\n\t\t}\r\n\t}\r\n\t.header__icon--mobile {\r\n\t\tfont-size: 40px;\r\n\t\tcolor: #ffffff;\r\n\t\tdisplay: none;\r\n\t\tcursor: pointer;\r\n\t\tjustify-self: left;\r\n\t\ttransition: 0.2s ease-in-out;\r\n\t\tz-index: 1;\r\n\t\t&:hover {\r\n\t\t\ttransform: scale(1.05);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.header__name {\r\n\tz-index: 7;\r\n}\r\n\r\n@media only screen and (max-width: 550px) {\r\n\t.header__name {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.header__wrap .header__icon--mobile {\r\n\t\tdisplay: inline-block;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Table/Tools/tools.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Table/Tools/tools.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tools {\n  padding: 20px 0;\n}\n\n.tools__list {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 200px));\n  gap: 20px;\n}\n.tools__list .tools__item {\n  display: flex;\n  align-items: center;\n}\n.tools__list .tools__item .tools__available {\n  cursor: pointer;\n}\n.tools__list .tools__theme {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 15px;\n}\n.tools__list .wrap-theme {\n  width: 50px;\n  height: 25px;\n  border-radius: 15px;\n  position: relative;\n  cursor: pointer;\n  background-size: cover;\n  transition: 0.3s all;\n}\n.tools__list .circle {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 25px;\n  transition: 0.3s all;\n  border-radius: 50%;\n  border: 1px solid #373277;\n}\n.tools__list .tools__wrap-theme {\n  background-color: #8bc8e1;\n}\n.tools__list .tools__circle-theme {\n  background-color: #fff;\n  left: 2px;\n}\n.tools__list .tools__wrap-theme--dark {\n  background-color: #100c40;\n  border: 1px solid #fff;\n}\n.tools__list .tools__circle-theme--dark {\n  background-color: #fff;\n  right: 2px;\n  border: 1px solid #fff;\n}\n\n@media only screen and (max-width: 550px) {\n  .cloud-1 {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/Components/Table/Tools/tools.scss"],"names":[],"mappings":"AAAA;EACC,eAAA;AACD;;AAEA;EACC,kBAAA;EACA,aAAA;EACA,6DAAA;EACA,SAAA;AACD;AACC;EACC,aAAA;EACA,mBAAA;AACF;AACE;EACC,eAAA;AACH;AAGC;EACC,kBAAA;EACA,QAAA;EACA,2BAAA;EACA,WAAA;AADF;AAGC;EACC,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,sBAAA;EACA,oBAAA;AADF;AAGC;EACC,kBAAA;EACA,MAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,yBAAA;AADF;AAGC;EACC,yBAAA;AADF;AAGC;EACC,sBAAA;EACA,SAAA;AADF;AAGC;EACC,yBAAA;EACA,sBAAA;AADF;AAGC;EACC,sBAAA;EACA,UAAA;EACA,sBAAA;AADF;;AAIA;EACC;IACC,aAAA;EADA;AACF","sourcesContent":[".tools {\r\n\tpadding: 20px 0;\r\n}\r\n\r\n.tools__list {\r\n\tposition: relative;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fit, minmax(130px, 200px));\r\n\tgap: 20px;\r\n\r\n\t.tools__item {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\r\n\t\t.tools__available {\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t}\r\n\r\n\t.tools__theme {\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\ttransform: translateY(-50%);\r\n\t\tright: 15px;\r\n\t}\r\n\t.wrap-theme {\r\n\t\twidth: 50px;\r\n\t\theight: 25px;\r\n\t\tborder-radius: 15px;\r\n\t\tposition: relative;\r\n\t\tcursor: pointer;\r\n\t\tbackground-size: cover;\r\n\t\ttransition: 0.3s all;\r\n\t}\r\n\t.circle {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\theight: 100%;\r\n\t\twidth: 25px;\r\n\t\ttransition: 0.3s all;\r\n\t\tborder-radius: 50%;\r\n\t\tborder: 1px solid #373277;\r\n\t}\r\n\t.tools__wrap-theme {\r\n\t\tbackground-color: #8bc8e1;\r\n\t}\r\n\t.tools__circle-theme {\r\n\t\tbackground-color: #fff;\r\n\t\tleft: 2px;\r\n\t}\r\n\t.tools__wrap-theme--dark {\r\n\t\tbackground-color: #100c40;\r\n\t\tborder: 1px solid #fff;\r\n\t}\r\n\t.tools__circle-theme--dark {\r\n\t\tbackground-color: #fff;\r\n\t\tright: 2px;\r\n\t\tborder: 1px solid #fff;\r\n\t}\r\n}\r\n@media only screen and (max-width: 550px) {\r\n\t.cloud-1 {\r\n\t\tdisplay: none;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Scenes/Sorting/sorting.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Scenes/Sorting/sorting.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/images/serverError.png":
/*!*******************************************!*\
  !*** ./src/assets/images/serverError.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9c999f0fc3a39d1f4798a9405792138d.png");

/***/ }),

/***/ "./src/Components/HiddenBlock/hiddenBlock.scss":
/*!*****************************************************!*\
  !*** ./src/Components/HiddenBlock/hiddenBlock.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hiddenBlock_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./hiddenBlock.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/HiddenBlock/hiddenBlock.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hiddenBlock_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hiddenBlock_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hiddenBlock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_hiddenBlock_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/NotAvailableModal/notAvailableModa.scss":
/*!****************************************************************!*\
  !*** ./src/Components/NotAvailableModal/notAvailableModa.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_notAvailableModa_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./notAvailableModa.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/NotAvailableModal/notAvailableModa.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_notAvailableModa_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_notAvailableModa_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_notAvailableModa_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_notAvailableModa_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/SelectedBooks/selectedBooks.scss":
/*!*********************************************************!*\
  !*** ./src/Components/SelectedBooks/selectedBooks.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_selectedBooks_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./selectedBooks.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/SelectedBooks/selectedBooks.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_selectedBooks_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_selectedBooks_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_selectedBooks_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_selectedBooks_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/ServerError/serverError.scss":
/*!*****************************************************!*\
  !*** ./src/Components/ServerError/serverError.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_serverError_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./serverError.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/ServerError/serverError.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_serverError_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_serverError_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_serverError_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_serverError_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/Table/Books/books.scss":
/*!***********************************************!*\
  !*** ./src/Components/Table/Books/books.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_books_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./books.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Table/Books/books.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_books_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_books_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_books_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_books_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/Table/Header/header.scss":
/*!*************************************************!*\
  !*** ./src/Components/Table/Header/header.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Table/Header/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/Table/Tools/tools.scss":
/*!***********************************************!*\
  !*** ./src/Components/Table/Tools/tools.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tools_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./tools.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Table/Tools/tools.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tools_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tools_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tools_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tools_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Scenes/Sorting/sorting.scss":
/*!*****************************************!*\
  !*** ./src/Scenes/Sorting/sorting.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sorting_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./sorting.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Scenes/Sorting/sorting.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sorting_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sorting_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sorting_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sorting_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_Scenes_Sorting_Sorting_jsx.89ed266e6b2eaad839d5.js.map