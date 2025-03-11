"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("config"));
const user_1 = __importDefault(require("../models/user"));
const freedom_1 = __importDefault(require("../models/freedom"));
const follower_1 = __importDefault(require("../models/follower"));
const logging = config_1.default.get('sequelize.logging') ? console.log : false;
const sequelize = new sequelize_typescript_1.Sequelize(Object.assign(Object.assign({ 
    // [ add ALL model classes you created to the array ]:
    models: [user_1.default, freedom_1.default, follower_1.default], dialect: 'mysql' }, config_1.default.get('db')), { logging }));
exports.default = sequelize;
