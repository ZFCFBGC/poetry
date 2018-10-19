import React,{Component}from 'react';
import PropTypes from 'prop-types';
import http from '../server';
import { ActivityIndicator, WingBlank} from 'antd-mobile';
class HotContent extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            data:[],
            status:true,
            menu:[
                {
                    text:'全部',
                    path:'/hotContent/all'
                },{
                    text:'标题',
                    path:'/hotContent/headline'
                },{
                    text:'作者',
                    path:'/hotContent/autor'
                },{
                    text:'原文',
                    path:'/hotContent/text'
                }
            ]
        }
    }
    componentDidMount() {
        let content=this.props.location.search
        let author=content.slice(6)
        console.log(author);
        http.get('likePoetry?name='+author).then(res=>{
            console.log('数据',res.data.result)
            if(res.data.result.length>=100){
                this.setState({
                    data:res.data.result.slice(0,100)
                })
            }else{
                this.setState({
                    data:res.data.result
                })
            } 
        });
    }
    search(){
        let author=this.input.value;
        console.log(author)
        http.get('likePoetry?name='+author).then(res=>{
            console.log('数据',res.data.result)
            if(res.data.result.length>=100){
                this.setState({
                    data:res.data.result.slice(0,100)
                })
            }else{
                this.setState({
                    data:res.data.result
                })
            } 
        });
    }
    goHome(){
        let {history} = this.props;
		history.push({pathname:'/poetry/home'});
    }
    go(res,authors){
		let {history} = this.props;
		history.push({pathname:'/detail',search:'?title='+res+'&author='+authors});
	}
    render(){
        return  <div className="hotContent">
            <div className="hotcontent_header">
                <div className="searchHeader">
                    <div className="searchLeft" onClick={this.goHome.bind(this)}>
                        &lt;
                    </div>
                    <div className="searchRight">
                        <input type="text" placeholder="请输出关键字" ref={input => this.input = input}/>
                        <span className="btn" onClick={this.search.bind(this)}>搜索</span>
                    </div>
                </div>
            </div>
            <div className="hotcontent_main">
            {
                this.state.data.length>0? this.state.data.map((item,idx)=>{
                return <div key={idx} style={{ padding: '0 15px' }} onClick={this.go.bind(this,item.title,item.authors)}>
                    <div
                    style={{
                        padding:'5px 0',
                        fontSize:'18px',
                        fontWeight:'bold'
                    }}
                    >{item.title}</div>
                    <div style={{paddingBottom:'5px'}}><span style={{ fontSize: '16px',color:'#FFE599'}}>{item.authors}</span></div>
                    <div style={{padding:'5px 0',borderBottom:'1px solid #ddd'}}>
                        <div style={{ marginBottom: '8px',fontSize:'16px',lineHeight:'20px' }}>{item.content.split('。')[0]}。</div>
                    </div>
                </div>
                }):
                <WingBlank style={{position:'fixed',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>
                        <div className="loading-example">
                            <div className="align">
                                <ActivityIndicator size="large"/>
                                <span style={{ marginTop: '10px' ,fontSize:'16px'}}>搜索中...</span>
                            </div>
                        </div>
                </WingBlank>
            } 
            </div>   
        </div>
    }
}
export default HotContent;