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
var Buttongroup_Component_1 = __importDefault(require("./Buttongroup-Component"));
var Timeline_component_1 = __importDefault(require("./Timeline-component"));
var my_json_1 = __importDefault(require("../Json/my.json"));
var bgList = ["Experience", "Qualification"];
var ExperienceComponent = function (_a) {
    var label = _a.label, isDark = _a.isDark;
    var qualificationData = my_json_1["default"].Qualification;
    var experienceData = my_json_1["default"].Experience;
    var _b = (0, react_1.useState)(0), btnGrpValue = _b[0], setBtnGrpValue = _b[1];
    var selectedValue = function (value) {
        setBtnGrpValue(value);
    };
    var experience = ((0, jsx_runtime_1.jsx)("div", __assign({ className: "exp-body" }, { children: (0, jsx_runtime_1.jsx)(Timeline_component_1["default"], { timelineType: "vertical", cell2Type: "initial", data: experienceData }, void 0) }), void 0));
    var qualification = ((0, jsx_runtime_1.jsx)("div", __assign({ className: "exp-body" }, { children: (0, jsx_runtime_1.jsx)(Timeline_component_1["default"], { timelineType: "vertical", cell2Type: "initial", data: qualificationData }, void 0) }), void 0));
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "exp-contianer" }, { children: [(0, jsx_runtime_1.jsx)(Label_Shadow_1["default"], { isDark: isDark, label: label }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "exp-content" }, { children: (0, jsx_runtime_1.jsx)(Buttongroup_Component_1["default"], { isDark: isDark, bgList: bgList, outputValue: selectedValue }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "exp-body-container" }, { children: bgList[btnGrpValue] === "Qualification" ? qualification : experience }), void 0)] }), void 0));
};
exports["default"] = ExperienceComponent;
