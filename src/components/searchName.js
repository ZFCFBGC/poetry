import React,{Component}from 'react';
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
    search(){
        // var inpVal = this.input.value;这里的inpval就是input输入的值
        let {history} = this.props;
        history.push({pathname:'/hotContent',search:'?name='+this.input.value});
    }

    goHome(){
        let {history} = this.props;
		history.push({pathname:'/poetry/home'});
    }
    render(){
        return  <div>
            <div className="searchHeader">
                <div className="searchLeft" onClick={this.goHome.bind(this)}>
                    &lt;
                </div>
                <div className="searchRight">
                    <input type="text" placeholder="请输出关键字" ref={input => this.input = input}/>
                    <span className="btn" onClick={this.search.bind(this)}>搜索</span>
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