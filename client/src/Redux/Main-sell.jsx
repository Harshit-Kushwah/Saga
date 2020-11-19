import {createStore,applyMiddleware} from 'redux'
import reducer from './Store-Data/Book-Red'
import reDucer1 from './GPD/GPD-Reducer'
import saga from 'redux-saga'
import rootsaga from './saga/rootsaga'
import sareducer from './GPD/sareducer'
//import Logger from 'redux-logger'
import thunk from 'redux-thunk'
const midsaga=saga()
export const data2=createStore(sareducer,applyMiddleware(midsaga))
export const data1=createStore(reDucer1,applyMiddleware(thunk))
export const store1=createStore(reducer,applyMiddleware(thunk))
midsaga.run(rootsaga)
