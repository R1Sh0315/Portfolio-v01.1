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
var Label_Shadow_1 = __importDefault(require("./Label-Shadow"));
var Progress_Component_1 = __importDefault(require("./Progress-Component"));
var Dropdown_Component_1 = __importDefault(require("./Dropdown-Component"));
var DProgressbar_component_1 = __importDefault(require("./DProgressbar-component"));
var Link_1 = __importDefault(require("@mui/icons-material/Link"));
var my_json_1 = __importDefault(require("../Json/my.json"));
var SkillComponent = function (_a) {
    var label = _a.label, isDark = _a.isDark;
    var _b = (0, react_1.useState)(""), subTitle = _b[0], setSubTitle = _b[1];
    var _c = (0, react_1.useState)({ label: "", dic: "", url: "" }), subDetail = _c[0], setDetail = _c[1];
    var JData = my_json_1["default"].Discription;
    var calculateYearsAndMonths = function () {
        var currentDate = new Date();
        // Set the start date to April 2021
        var startDate = new Date("2021-04-01");
        // Calculate the difference in milliseconds
        var differenceMs = currentDate.getTime() - startDate.getTime();
        // Convert the difference to years and months
        var years = Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 365.25));
        var months = Math.floor((differenceMs % (1000 * 60 * 60 * 24 * 365.25)) /
            (1000 * 60 * 60 * 24 * 30.44));
        return { years: years, months: months };
    };
    var _d = calculateYearsAndMonths(), years = _d.years, months = _d.months;
    var arrFEData = [
        (0, jsx_runtime_1.jsx)(DProgressbar_component_1["default"], { label: "HTML", number: 75, outputValue: function (e) {
                setSubTitle(e);
                setDetail({
                    label: JData[1].label,
                    dic: JData[1].disc,
                    url: JData[1].url
                });
            } }, void 0),
        (0, jsx_runtime_1.jsx)(DProgressbar_component_1["default"], { label: "CSS", number: 75, outputValue: function (e) {
                setSubTitle(e);
                setDetail({
                    label: JData[2].label,
                    dic: JData[2].disc,
                    url: JData[2].url
                });
            } }, void 0),
        (0, jsx_runtime_1.jsx)(DProgressbar_component_1["default"], { label: "JS", number: 70, outputValue: function (e) {
                setSubTitle(e);
                setDetail({
                    label: JData[0].label,
                    dic: JData[0].disc,
                    url: JData[0].url
                });
            } }, void 0),
        (0, jsx_runtime_1.jsx)(DProgressbar_component_1["default"], { label: "ReactJs", number: 65, outputValue: function (e) {
                setSubTitle(e);
                setDetail({
                    label: JData[5].label,
                    dic: JData[5].disc,
                    url: JData[5].url
                });
            } }, void 0),
        (0, jsx_runtime_1.jsx)(DProgressbar_component_1["default"], { label: "Angular", number: 75, outputValue: function (e) {
                setSubTitle(e);
                setDetail({
                    label: JData[6].label,
                    dic: JData[6].disc,
                    url: JData[6].url
                });
            } }, void 0),
    ];
    var arrBEData = [
        (0, jsx_runtime_1.jsx)(DProgressbar_component_1["default"], { label: "nodejs", number: 50, outputValue: function (e) {
                setSubTitle(e);
                setDetail({
                    label: JData[3].label,
                    dic: JData[3].disc,
                    url: JData[3].url
                });
            } }, void 0),
        (0, jsx_runtime_1.jsx)(DProgressbar_component_1["default"], { label: "mongodb", number: 25, outputValue: function (e) {
                setSubTitle(e);
                setDetail({
                    label: JData[4].label,
                    dic: JData[4].disc,
                    url: JData[4].url
                });
            } }, void 0),
    ];
    var frontEndPbar = ((0, jsx_runtime_1.jsx)(Progress_Component_1["default"], { percentage: "72", pbLabel: "Frontend" }, void 0));
    var backEndPbar = ((0, jsx_runtime_1.jsx)(Progress_Component_1["default"], { percentage: "37.5", pbLabel: "Backend" }, void 0));
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "skill-container" }, { children: [(0, jsx_runtime_1.jsx)(Label_Shadow_1["default"], { isDark: isDark, label: label }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "skill-description" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "skill-disc-panel" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "skill-summary" }, { children: ["I'm experienced frontend developer proficient with ", years, ".", months + " ", "years of experience. Skilled in building responsive and dynamic web applications, implementing complex UI features, and optimizing performance. Strong understanding of modern web development practices, including component-based architecture, state management, and RESTful APIs. Passionate about delivering high-quality user experiences and staying updated with the latest technologies."] }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "skill-score" }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "DD-cont" }, { children: [(0, jsx_runtime_1.jsx)(Dropdown_Component_1["default"], { arr: arrFEData, label: frontEndPbar }, void 0), (0, jsx_runtime_1.jsx)(Dropdown_Component_1["default"], { arr: arrBEData, label: backEndPbar }, void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "experience-container" }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "yexp" }, { children: years }), void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "dot" }, { children: "." }), void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "mexp" }, { children: months + " " }), void 0)] }, void 0), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: "skill-ye" }, { children: "Years experience" }), void 0) }, void 0), subTitle == "" ? ("") : ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "sub-in-detail" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "Exp-sub-card-title" }, { children: [subDetail.label, " ", (0, jsx_runtime_1.jsx)("a", __assign({ href: subDetail.url, target: "_blank" }, { children: (0, jsx_runtime_1.jsx)(Link_1["default"], {}, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "Exp-sub-card-disc" }, { children: subDetail.dic }), void 0)] }), void 0))] }), void 0)] }), void 0)] }), void 0));
};
exports["default"] = SkillComponent;
