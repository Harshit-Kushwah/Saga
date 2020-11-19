import {types} from './satype'
 const intstate={
     loading:false,
     data:[],dell:[],
     err:''
 }

const sareducer=(state=intstate,action)=>{
    switch(action.type){
case types.send_req:
return{
    ...state,
    loading:true,
    err:''
}
case types.send_succ:return{
    ...state,
    loading:false,
data:action.info,
err:''
}
case types.send_err:return{
    ...state,
    loading:false,
    data:'',
    err:action.info
}
case types.del_req:return{
    ...state,
    loading:false,
    dell:action.info,
    err:''
}
case types.up_dat:return{
    ...state,
    loading:false,
    dell:action.info,
    err:''
}
case types.po_dat:return{
    ...state,
    loading:false,
    dell:action.info,
    err:''
}
default:return state
    }
}

export default sareducer;