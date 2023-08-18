import { Request } from 'express'
import { db, kx}from '../services/database'
import DataGap from '../types/dataGap.type'



class DataGapModel{
  async getMany(req?:Request): Promise<any>{
    try{
      // const connection = await db.connect()
      console.log(req.query)
      const qry = kx<DataGap>('dataGap')
                .orderBy('rid')
                .limit(10)
                .modify((queryBuilder)=>{
                  if(req.query.take){
                    const take = Number(req.query.take)
                    queryBuilder.limit(take)
                  }
                })
                .modify((queryBuilder)=>{
                  if(req.query.cursor){
                    queryBuilder.where('rid','>',req.query.cursor)
                  }
                })
                .modify((queryBuilder)=>{
                  if(req.query.PrimaryKey){
                    queryBuilder.where('PrimaryKey', req.query.PrimaryKey)
                  }
                })
                .modify((queryBuilder)=>{
                  if(req.query.DBKey){
                    queryBuilder.where('DBKey', req.query.DBKey)
                  }
                })
                

      console.log(qry.debug(true))
      return qry

    } catch(error){
      throw new Error(`Error retrieving datagap ${(error as Error).message}`)
    }
  }

  // async getManyPag
}

export default DataGapModel