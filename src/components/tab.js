import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
class Tab extends Component{
    constructor(){
        super();
        this.state={
            menu:[
                {
                    text:'首页',
                    path:'/poetry/home'
                },{
                    text:'唐诗',
                    path:'/poetry/tang'
                },{
                    text:'宋词',
                    path:'/poetry/song'
                },{
                    text:'作者',
                    path:'/poetry/autor'
                }
            ]
        };
        this.go=this.go.bind(this);

    }
    go(path){
		/*
			编程式导航获取history方式
				* 利用Route渲染Index
				* 利用withRouter包装组件(推荐)
				* 利用context
		 */
		console.log(this)
		// let {history} = this.props;

		let {history} = this.context.router;

		history.push({pathname:path});
		// history.replace(path);
	}
    render(){
        return <div className="links">
            <ul>
                {this.state.menu.map((item,idx)=>{
                    return <li key={idx}>
                        <NavLink key={idx} to={item.path} activeStyle={{color:'#3D3E39',fontWeight:'bold',}}>
                            {item.text}
                        </NavLink>
                    </li>
                })}
            </ul>
        </div>
    }
}





export default Tab;