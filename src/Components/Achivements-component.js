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
var Pill_Component_1 = __importDefault(require("./Pill-Component"));
var AchivementdsComponent = function (_a) {
    var data = _a.data, isDark = _a.isDark, label = _a.label;
    var certElement = data === null || data === void 0 ? void 0 : data.map(function (el) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "cer-card" }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "cer-prev", src: el.icon }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "car-detail " }, { children: (0, jsx_runtime_1.jsxs)("a", __assign({ className: "" + (isDark ? "dark" : "light"), href: el.url }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "car-name" }, { children: el.name }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "car-skill" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "car-description" }, { children: el === null || el === void 0 ? void 0 : el.description }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "pill-contient" }, { children: el === null || el === void 0 ? void 0 : el.skills.map(function (skill) { return ((0, jsx_runtime_1.jsx)(Pill_Component_1["default"], { label: skill }, void 0)); }) }), void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0)); });
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "achi-contianer" }, { children: [(0, jsx_runtime_1.jsx)(Label_Shadow_1["default"], { isDark: isDark, label: label }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "achi-content" }, { children: certElement }), void 0)] }), void 0));
};
exports["default"] = AchivementdsComponent;
