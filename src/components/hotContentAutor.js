import React,{Component}from 'react';
import http from '../server';
class HotContentAutor extends Component{
    constructor(){
        super();
        this.state={
            res:[]
        }
    }
    componentDidMount(){
        // let content=this.props.location.search
        // let author=content.slice(6)
        // author=decodeURI(author, "utf-8"); 
        // console.log(author);
        // http.get('likePoetry?name='+author).then(res=>{
        //     console.log('数据')
        //     let poetry=res.data.result;
        //     let linshi=
        //     if(res.data.result.length>=100){
        //         for(let i=0;i<100;i++){
        //             if(poetry[i].authors==author){
        //                 this.state.data.push(poetry[i])
        //             }
        //         }
        //         this.setState({
        //             data:res.data.result.slice(0,100)
        //         })
        //     }else{
        //         this.setState({
        //             data:res.data.result
        //         })
        //     }
            
        // });
        let content=this.props.location.search
        let author=content.slice(6)
        console.log(author);
        http.get('likePoetry?name='+author).then(res=>{
            console.log('数据')
            if(res.data.result.length>=100){
                this.setState({
                    res:res.data.result.slice(0,100)
                })
            }else{
                this.setState({
                    res:res.data.result
                })
            }
        });
    }
    render(){
        let content=this.props.location.search
        let author=content.slice(6)
        author=decodeURI(author, "utf-8");
        console.log(author)
        this.state.res.map((item,idx)=>{
            if(item.auhtors==author){
                console.log(123)
            }else{
                console.log('null')
            }
        })
        return <div className="goods">
            作者
        </div>
    }
}
export default HotContentAutor