import React,{Component}from 'react';
import http from '../server';
import { Carousel, WingBlank } from 'antd-mobile';
export default class Home extends Component{
    constructor(){
        super();
        this.state={
            data:['1','2','3'],
            imgHeight:176,
            now:this.formate(new Date()),
            rhe:{
                
            },
            poem:{}
        }
        setInterval(this.changeTime.bind(this),1000)
    }
    componentWillUnmount(){
        // changeTime(()=>{
        //     this.setState({
        //         now:this.formate(new Date())
        //     })
        // })
    }
    changeTime(){
        this.setState({
            now:this.formate(new Date())
        })
    }
    formate(d){
        let year = d.getFullYear();
		let month = d.getMonth()+1;
		let date = d.getDate();
		let hours = d.getHours();
		let min = d.getMinutes();
		let sec = d.getSeconds();
		// 补0操作
		hours = hours<10 ? '0'+hours : hours;
	    min = min<10 ? '0'+min : min;
        sec = sec<10 ? '0'+sec : sec;
        return <div className="date"><span className="year">{year}-{month}-{date}</span>
           <span className="hour">{hours}:{min}:{sec}</span></div>
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['./img/001.jpg', './img/002.jpg', './img/003.jpg'],
          });
        }, 100);
        http.get('singlePoetry').then(res=>{
            console.log(res.data.result)
            this.setState({
                rhe:res.data.result
            })
        });
        http.get('recommendPoetry').then(res=>{
            console.log(res.data.result)
            this.setState({
                poem:res.data.result
            })
        });
    }
    render(){
        return <div className="banana">
                <Carousel
                autoplay={true}
                infinite
                >
                {this.state.data.map((val,idx) => (
                    <a
                    key={idx}
                    href="#"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={val}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>
                <div>{this.state.now}</div>
                <div className="rhesis">
                    <h5><span>名句赏析</span><span>换一换？</span></h5>
                    <div className="rShow">
                        <p>{this.state.rhe.content}</p>
                        <p>出自：{this.state.rhe.origin}</p>
                        <p>作者：{this.state.rhe.author}</p>
                        <p>题材：{this.state.rhe.category}</p>
                    </div>
                </div>
                <div className="poem">
                    <h5><span>名诗赏析</span><span>换一换？</span></h5>
                    <div className="rShow">
                        <p>{this.state.poem.content}</p>
                        <p>标题：{this.state.poem.title}</p>
                        <p>作者：{this.state.poem.authors}</p>
                    </div>
                </div>
        </div>
    }
}