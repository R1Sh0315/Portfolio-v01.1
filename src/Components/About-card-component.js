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
var SchoolOutlined_1 = __importDefault(require("@mui/icons-material/SchoolOutlined"));
var MailOutline_1 = __importDefault(require("@mui/icons-material/MailOutline"));
var PersonOutline_1 = __importDefault(require("@mui/icons-material/PersonOutline"));
var LocationSearching_1 = __importDefault(require("@mui/icons-material/LocationSearching"));
var Label_Shadow_1 = __importDefault(require("./Label-Shadow"));
var Display_word_Component_1 = __importDefault(require("./Display-word-Component"));
// import resume from '../utility/files/18JAN24.pdf'
var my_json_1 = __importDefault(require("../Json/my.json"));
var Note_component_1 = __importDefault(require("./Note-component"));
var AboutCardComponent = function (_a) {
    var isDark = _a.isDark;
    var _b = (0, react_1.useState)(""), toDisplay = _b[0], setDisplay = _b[1];
    var wordsRef = (0, react_1.useRef)(["Developer.", "Creater.", "Designer."]); // Ref to maintain array reference
    var words = ["Developer", "Creater", "Designer"];
    (0, react_1.useEffect)(function () {
        function wordList(wordArr) {
            var idx = 0;
            function displayWord() {
                setDisplay(wordArr[idx]);
                idx = (idx + 1) % wordArr.length;
                setTimeout(displayWord, 5000);
            }
            displayWord();
        }
        wordList(wordsRef.current); // Access words array from ref
    }, []);
    var handleDownload = function () {
        var resume = my_json_1["default"].ResumePath;
        var link = document.createElement("a");
        link.href = resume;
        link.download = "rishiekshResume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.open(resume, "_blank");
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "about-card-container" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "about-card-title" }, { children: (0, jsx_runtime_1.jsx)(Label_Shadow_1["default"], { isDark: isDark, label: "About" }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "about-me " + (isDark ? "am-dark" : "am-light") }, { children: ["I'm ", (0, jsx_runtime_1.jsx)("span", __assign({ className: "ac-name" }, { children: " Rishikesh Bhalekar " }), void 0), " a web & applications", (0, jsx_runtime_1.jsx)(Display_word_Component_1["default"], { words: words }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "about-card-detail-container" }, { children: (0, jsx_runtime_1.jsx)(Note_component_1["default"], { isDark: isDark, description: "I'm a professional web designer, My motive is to build the best web\r\n        design with all my years of experience and efforts." }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "about-in-detail" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "row-1" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "person-degree" }, { children: [(0, jsx_runtime_1.jsx)(SchoolOutlined_1["default"], { className: "acc-icon" }, void 0), (0, jsx_runtime_1.jsx)("strong", { children: " Degree :" }, void 0), " B.E Mechanical"] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "person-mail" }, { children: [(0, jsx_runtime_1.jsx)(MailOutline_1["default"], { className: "acc-icon" }, void 0), (0, jsx_runtime_1.jsx)("strong", { children: "Email :" }, void 0), "rishikeshbhalekar6@gmail.com"] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "row-2" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "person-age" }, { children: [(0, jsx_runtime_1.jsx)(PersonOutline_1["default"], { className: "acc-icon" }, void 0), (0, jsx_runtime_1.jsx)("strong", { children: " Age : " }, void 0), " 26"] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "person-location" }, { children: [(0, jsx_runtime_1.jsx)(LocationSearching_1["default"], { className: "acc-icon" }, void 0), (0, jsx_runtime_1.jsx)("strong", { children: " Location :" }, void 0), " Pune, India. 410506"] }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ onClick: handleDownload, className: "download-resume" }, { children: "Download CV" }), void 0)] }), void 0));
};
exports["default"] = AboutCardComponent;
