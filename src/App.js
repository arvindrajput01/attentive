import React,{FormInput,FormButton} from "react";
import Login from "./components/Login/Login";
import {Routes,Route} from  'react-router-dom'
import Dashboard from "./components/Dashboard/Dashboard";
import NoMatch from "./components/404Page/404Page";

class App extends React.Component {
  state={
    isLog:false
  }
  handleLogin =(isLog) => this.setState({isLog});
  render(){
    const isLog =this.state.isLog;
    return (
      <div>
        
        <Routes>
          <Route exact path="/"  Component={() => !isLog ? <Login isLogin ={this.handleLogin}/> : <Dashboard/>} />
          <Route path ="*"  element ={<NoMatch/>}/>
        </Routes>
      </div>
  
    );
  }


}

export default App;
