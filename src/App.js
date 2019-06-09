import React from 'react';
import './styles/App.css';
import DescribeComponent from './components/DescribeComponent';
import OneSquare from './components/OneSquare';


class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      contentHello:"Spróbuj znaleść pasujące elementy. Zrób to jak najszybciej !!!",
      contentTiles: Array(12).fill(null), 
      colorOfTiles: ['red','blue','yellow','green','black','orange'],
      contentTilesChosen: Array(12).fill(null),
      counterClick:0,
      elementFirst:null,
      elementSecond:null,
      indexFirst:null,
      indexSecond:null,
    }
    this.randomItems=this.randomItems.bind(this);
    this.randomItems();
  }

  handleClick(i) {

       var firstChosenElement=this.state.elementFirst;
       var secondChosenElement=this.state.elementSecond; 
       var indexFirstChosen=this.state.indexFirst; 
       var indexSecondChosen=this.state.indexSecond;
       var actualClickNumber=this.state.counterClick;
       const squares = this.state.contentTilesChosen.slice();

      if(firstChosenElement!=null && secondChosenElement!=null)
      {
        if(firstChosenElement===secondChosenElement)
        {
          firstChosenElement=null;
          secondChosenElement=null;
          indexFirstChosen=null;
          indexSecondChosen=null;
        }else
        {
          squares[indexFirstChosen]=null;
          squares[indexSecondChosen]=null;
          firstChosenElement=null;
          secondChosenElement=null;
          indexFirstChosen=null;
          indexSecondChosen=null;
        }
      }

      if(this.state.counterClick===0)
      {
        squares[i] = this.state.contentTiles[i];
        actualClickNumber+=1;
        firstChosenElement=this.state.contentTiles[i];
        indexFirstChosen=i;   

      }else
      {
        squares[i] = this.state.contentTiles[i];
        actualClickNumber=0;   
        secondChosenElement=this.state.contentTiles[i];
        indexSecondChosen=i; 
      }

      this.setState({
        contentTilesChosen: squares,
        counterClick:actualClickNumber,
        elementFirst:firstChosenElement,
        indexFirst:indexFirstChosen,
        elementSecond:secondChosenElement,
        indexSecond:indexSecondChosen,        
      });
  }

  changeGameStan(i)
  {
    this.handleClick(i);
  } 

  randomItems(){
    var indexRandom;   
    this.state.colorOfTiles.forEach(element => {
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
   
    return(     
        <div id="game_board">
             <DescribeComponent describe={this.state.contentHello}/>
             <div id="game_board_contener">
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
export default App;
