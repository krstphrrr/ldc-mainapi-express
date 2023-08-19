import { Knex } from "knex"
import { Request } from "express"

const knex_helper = (KnexPromise:Knex.QueryBuilder, req: Request) => {
  let temp_chain = KnexPromise
  //  if there are req.queries: 
  if(Array(req.query).length>0){
    // if a take req.query is supplied (same as limit)
    if(req.query.take){
      temp_chain = temp_chain.modify((queryBuilder)=>{
        if(req.query.take){
          const take = Number(req.query.take)
          queryBuilder.limit(take)
        }
      })
      delete req.query.take
    }
    // if a cursor req.query is supplied (uses rid)
    if(req.query.cursor){
      temp_chain = temp_chain.modify((queryBuilder)=>{
        if(req.query.cursor){
          queryBuilder.where('rid','>',req.query.cursor)
        }
      })
      delete req.query.cursor
    }
    // start of handling non-pagination req.queries
    for(const i in req.query){
      // parsing required if handling multiple values per req.query
      if( (req.query[i] as string).includes(',') ){
        let queryArray = (req.query[i] as string).split(',')
        temp_chain = temp_chain.modify((queryBuilder)=>{
          if(req.query[i]){
            queryBuilder.whereIn(`${i}`, queryArray)
          }
        })
        delete req.query[i]
      }
      // single non-pagination req.queries 
      temp_chain = temp_chain.modify((queryBuilder)=>{
        if(req.query[i]){
          queryBuilder.where(`${i}`, req.query[i])
        }
      })
    }
  }

  return temp_chain
}
export default knex_helper