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
var LabelShadowComponent = function (_a) {
    var label = _a.label, isDark = _a.isDark;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "ls-container" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "title-background " + (isDark ? 'tb-dark' : 'tb-light') }, { children: label }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "title-label" }, { children: label }), void 0)] }), void 0));
};
exports["default"] = LabelShadowComponent;
