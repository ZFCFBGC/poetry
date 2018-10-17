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
            poem:{},
            content:[]
        }
        setInterval(this.changeTime.bind(this),1000);
        this.goRhesis=this.goRhesis.bind(this)
        this.goPoem=this.goPoem.bind(this)
    }
    changeTime(){
        this.setState({
            now:this.formate(new Date())
        })
    }
    goRhesis(){
        http.get('singlePoetry').then(res=>{
            console.log(res.data.result)
            this.setState({
                rhe:res.data.result
            })
        });
    }
    goPoem(){
        http.get('recommendPoetry').then(res=>{
            console.log(res.data.result)
            let arr=res.data.result.content.split('|');
            this.setState({
                poem:res.data.result,
                content:arr
            })
        });
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
        this.goRhesis();
        this.goPoem();
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
                <div className="time">{this.state.now}</div>
                <div className="rhesis">
                    <div className="h_header"><span>名句赏析</span><span className="click" onClick={this.goRhesis}>换一换？</span></div>
                    <div className="rShow">
                        <p style={{color:'#7F7F7F'}}>{this.state.rhe.content}</p>
                        <p>出自：{this.state.rhe.origin}</p>
                        <p style={{color:'#D0BA80'}}>作者：{this.state.rhe.author}</p>
                        <p>题材：{this.state.rhe.category}</p>
                    </div>
                </div>
                <div className="poem">
                    <div className="h_header"><span>名诗赏析</span><span className="click" onClick={this.goPoem}>换一换？</span></div>
                    <div className="rShow">
                        <p style={{color:'#343434'}}>{this.state.poem.title}</p>
                        <div className="poemMain">{this.state.content.map((item,idx)=>{
                            return <span key={idx}>{item}</span>
                        })}</div>
                        
                        <p style={{color:'#D0BA80'}}>作者：{this.state.poem.authors}</p>
                    </div>
                </div>
        </div>
    }
}