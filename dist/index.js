"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
// internal modules 
const router_1 = require("./router");
const database_1 = __importDefault(require("./services/database"));
// import { isProduction } from '../../config';
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
// test db 
database_1.default.connect().then(client => {
    return client
        .query('select NOW();')
        .then((res) => {
        client.release();
        console.log(res.rows);
    }).catch(err => {
        client.release();
        console.log(err.stack);
    });
});
app.use('/api/v1', router_1.router);
app.listen(process.env.PORT || 9044, () => {
    console.log(`[App]: Server listening on 9044`);
});
