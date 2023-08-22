import { compareSync } from 'bcrypt';
import {NextFunction, Request, Response} from 'express';
import { MAIN_KEY } from '../config'
import {Express} from '../types'

const validateApiKey: Express.MiddleWare = async(req, res:Response, next: NextFunction) =>{
  console.log(req.headers)
  try{
    let apiKey = (req.headers['X-API-Key'] || req.headers['x-api-key']) as string;
    if (apiKey === MAIN_KEY) {
      req.isUsingMainKey = true;
      return next();
    }
    req.isUsingMainKey = false;
    return next()
    // res.status(401);
    // return res.send({ error: 'Your API key is invalid' });

  } catch(err:any){
    res.status(400);
    return res.send({ error: err.message });
  }
}

export default validateApiKey;