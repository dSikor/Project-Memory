import React from 'react';
import App from '../App.js'
import '../styles/OneSquare.css';


class OneSquare extends React.Component {
  
    constructor(props)
    {
        super(props);
   
            this.state = {
                width: 60,
                height: 60,
                text: "Kafelek",
            }
    }
        
    onChange = () =>{
        this.props.ClickBut();
       
      
        // this.setState({nameGrafic:this.props.titleGrafic);
    }

    render(){

        var modalButton = {        
            backgroundImage: "url(jablko.jpg)"         
        }

        





        return(

                           
        //  <img src={this.props.titleGrafic} width={this.state.width} height={this.state.height} alt="my"/>


                <button onClick={this.onChange}>{this.props.titleGrafic}</button>



             
         
        );
    }
  
}

export default OneSquare;