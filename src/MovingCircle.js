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
var gsap_1 = __importDefault(require("gsap"));
var MovingCircle = function () {
    var circleRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var circle = circleRef.current;
        // ease: "power2.inOut",
        if (circle) {
            var onMouseMove_1 = function (e) {
                gsap_1["default"].to(circle, {
                    x: e.clientX - circle.clientWidth / 2,
                    y: e.clientY - circle.clientHeight / 2
                });
            };
            window.addEventListener("mousemove", onMouseMove_1);
            return function () {
                // Remove the event listener when the component unmounts
                window.removeEventListener("mousemove", onMouseMove_1);
            };
        }
    }, [circleRef]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "moving-circle-container" }, { children: (0, jsx_runtime_1.jsx)("div", { ref: circleRef, className: "moving-circle" }, void 0) }), void 0));
};
exports["default"] = MovingCircle;
