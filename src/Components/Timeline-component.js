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
var Pill_Component_1 = __importDefault(require("./Pill-Component"));
// enum Stage {
//     initial = 'INITIAL'
//     initial = 'INITIAL'
//     end = 'end'
// }
var TimeLineComponent = function (_a) {
    var timelineType = _a.timelineType, cell2Type = _a.cell2Type, istoggle = _a.istoggle, data = _a.data;
    var cell2TypeAlt = "initial";
    var cellFormating = function (val) {
        return val === data.length - 1 && val !== 0
            ? "end"
            : val === 0
                ? "initial"
                : "mid";
    };
    var tlElement = data.map(function (li, key) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "time-line-contianer " + timelineType + "-timeline" + (istoggle ? "-reverse" : "") }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "time-line-cell-1" + (istoggle ? "-reverse" : "") }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "time-line-cell-1-container" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "tl-icon-contianer" }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: li === null || li === void 0 ? void 0 : li.url, target: "_blank" }, { children: (0, jsx_runtime_1.jsx)("img", { className: "tl-icon", src: li === null || li === void 0 ? void 0 : li.icon, alt: "test" }, void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "tl-com-ins-name" }, { children: (li === null || li === void 0 ? void 0 : li.companyName) || (li === null || li === void 0 ? void 0 : li.collegeName) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "tl-year-container" }, { children: li === null || li === void 0 ? void 0 : li.yearOfWork }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "time-line-cell-2" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: cellFormating(key) + "-stage " + cellFormating(key) }, { children: [(0, jsx_runtime_1.jsx)("div", { className: cellFormating(key) + "-stage-" + (cellFormating(key) == "initial"
                                ? "no-dash"
                                : cellFormating(key) == "mid"
                                    ? "dash"
                                    : "dash") }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: cellFormating(key) + "-stage-core" }, { children: (0, jsx_runtime_1.jsx)("div", { className: "core" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", { className: cellFormating(key) + "-stage-" + (cellFormating(key) == "initial"
                                ? "dash"
                                : cellFormating(key) == "mid"
                                    ? "dash"
                                    : "no-dash") }, void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "time-line-cell-3" + (istoggle ? "-reverse" : "") }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "time-line-cell-3-container" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "tl-qul-des" }, { children: (li === null || li === void 0 ? void 0 : li.designation) || (li === null || li === void 0 ? void 0 : li.qualificationIn) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "tl-work-dis" }, { children: li === null || li === void 0 ? void 0 : li.workDiscription }), void 0), (li === null || li === void 0 ? void 0 : li.certificate) ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: "tl-certificate-contianer" }, { children: li === null || li === void 0 ? void 0 : li.certificate.map(function (item, key) { return ((0, jsx_runtime_1.jsx)(Pill_Component_1["default"], { label: item.name, url: item.url }, key)); }) }), void 0)) : ("")] }), void 0) }), void 0)] }), key)); });
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: tlElement }, void 0);
};
exports["default"] = TimeLineComponent;
