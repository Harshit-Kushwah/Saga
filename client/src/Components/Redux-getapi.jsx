import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Req} from '../Redux/GPD/saaction'
import Reducxpost from './Redux-Post'
import Reducdel from './Redux-Del'
import Errorhandler from './Errorhandler'
 class Reducgetg extends Component {
componentDidMount(){
   this.props.Req()
}
    render() {
    const ws=this.props.min
    //console.log(ws)
        return (
            <>
            <div className="row">
<div className="col-xl-6">
<h1>Redux Centerlize Getting Data</h1>    
                        <Errorhandler>   
        {ws.map((a,b)=>{
              return <p className="mb-1" key={b}>{a.fnm}, {a.city}</p>
          })} 
          </Errorhandler>
                        <button type="submit" onClick={this.props.Req} className="btn btn-primary">Hello</button>
</div>
<div className="col-xl-6">
    <Errorhandler>
    <Reducxpost/>
    </Errorhandler>
    </div>
    <div className="col-xl-6">
        <Errorhandler>
    <Reducdel/>
    </Errorhandler>
    </div>    
</div>
              {/* <button onClick={this.props.Fetchdata} type="submit">Click</button> */}
            </>
        )
    }
}
const statetomap=(state)=>{
    return{
        min:state.data,
        loading:false,
        err:''
    }
}
const disptoprop = {Req}
export default connect(statetomap,disptoprop)(Reducgetg)