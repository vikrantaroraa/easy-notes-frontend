import React, {Component} from 'react';
// import HiddenNavigationBar from './components/HiddenNavigationBar';
import Header from '../components/Header'
import Body from '../components/Body';
import UserSignupForm from '../components/UserSignupForm'
import UserLoginForm from '../components/UserLoginForm';
import CreateNewGroupForm from '../components/CreateNewGroupForm';
// import './App.css'


class LandingPage extends Component {

 constructor(){
   super();
   this.state ={
     signup_form_is_visible:false,
     login_form_is_visible:false,
     create_new_group_form_is_visible:false,
   }
 }

 toggleSignupForm =()=>{
   this.setState((prevState)=>({
     signup_form_is_visible: !prevState.signup_form_is_visible
   }))
 }

 toggleLoginForm =()=>{
  this.setState((prevState)=>({
    login_form_is_visible: !prevState.login_form_is_visible
  }))
}


toggleCreateNewGroupForm =()=>{
  this.setState((prevState)=>({
    create_new_group_form_is_visible: !prevState.create_new_group_form_is_visible
  }))
}



componentDidMount(){
  console.log(JSON.stringify(this.props));
}

  render(){
    return (

      <div className="app-container">

        <Header toggleSignupForm={this.toggleSignupForm} toggleLoginForm={this.toggleLoginForm} toggleCreateNewGroupForm = {this.toggleCreateNewGroupForm} />

		    <Body/>

      {this.state.signup_form_is_visible?<UserSignupForm toggleSignupForm = {this.toggleSignupForm} />:null}

      {this.state.login_form_is_visible?<UserLoginForm history={this.props.history} toggleLoginForm = {this.toggleLoginForm} />:null}
    
      {this.state.create_new_group_form_is_visible?<CreateNewGroupForm toggleCreateNewGroupForm = {this.toggleCreateNewGroupForm} />:null}
        
	    </div>

    );
  }
}
export default LandingPage;