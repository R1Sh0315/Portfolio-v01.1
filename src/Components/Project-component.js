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
var GitHub_1 = __importDefault(require("@mui/icons-material/GitHub"));
var Link_1 = __importDefault(require("@mui/icons-material/Link"));
var Code_1 = __importDefault(require("@mui/icons-material/Code"));
var Pill_Component_1 = __importDefault(require("./Pill-Component"));
var ProjectComponent = function (_a) {
    var label = _a.label, url = _a.url, isDark = _a.isDark, data = _a.data;
    console.log(data);
    var projectCard = data.map(function (el, key) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "project-card-container" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "project-header" }, { children: [(0, jsx_runtime_1.jsx)(GitHub_1["default"], { className: "git-icon " + (isDark ? "dark-mode" : "light-mode") }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "project-name-container" }, { children: el.name }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "project-body" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "project-discription" }, { children: [el.description, (0, jsx_runtime_1.jsxs)("div", __assign({ className: "link-container" }, { children: [el.link ? ((0, jsx_runtime_1.jsx)("a", __assign({ href: el.link, className: "" + (isDark ? "dark-mode" : "light-mode") }, { children: (0, jsx_runtime_1.jsx)(Link_1["default"], { className: "git-link" }, void 0) }), void 0)) : (""), el.gitLink ? ((0, jsx_runtime_1.jsx)("a", __assign({ href: el.gitLink, className: "" + (isDark ? "dark-mode" : "light-mode") }, { children: (0, jsx_runtime_1.jsx)(Code_1["default"], { className: "source-code" }, void 0) }), void 0)) : (""), el.figma ? ((0, jsx_runtime_1.jsx)("a", __assign({ href: el.figma, className: "" + (isDark ? "dark-mode" : "light-mode") }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "figma-icon" }, { children: "Figma" }), void 0) }), void 0)) : ("")] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "skills-pill-container" }, { children: el === null || el === void 0 ? void 0 : el.skills.map(function (skill) { return ((0, jsx_runtime_1.jsx)(Pill_Component_1["default"], { label: skill }, void 0)); }) }), void 0)] }), void 0) }), void 0)] }), key)); });
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "project-contianer" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "label-container" }, { children: [(0, jsx_runtime_1.jsx)(Label_Shadow_1["default"], { isDark: isDark, label: label }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "git-container" }, { children: ["GitLink", (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://github.com/R1Sh0315" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "git-username" }, { children: "R1Sh0315" }), void 0) }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "project-content" }, { children: projectCard }), void 0)] }), void 0));
};
exports["default"] = ProjectComponent;
