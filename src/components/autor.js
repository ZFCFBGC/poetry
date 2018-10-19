import React,{Component}from 'react';
import axios from 'axios';
export default class Autor extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            array:[]
        }
    }
    componentDidMount() {
        axios.get('./static/portry.json').then(res=>{
            // let arr=res.data.content.split('|');
            // console.log('123',res.data);
            this.setState({
                data:res.data,
            })
        }) 
    }
    render(){
        console.log(this.state.data)
        return <div className="more">
            {this.state.data.map((item,idx)=>{
                return <div className="comment" key={idx}>
                    <h3>{item.name}</h3>
                    <div className="content">{item.content}</div>
                    <div className="author">{item.authors}</div>
                    <div className="like">❤<span>{item.lickcnt}</span></div>
                </div>
            })}
        </div>
    }
}