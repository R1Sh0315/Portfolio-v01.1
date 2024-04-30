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
var PillComponent = function (_a) {
    var label = _a.label, url = _a.url, icon = _a.icon;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: url, target: "_blank" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "pill-container" }, { children: label }), void 0) }), void 0) }, void 0));
};
exports["default"] = PillComponent;
