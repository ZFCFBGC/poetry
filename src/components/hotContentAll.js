import React,{Component}from 'react';
import http from '../server';
class HotContentAll extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let content=this.props.location.search
        let author=content.slice(6)
        console.log(author);
        http.get('likePoetry?name='+author).then(res=>{
            console.log('数据')
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
    render(){
        return <div className="goods">
        
            {
                this.state.data.map((item,idx)=>{
                return <div key={idx} style={{ padding: '0 15px' }}>
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
export default HotContentAll