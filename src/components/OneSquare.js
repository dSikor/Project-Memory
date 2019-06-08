import React from 'react';
import App from '../App.js'
import '../styles/OneSquare.css';
// import { url } from 'inspector';


class OneSquare extends React.Component {
  
    constructor(props)
    {
        super(props);
   
            this.state = {
                backgroundI: null,
            }
    }
        
    onChange = () =>{
        this.props.ClickBut();
        this.changeBacground();        
    }

    changeBacground(){
        this.setState({
            backgroundI:this.props.titleGrafic,

        });

    }

    render(){

        var color = this.props.titleGrafic;
        return(
                <button className="button" style={{backgroundColor:color}} onClick={this.onChange}></button> 
        );
    }
  
}

export default OneSquare;