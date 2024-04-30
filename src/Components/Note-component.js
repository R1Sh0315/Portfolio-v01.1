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
var NoteComponent = function (_a) {
    var description = _a.description, isDark = _a.isDark;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "n-container bg-n-" + (isDark ? 'dark' : 'light') }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "n-content" }, { children: ["\" ", description, "\""] }), void 0) }), void 0));
};
exports["default"] = NoteComponent;
