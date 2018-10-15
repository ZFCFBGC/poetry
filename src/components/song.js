import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import http from '../server';
class Song extends Component {
  constructor() {
      super();
      this.state={
          goods:[],
          status:false
      }
  }
  // componentWillMount(){
   
  // }
  componentDidMount() {
    http.get('getSongPoetry?page=1&count=100').then(res=>{
        let data=res.data.result;
        console.log(data);
        this.setState({
          goods:data,
          status:true
        })
    }) 
  }
  go(res,authors){
		/*
			编程式导航获取history方式
				* 利用Route渲染Index
				* 利用withRouter包装组件(推荐)
				* 利用context
		 */
		console.log('测试:',this)
		let {history} = this.props;

		// let {history} = this.context.router;

		history.push({pathname:'/detail',search:'?title='+res+'&author='+authors});
		// history.replace(path);
	}
  render() {
    console.log("111",this.state.goods)
    return <div className="song">
          {
            this.state.goods.map((item,idx)=>{
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
            })
          }
    </div>
  }
}


export default Song