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
var Label_Shadow_1 = __importDefault(require("./Label-Shadow"));
var CardComponent = function (_a) {
    var label = _a.label, isDark = _a.isDark;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "card-container" }, { children: (0, jsx_runtime_1.jsx)(Label_Shadow_1["default"], { isDark: isDark, label: label }, void 0) }), void 0));
};
exports["default"] = CardComponent;
