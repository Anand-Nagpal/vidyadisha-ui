import React from "react"
import Login from "./Login"
import HomePage from "./../homepage/HomePageComponent"


class LoginComponent extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            username: "",
            password: "",
            loginsuccess:false,
        };
    }

    login = (e) => {
        e.preventDefault();
        //window.confirm("Hello I will login!!" + this.state.username);
        fetch('http://vidyadisha.herokuapp.com/login/admin/password')
        .then((response) => { 
            if(!response.ok){
                throw new Error(response.status);
            }
            else 
            {
                return response.json();
            }
        }).then((data) => {
           
            this.setState({ loginsuccess: true });
          }) 
        .catch((error) => {
            console.log('error: ' + error);
            window.confirm("Login Failure!!")
            this.setState({ loginsuccess: true });
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    render(){
        
        return (
            <div>
            {this.state.loginsuccess ? 
            <HomePage/> :
            <Login 
                login={this.login}
                loginDetails={this.state}
                handleChange={this.handleChange}
            />
            }
            </div>
        )
    }
    
}

export default LoginComponent;