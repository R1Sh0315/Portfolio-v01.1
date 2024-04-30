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
var Darkmode_svg_1 = __importDefault(require("../utility/Darkmode.svg"));
var Lightmode_svg_1 = __importDefault(require("../utility/Lightmode.svg"));
var ToggleBtnComponent = function (_a) {
    var label = _a.label, isDark = _a.isDark, toToggle = _a.toToggle;
    var _b = (0, react_1.useState)(toToggle || false), isBoolean = _b[0], setIsBoolean = _b[1];
    var onClickHandler = function () {
        var newValue = !isBoolean;
        setIsBoolean(newValue);
        if (isDark) {
            isDark(newValue);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "TBtn-container", onClick: onClickHandler }, { children: isBoolean ? ((0, jsx_runtime_1.jsx)("img", { className: "theme-container", src: Darkmode_svg_1["default"], alt: "Dark mode" }, void 0)) : ((0, jsx_runtime_1.jsx)("img", { className: "theme-container", src: Lightmode_svg_1["default"], alt: "Light mode" }, void 0)) }), void 0));
};
exports["default"] = ToggleBtnComponent;
