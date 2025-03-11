"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFreedoms = getFreedoms;
exports.addFreedom = addFreedom;
const freedom_1 = __importDefault(require("../../models/freedom"));
async function getFreedoms(req, res, next) {
    try {
        const freedoms = await freedom_1.default.findAll();
        res.status(200).json(freedoms);
    }
    catch (error) {
        next(error);
    }
}
async function addFreedom(req, res, next) {
    var _a;
    try {
        const { vacationDestination, description, start, end, price } = req.body;
        const imgFreedom = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename) || "default.jpg";
        const newFreedom = await freedom_1.default.create({ vacationDestination, description, start, end, price, imgFreedom });
        res.status(201).json(newFreedom);
    }
    catch (error) {
        next(error);
    }
}
