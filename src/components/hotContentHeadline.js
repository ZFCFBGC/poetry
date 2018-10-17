import React,{Component}from 'react';
import PropTypes from 'prop-types';
import http from '../server';
import {Route,Link,NavLink,Redirect} from 'react-router-dom';
import HotContentHeadline from './hotContentHeadline';
import HotContentText from './hotContentText';
import HotContentAll from './hotContentAll';
import HotContentAutor from './hotContentAutor';
class HotContent extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            goods:[],
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
    componentWillMount() {
        let title=this.props.location.search.slice(6)
        this.setState({
            name:title
        })
    }
    componentDidMount() {
        http.get('likePoetry?name='+this.state.name).then(res=>{
     
            let data=res.data.result;
            // console.log(data);
            this.setState({
              goods:data,
              status:true
          })
        })
    }
    goHome(){
        let {history} = this.props;
		history.push({pathname:'/poetry/home'});
    }
    render(){
        return  <div className="hotContent">
            <div className="searchHeader">
                <div className="searchLeft" onClick={this.goHome.bind(this)}>
                    &lt;
                </div>
                <div className="searchRight">
                    <input type="text" placeholder="请输出关键字"/>
                    <span className="btn">搜索</span>
                </div>
            </div>
            <div className="links">
                <ul>
                    {this.state.menu.map((item,idx)=>{
                        return <li key={idx}>
                            <NavLink key={idx} to={{
                                pathname:item.path,
                                state:this.state.goods,
                                pramas:this.state.goods,
                                search:this.props.location.search
                            }} activeStyle={{color:'#FF00FF',fontWeight:'bold',}}>
                                {item.text}
                            </NavLink>
                        </li>
                    })}
                </ul>
            </div>
            <Route path="/hotContent/all" component={HotContentAll}/>
            <Route path="/hotContent/headline" component={HotContentHeadline}/>
            <Route path="/hotContent/autor" component={HotContentAutor}/>
            <Route path="/hotContent/text" component={HotContentText}/>
            <Redirect to={"/hotContent/all"+this.props.location.search}/>
        </div>
    }
}
// export default HotContent;