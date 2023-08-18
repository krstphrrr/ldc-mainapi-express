"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataGap = void 0;
// import {pool} from '../services/database'
const getDataGap = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const q = `SELECT * from public_test."dataGap" limit 10`;
    // pool.query(q, (error,results)=>{
    //   if(error){
    //     throw error
    //   }
    //   res.status(200).json(results.rows)
    // })
});
exports.getDataGap = getDataGap;
