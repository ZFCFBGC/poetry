import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import Tab from './tab';
import Home from './home';
import Tang from './tang';
import Song from './song';
import Autor from './autor';
import 'antd-mobile/dist/antd-mobile.css';
import PropTypes from 'prop-types';
class Poetry extends React.Component {
    constructor(){
        super();
        this.go=this.go.bind(this)
    }
    go(){
		/*
			编程式导航获取history方式
				* 利用Route渲染Index
				* 利用withRouter包装组件(推荐)
				* 利用context
		 */
		console.log('测试:',this)
		let {history} = this.props;

		// let {history} = this.context.router;

		history.push({pathname:'/search'});
		// history.replace(path);
	}
    render(){
      return <div className="homepage">
        <div className="header">
            <NavBar
                mode="light"
                leftContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.go}/>
                ]}
                rightContent={[
                    <Icon key="1" type="ellipsis" />
                ]}
            >诗词汇</NavBar>
            <Tab></Tab>
            <div className="placeholder"></div>
        </div>
        <Route path="/poetry/home" component={Home}/>
        <Route path="/poetry/tang" component={Tang}/>
        <Route path="/poetry/song" component={Song}/>
        <Route path="/poetry/autor" component={Autor}/>
    </div>
    }
}
export default Poetry;