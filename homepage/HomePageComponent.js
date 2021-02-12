import React from "react"


class HomePageComponent extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            username: "",
            password: ""
        };
    }

    
    render(){
        return (
            <div>Welcome to VidyaDisha Home Page....</div>            
        )
    }
    
}

export default HomePageComponent;