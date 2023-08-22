import { hash } from 'bcrypt'
import {NextFunction, Request, Response} from 'express';
import { v4 as uuid } from 'uuid';

const generateApiKey = uuid;


const apiGen = async(req:Request, res:Response, next: NextFunction) =>{
  // 1. generate apikey
  const apiKey = await generateApiKey()
  try{
    res.json({test: apiKey})
  } catch {

  }

}

export default apiGen