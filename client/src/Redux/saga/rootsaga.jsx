import {all,fork} from 'redux-saga/effects'
import { watchdat, dells, updates, postdata} from './featch'
export default function* rootsaga(){
    yield all ([
       fork(watchdat) ,
        dells(),
        updates(),
        postdata()
    ])
}