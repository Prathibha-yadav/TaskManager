"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./TaskCard.css");
var TaskCard = function (props) {
    return (react_1.default.createElement("div", { className: "TaskItem" },
        react_1.default.createElement("h2", { className: "text-xl font-bold" }, props.title),
        props.completedAtDate ? (react_1.default.createElement("p", null,
            "Completed on: ",
            props.completedAtDate)) : (react_1.default.createElement("p", null,
            "Due on: ",
            props.dueDate)),
        react_1.default.createElement("p", null,
            "Assignee: ",
            props.assigneeName)));
};
exports.default = TaskCard;
