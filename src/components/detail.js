import React,{Component}from 'react';
import http from '../server';
export default class Autor extends Component{
    constructor(){
        super();
        this.state={
            data:{},
            abstract:[]
        }
    }
    componentDidMount() {
        let content=this.props.location.search
        let title=content.split('&')[0].slice(7)
        let authors=content.split('&')[1].slice(7)
        console.log(title,authors)
        http.get('searchPoetry?name='+title).then(res=>{
            let poetry=res.data.result;
            for(let i=0;i<poetry.length;i++){
                if(poetry[i].authors==authors){
                    this.setState({
                        data:poetry[i]
                    });
                    break;
                }
            }
        })
        http.get('searchAuthors?name='+authors).then(res=>{
            this.setState({
                abstract:res.data.result
            })
        })
    }
    render(){
        console.log('123',this.state)
        return <div className="goods">
            {this.props.location.search}
        </div>
    }
}