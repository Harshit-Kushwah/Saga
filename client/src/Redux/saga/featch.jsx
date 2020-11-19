import {call,put,takeEvery} from 'redux-saga/effects'
import { Succ, Err} from '../GPD/saaction'
import {types} from '../GPD/satype'
import axios from 'axios'
import $ from 'jquery'
function* postd(action){
    try{
        const { info } = action
        const df=yield call(()=>axios.post('/post',info))
        $("#loader").css({ "display": "flex" })
        $("#root").addClass("is_blir")
if(df.data==="Post"){
    $("#loader").removeAttr("style")
    $("#root").removeClass("is_blir") 
    const dat = yield call(() => axios.get('/get'))
    yield put(Succ(dat.data))
}
else if (df.data === "Error") {
    $("#loader").removeAttr('style')
    $("#root").removeClass("is_blir")
    alert("Error in updateing")
}
    }
    catch (er) {
        yield put(Err(er))
    }
}

function* updateq(action){
    try{
const{info}=action
//console.log(info.id)
        yield call(()=>axios.put(`/update/${info.id}`,info))
        const dat = yield call(() => axios.get('/get'))
        yield put(Succ(dat.data))
    }
    catch (er) {
        yield put(Err(er))
    }
}

function* deldata(action){
    try{
        const{info}=action
        //console.log(info)
const at=yield call(()=>axios.delete(`/del/${info}`))
if(at.data==="del"){
    const dat = yield call(() => axios.get('/get'))
    yield put(Succ(dat.data))
}
    }
    catch (er){
        yield put(Err(er))
    }
}

function* getdata(action){
    try{
const dat=yield call(()=>axios.get('/get'))
yield put(Succ(dat.data))
    }
    catch(err){
yield put(Err(err))
    }
}

export function* watchdat(){
    yield takeEvery(types.send_req,getdata)
}
export function* dells() {
    yield takeEvery(types.del_req, deldata)
}
export function* updates() {
    yield takeEvery(types.up_dat, updateq)
}
export function* postdata() {
    yield takeEvery(types.po_dat, postd)
}
