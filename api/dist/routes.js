"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var MovieController_1 = __importDefault(require("./app/controllers/MovieController"));
var routes = express_1.Router();
routes.get('/filmes/:word', MovieController_1.default.sortMovie);
exports.default = routes;
