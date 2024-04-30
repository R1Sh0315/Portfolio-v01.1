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
require("./styles.css");
var About_Component_1 = __importDefault(require("./Components/About-Component"));
var About_card_component_1 = __importDefault(require("./Components/About-card-component"));
var Skill_Component_1 = __importDefault(require("./Components/Skill-Component"));
// import backPic from "./utility/background.svg";
var Experience_Component_1 = __importDefault(require("./Components/Experience-Component"));
var Toggle_btn_1 = __importDefault(require("./Components/Toggle-btn"));
var Achivements_component_1 = __importDefault(require("./Components/Achivements-component"));
var my_json_1 = __importDefault(require("./Json/my.json"));
var Project_component_1 = __importDefault(require("./Components/Project-component"));
function App() {
    var handleClick = function (action) {
        console.log(action);
        return "" + action;
    };
    var navList = ["About", "Skills", "Experience", "Project", "Resume"];
    var _a = (0, react_1.useState)(false), isDarkMode = _a[0], setDarkMode = _a[1];
    var achivementData = my_json_1["default"].Achievement;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "App " + (isDarkMode ? "dark-mode" : "light-mode") }, { children: [(0, jsx_runtime_1.jsx)(Toggle_btn_1["default"], { label: "Dark Mode", toToggle: isDarkMode, isDark: setDarkMode }, void 0), (0, jsx_runtime_1.jsx)(About_Component_1["default"], {}, void 0), (0, jsx_runtime_1.jsx)(About_card_component_1["default"], { isDark: isDarkMode }, void 0), (0, jsx_runtime_1.jsx)(Skill_Component_1["default"], { isDark: isDarkMode, label: "Skills" }, void 0), " ", (0, jsx_runtime_1.jsx)(Experience_Component_1["default"], { isDark: isDarkMode, label: "Experience & Qualification" }, void 0), (0, jsx_runtime_1.jsx)(Project_component_1["default"], { label: "My Project", isDark: isDarkMode, data: my_json_1["default"].Pojects }, void 0), (0, jsx_runtime_1.jsx)(Achivements_component_1["default"], { data: achivementData, isDark: isDarkMode, label: "Licenses & certifications" }, void 0)] }), void 0));
}
exports["default"] = App;
