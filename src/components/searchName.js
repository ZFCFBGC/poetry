import React,{Component}from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
class SearchName extends Component{
    constructor(){
        super();
        this.state = {
            data:[
                {"name":"李白"},
                {"name":"苏轼"},
                {"name":"李清照"},
                {"name":"杜甫"},
                {"name":"白居易"},
                {"name":"王维"},
                {"name":"柳永"},
                {"name":"孟浩然"},
                {"name":"杜牧"}
            ]
        };
    }
    go(res){
		/*
			编程式导航获取history方式
				* 利用Route渲染Index
				* 利用withRouter包装组件(推荐)
				* 利用context
		 */
        console.log(res)
		console.log('测试:',this)
        let {history} = this.props;
        // let {res}=this.content;
		// let {history} = this.context.router;
		history.push({pathname:'/hotContent',search:'?name='+res});
		// history.replace(path);
	}
    render(){
        return  <div>
            <div className="searchHeader">
                <div className="searchLeft">
                    &lt;
                </div>
                <div className="searchRight">
                    <input type="text" placeholder="请输出关键字"/>
                    <span className="btn">搜索</span>
                </div>
            </div>
            <div className="main">
                <h6>热门搜索</h6>
                <div className="hotName">
                    {this.state.data.map((item,idx)=>{
                        return <span key={idx} onClick={this.go.bind(this,item.name)}>
                            {item.name}
                        </span>
                    })}
                </div>
                <div>
                    没有想法？<br/>
                    您可以尝试<strong>分类浏览</strong>看看有没有您想要的？
                </div>
            </div>
        </div>
    }
}
export default SearchName;