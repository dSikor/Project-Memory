import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import DescribeComponent from './components/DescribeComponent';
import OneSquare from './components/OneSquare';


class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      contentHello:"Spróbuj znaleść pasujące elementy. Zrób to jak najszybciej !!!",
 
      contentTiles: Array(12).fill(null), 
      nazwyGrafik: ['red','blue','yellow','green','black','orange'],
      contentTilesChosen: Array(12).fill(null),

      counterClick:0,

      elementFirst:null,
      elementSecound:null,
      indexFirst:null,
      indexSeound:null,
     
    


      chooseElement: null,


    }

    this.randomItems=this.randomItems.bind(this);
   

    this.randomItems();
  }

handleClick(i) {

       var PierwszyElement=this.state.elementFirst;
       var DrugiElement=this.state.elementSecound; 
       var IndexPier=this.state.indexFirst; 
       var IndexDrug=this.state.indexSeound;

       const squares = this.state.contentTilesChosen.slice();

      if(PierwszyElement!=null && DrugiElement!=null)
      {
       
        if(PierwszyElement===DrugiElement)
        {
          PierwszyElement=null;
          DrugiElement=null;
          IndexPier=null;
          IndexDrug=null;
        }else
        {
          squares[IndexPier]=null;
          squares[IndexDrug]=null;

          PierwszyElement=null;
          DrugiElement=null;
          IndexPier=null;
          IndexDrug=null;
        }
      }


          if(this.state.counterClick===0)
          {
             
          squares[i] = this.state.contentTiles[i];

          var actualClickNumber=this.state.counterClick;
          actualClickNumber+=1;
          
        
         PierwszyElement=this.state.contentTiles[i];
         IndexPier=i;   

          }else
          {
           
            squares[i] = this.state.contentTiles[i];
            actualClickNumber=0;
           
            
            DrugiElement=this.state.contentTiles[i];
            IndexDrug=i; 
           

            // debugger;
          }






          this.setState({
            contentTilesChosen: squares,
            counterClick:actualClickNumber,
            elementFirst:PierwszyElement,
            indexFirst:IndexPier,
            elementSecound:DrugiElement,
            indexSeound:IndexDrug,
                
          });
}

changeGameStan(i)
{
  this.handleClick(i);
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

export default App;
