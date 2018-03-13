import React, { Component } from 'react';

class RecursiveComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            expand:props.expand || false
        }
    }
    render(){
        if (typeof this.props.obj == "string"){
            return <img src = {this.props.obj}/>
        }
        if (Array.isArray(this.props.obj)){
            if (this.state.expand){
                return [<div onClick= {()=>this.setState({expand:false})}> Less </div>, 
                    ...this.props.obj.map(e=><RecursiveComponent obj = {e}/>)]
            }
            return <div onClick={()=>this.setState({expand:true})}> More </div>
            
        }
        
        if (this.state.expand){
            let ary = [<div onClick= {()=>this.setState({expand:false})}> Less </div>];
            for (var key in this.props.obj){
                ary.push((
                <div>
                    <h3>{key}</h3>
                    <div style= {{padding:25, border:'1px solid black'}}><RecursiveComponent obj={this.props.obj[key]}/>
                    </div>
                </div>))
            }
            return ary;
        }
        return <div onClick={()=>this.setState({expand:true})}> More {this.state.expand?"A":"B"} </div>
        
    }
}

export default RecursiveComponent;