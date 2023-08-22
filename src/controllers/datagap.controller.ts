import {NextFunction, Request, Response} from 'express';
import DataGapModel from '../models/dataGap.model';
import {Express} from '../types'

const dataGapModel = new DataGapModel()

export const getMany: Express.MiddleWare = async(
  _: Request, 
  res: Response, 
  next: NextFunction
  ) =>{
      console.log(_)
      try{
        const datagap = await dataGapModel.getMany(_)
        
        res.json({
          status: "success",
          data: datagap,
          message: "datagap retrieval success"
        })
      } catch(error){
        next(error)
      }
}


export function apiGen(arg0: string, apiGen: any) {
  throw new Error('Function not implemented.');
}
// 