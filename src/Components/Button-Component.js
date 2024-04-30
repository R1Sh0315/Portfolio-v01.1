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
var ButtonComponent = function (_a) {
    var label = _a.label, onClick = _a.onClick, bgColor = _a.bgColor;
    var backColor = bgColor === "primary"
        ? "primary-btn"
        : bgColor === "secondary"
            ? "secondary-btn"
            : "ghost-btn";
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "btn-contianer " + backColor, onClick: onClick }, { children: label }), void 0));
};
exports["default"] = ButtonComponent;
