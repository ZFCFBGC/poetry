import React,{Component}from 'react';
import {Route} from 'react-router-dom';
import SearchName from './searchName'

export default class Autor extends Component{
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    render(){
        return <div className="goods">
            <Route path="/search" component={SearchName}/>
        </div>
    }
}