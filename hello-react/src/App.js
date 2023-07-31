"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TaskCard_1 = __importDefault(require("./TaskCard"));
require("./TaskCard.css");
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "flex justify-center h-screen mt-10" },
            react_1.default.createElement("div", { className: "TaskItem w-1/2 p-4 mx-2" },
                react_1.default.createElement("h1", null, "Pending"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(TaskCard_1.default, { title: "Build the website with static content", dueDate: "10th April", assigneeName: "Rohit S" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(TaskCard_1.default, { title: "Add a blog", dueDate: "22nd March", assigneeName: "Rohit M" }))),
            react_1.default.createElement("div", { className: "TaskItem w-1/2 p-4 mx-2" },
                react_1.default.createElement("h1", null, "Done"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(TaskCard_1.default, { title: "Design the mockup", completedAtDate: "10th April", assigneeName: "Rohit M" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(TaskCard_1.default, { title: "Get the approval from principal", completedAtDate: "20th April", assigneeName: "Ajay S" }))))));
}
exports.default = App;
