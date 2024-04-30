"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var DropDownComponent = function (_a) {
    var isOpenInput = _a.isOpenInput, outputValue = _a.outputValue, arr = _a.arr, label = _a.label;
    var _b = (0, react_1.useState)(isOpenInput), isOpen = _b[0], setIsOpen = _b[1];
    var onClickHandler = function () {
        setIsOpen(!isOpen);
        if (outputValue) {
            outputValue(!isOpen);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "dd-container" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "dd-main", onClick: onClickHandler }, { children: label }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "dd-option-container-" + (isOpen ? "unhide" : "hide") }, { children: arr.map(function (el, index) { return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "dd-option-" + (isOpen ? "unhide" : "hide") + " sub-component" }, { children: el }), index)); }) }), void 0)] }), void 0));
};
exports["default"] = DropDownComponent;
