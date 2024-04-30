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
var DisplayWordsComponent = function (_a) {
    var words = _a.words;
    var _b = (0, react_1.useState)(""), toDisplay = _b[0], setDisplay = _b[1];
    (0, react_1.useEffect)(function () {
        var wordIndex = 0;
        var charIndex = 0;
        var displayInterval;
        var displayWord = function () {
            if (charIndex <= words[wordIndex].length) {
                console.log(words[wordIndex].slice(0, charIndex));
                setDisplay(words[wordIndex].slice(0, charIndex));
                charIndex++;
            }
            else {
                console.log('removing init');
                clearInterval(displayInterval);
                setTimeout(removeWord, 1000);
                // displayInterval = setInterval(removeWord, 1000);
            }
        };
        var removeWord = function () {
            if (charIndex >= 0) {
                console.log(words[wordIndex].slice(0, charIndex));
                setDisplay(words[wordIndex].slice(0, charIndex));
                charIndex--;
            }
            else {
                // Move to the next word
                console.log('move to next word');
                wordIndex = (wordIndex + 1) % words.length;
                // Reset charIndex to the beginning of the next word
                charIndex = 0;
                // Start displaying the next word
                displayInterval = setInterval(displayWord, 1000);
            }
        };
        // Start displaying the first word
        displayInterval = setInterval(displayWord, 1000);
        // Cleanup function
        return function () { return clearInterval(displayInterval); };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "display-container" }, { children: toDisplay }), void 0));
};
exports["default"] = DisplayWordsComponent;
