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
var DProgressbarComponent = function (_a) {
    var label = _a.label, number = _a.number, outputValue = _a.outputValue;
    var circleRef = (0, react_1.useRef)(null);
    var textRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (circleRef.current && textRef.current) {
            updateDonut(number ? number * 0.35 : 0);
        }
    }, [number]); // Call updateDonut whenever number changes
    var updateDonut = function (progress) {
        if (circleRef.current && textRef.current) {
            var circle = circleRef.current;
            var text = textRef.current;
            var radius = circle.r.baseVal.value;
            var circumference = 2 * Math.PI * radius;
            var offset = circumference - (progress / 100) * circumference;
            circle.style.strokeDasharray = progress + ", 1000";
            text.textContent = (progress / 0.349).toFixed(0) + "%";
        }
    };
    var onClickHandler = function (val) {
        if (outputValue) {
            outputValue(val);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "DPB-container" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "donut-container", onClick: function () { return onClickHandler(label); } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "DPB-content" }, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: "donut", width: "50", height: "50" }, { children: (0, jsx_runtime_1.jsx)("circle", { ref: circleRef, className: "donut-segment", cx: "25", cy: "25", r: "20", stroke: "#f72798", strokeWidth: "5", strokeDasharray: "0, 1000" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("text", __assign({ ref: textRef, x: "50%", y: "50%", textAnchor: "middle", className: "donut-text" }, { children: "0%" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "DPB-label" }, { children: label }), void 0)] }), void 0) }), void 0));
};
exports["default"] = DProgressbarComponent;
