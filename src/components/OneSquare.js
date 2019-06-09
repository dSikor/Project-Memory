import React from 'react';
import '../styles/OneSquare.css';

class OneSquare extends React.Component {
  
    constructor(props)
    {
        super(props);
   
            this.state = {
                backgroundColorButton: null,
            }
    }
        
    onChange = () =>{
        this.props.ClickBut();
        this.changeBacground();        
    }

    changeBacground(){
        this.setState({
            backgroundColorButton:this.props.titleGrafic,

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