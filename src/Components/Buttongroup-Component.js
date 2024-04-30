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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Button_Component_1 = __importDefault(require("./Button-Component"));
var ButtonGroupComponent = function (_a) {
    var bgList = _a.bgList, outputValue = _a.outputValue, isDark = _a.isDark;
    var _b = (0, react_1.useState)(0), selectedIdx = _b[0], setIdx = _b[1];
    var onClickHandler = function (val) {
        setIdx(val);
        if (outputValue) {
            outputValue(val);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "bg-container-" + (isDark ? 'dark' : 'light') }, { children: bgList.map(function (el, key) { return ((0, jsx_runtime_1.jsx)(Button_Component_1["default"], { label: el, bgColor: selectedIdx === key ? "primary" : "ghostColor", onClick: function () { return onClickHandler(key); } }, key)); }) }), void 0));
};
exports["default"] = ButtonGroupComponent;
