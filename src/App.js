import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import DescribeComponent from './components/DescribeComponent';
import OneSquare from './components/OneSquare';


class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      contentHello:"Spróbuj znaleść pasujące elementy. Zrób to jak najszybciej !!!",
 
      contentTiles: Array(12).fill(null),
      nazwyGrafik: ["jablko.jpg","banan.jpg","żyrafa.jpg","koń.jpg","słoń.jpg","ryba.jpg"], 

      contentTilesChosen: Array(11).fill(null),

      isFirstClicked: true,
      currentChoseElement: null,
      previousSelectedElement: null,
      numberOfClick: 0,

    }

    this.randomItems=this.randomItems.bind(this);
    this.changeIsButtonClicked = this.changeIsButtonClicked.bind(this);

    this.randomItems();
  }

handleClick(i) {

    if(this.state.currentChoseElement!=null && this.state.previousSelectedElement!=null)
    {

      if(this.state.currentChoseElement===this.state.previousSelectedElement)
      {
        console.log("MamPare wiec zostaw odkryte kafelki ");      
      }
      else
      {
        console.log("Nie mam pary wiec zakryj kafelki");
      }

        this.setState({
          currentChoseElement: null,
          previousSelectedElement: null,
        }); 


    }
   
    const squares = this.state.contentTilesChosen.slice();
    squares[i] = this.state.contentTiles[i];
    this.setState({contentTilesChosen: squares});
   
    if(this.state.isFirstClicked)
    {
      this.setState({previousSelectedElement:this.state.contentTiles[i]});
      this.setState({isFirstClicked:false});      
     
    }
    else{
      this.setState({currentChoseElement:this.state.contentTiles[i]});
      this.setState({isFirstClicked:true}); 
    }

}

changeGameStan(i)
{
  this.handleClick(i);
} 


  changeIsButtonClicked(){

    var isClick = !(this.state.isbuttonClicked);
    this.setState({isbuttonClicked:isClick});   

  }

  randomItems(){
    var indexRandom;   
    this.state.nazwyGrafik.forEach(element => {
            
            do {

                indexRandom=Math.floor(Math.random() * this.state.contentTiles.length);
               
            } while (this.state.contentTiles[indexRandom]!=null);
                this.state.contentTiles[indexRandom]=element;

            do {
               
                indexRandom=Math.floor(Math.random() * this.state.contentTiles.length);

            } while (this.state.contentTiles[indexRandom]!=null);
                 this.state.contentTiles[indexRandom]=element;               
        });  
  }


  renderOneSquare(i){
   
    return(
        <OneSquare titleGrafic={this.state.contentTilesChosen[i]} ClickBut={()=>{this.changeGameStan(i)}} />
    );
  }

  

  render(){
    debugger;
    const stan=isCheckMach(this.state.previousSelectedElement,this.state.currentChoseElement,this.state.numberOfClick);
    
    return(
     
        <div id="game_board">
             <DescribeComponent describe={this.state.contentHello}/>
             <div>
                <div>
                    {this.renderOneSquare(0)}
                    {this.renderOneSquare(1)}
                    {this.renderOneSquare(2)}
                </div>
                <div>
                    {this.renderOneSquare(3)}
                    {this.renderOneSquare(4)}
                    {this.renderOneSquare(5)}
                </div>
                <div>
                    {this.renderOneSquare(6)}
                    {this.renderOneSquare(7)}
                    {this.renderOneSquare(8)}
                </div>
                <div>
                    {this.renderOneSquare(9)}
                    {this.renderOneSquare(10)}
                    {this.renderOneSquare(11)}
                </div>
            </div>
        </div>
    );
  }

}

function isCheckMach(firstEl ,secEl,numberClick) {
    
    if(firstEl!=null)
    {
      if(firstEl===secEl)
        {
          console.log("Wygrana");
          return true;
        }
        else
        {
          return false;
        }
    }
    
    return false;

}


export default App;
