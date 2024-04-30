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
var ProgressBarComponent = function (_a) {
    var percentage = _a.percentage, pbLabel = _a.pbLabel, bgColor = _a.bgColor;
    var containerStyles = {
        height: "6px",
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
        margin: "20px 0"
    };
    var fillerStylesPrimary = {
        height: "100%",
        width: percentage + "%",
        boxShadow: "0 8px 32px 0 rgba(57, 167, 255, 0.4)",
        borderRadius: "inherit",
        textAlign: "right",
        transition: "width 1s ease-in-out"
    };
    var fillerStylesSecondary = {
        height: "100%",
        width: percentage + "%",
        boxShadow: "0 8px 32px 0 rgba(247, 39, 152, 0.4)",
        borderRadius: "inherit",
        textAlign: "right",
        transition: "width 1s ease-in-out"
    };
    var labelStyles = {
        padding: "5px",
        color: "#39a7ff",
        fontWeight: "bold",
        position: "absolute",
        margin: "-29px 0px 0px -55px"
    };
    var barColor = bgColor === "secondary" ? "secondary" : "primary";
    var boxShadowStyle = bgColor === "secondary" ? fillerStylesSecondary : fillerStylesPrimary;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "pb-contianer" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "pb-label" }, { children: pbLabel }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: containerStyles }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "pb-fill-bg-" + barColor, style: boxShadowStyle }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ style: labelStyles }, { children: percentage + "%" }), void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "pb-dot-" + barColor }, { children: " " }), void 0)] }), void 0) }), void 0)] }), void 0));
};
exports["default"] = ProgressBarComponent;
