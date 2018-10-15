import React, { Component } from 'react';
import {Route,NavLink,Switch,withRouter,Redirect} from 'react-router-dom';
import Poetry from './components/poetry';
import Search from './components/search';
import Detail from './components/detail';
import HotContent from './components/hotContent';
import 'antd-mobile/dist/antd-mobile.css';
class App extends React.Component {
    render(){
      return <div className="Poetry">
            <Switch>
                    <Route path="/poetry" component={Poetry} />
                    <Route path="/search" component={Search} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/hotContent" component={HotContent}/>
            </Switch>
    </div>
    }
}
export default App;
