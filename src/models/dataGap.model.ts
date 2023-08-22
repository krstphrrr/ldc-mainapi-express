import { Request } from 'express'
import { db, kx_res, kx_unres}from '../services/database'
import DataGap from '../types/dataGap.type'
import knex_helper from '../services/optionalparams'
import {Express} from '../types'



class DataGapModel{
  async getMany(req?:Request): Promise<any>{
    let dbuser 
    console.log(req)
    // console.log(req.headers['x-api-key']===undefined)
    // switch(){
    //   case "main_key":{

    //   }
    //   case undefined:{

    //   }
    // }
    try{
      let qry = kx_res<DataGap>('dataGap')
                .orderBy('rid')

      const temp_qry = knex_helper(qry, req)
      // console.log(temp_qry.debug(true))
      return temp_qry

    } catch(error){
      throw new Error(`Error retrieving datagap ${(error as Error).message}`)
    }
  }

  

  // async getManyPag
}

export default DataGapModel