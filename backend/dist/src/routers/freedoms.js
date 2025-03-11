"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multerConfig_1 = __importDefault(require("../../config/multerConfig"));
const controller_1 = require("../controllers/freedoms/controller");
const router = express_1.default.Router();
router.get("/", controller_1.getFreedoms);
router.post("/", multerConfig_1.default.single("file"), controller_1.addFreedom);
exports.default = router;
