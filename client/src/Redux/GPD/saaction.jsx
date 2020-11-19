import {types} from './satype'
 export const Req=(se)=>{
     return{
         type:types.send_req,
         info:se
     }
 }
 export const Succ=(dt)=>{
     return{
         type:types.send_succ,
         info:dt
     }
 }
 export const Err=(ed)=>{
     return{
         type:types.send_err,
         info:ed
     }
 }

 export const Dells=(op)=>{
     return{
         type:types.del_req,
         info:op
     }
 }
 export const update=(dt)=>{
     return{
         type:types.up_dat,
         info:dt
     }
 }
 export const Postdat=(pp)=>{
     return{
         type:types.po_dat,
         info:pp
     }
 }