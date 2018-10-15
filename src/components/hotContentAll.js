import React,{Component}from 'react';
class HotContentAll extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){

        this.setState({
            data:this.props.location.state
        })
    }
    render(){
       console.log('123',this.props)
        return <div className="goods">
        123
            {
                // this.state.data.map((item,idx)=>{
                // return <div key={idx} style={{ padding: '0 15px' }}>
                //     <div
                //     style={{
                //         padding:'5px 0',
                //         fontSize:'18px',
                //         fontWeight:'bold'
                //     }}
                //     >{item.title}</div>
                //     <div style={{paddingBottom:'5px'}}><span style={{ fontSize: '16px',color:'#FFE599'}}>{item.authors}</span></div>
                //     <div style={{padding:'5px 0',borderBottom:'1px solid #ddd'}}>
                //         <div style={{ marginBottom: '8px',fontSize:'16px',lineHeight:'20px' }}>{item.content.split('。')[0]}。</div>
                //     </div>
                // </div>
                // })
            }    
        </div>
    }
}
export default HotContentAll