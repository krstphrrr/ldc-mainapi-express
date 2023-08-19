import { Request } from 'express'
import { db, kx}from '../services/database'
import DataGap from '../types/dataGap.type'
import knex_helper from '../services/optionalparams'




class DataGapModel{
  async getMany(req?:Request): Promise<any>{

    try{
      let qry = kx<DataGap>('dataGap')
                .orderBy('rid')

      const temp_qry = knex_helper(qry, req)
      console.log(temp_qry.debug(true))
      return temp_qry

    } catch(error){
      throw new Error(`Error retrieving datagap ${(error as Error).message}`)
    }
  }

  

  // async getManyPag
}

export default DataGapModel