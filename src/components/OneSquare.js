import React from 'react';
import App from '../App.js'
import '../styles/OneSquare.css';

class OneSquare extends React.Component {
  
    constructor(props)
    {
        super(props);
   
            this.state = {
                
            }
    }
        
    onChange = () =>{
        this.props.ClickBut();
      
        // this.setState({nameGrafic:this.props.titleGrafic);
    }

    render(){

        return(
          
            //  <button className="button" onClick={this.onChange}>{this.state.nameGrafic}</button>     
             <button><img src={this.props.titleGrafic} alt="my" onClick={this.onChange} />  </button>
             
        );
    }
  
}

export default OneSquare;