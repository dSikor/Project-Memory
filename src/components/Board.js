import React from 'react';
import OneSquare from './OneSquare';


class Board extends React.Component {


    render(){    
        return(

            <div>
                <div>
                    <OneSquare idElement={1} graf={this.props.grafTable[0]} myFun={this.props.handFun} rif={this.props.at}/>
                    {/* <OneSquare idElement={2} graf={this.props.grafTable[1]}/>
                    <OneSquare idElement={3} graf={this.props.grafTable[2]}/> */}
                </div>

                <div>
                    {/* <OneSquare idElement={4} graf={this.props.grafTable[3]}/>
                    <OneSquare idElement={5} graf={this.props.grafTable[4]}/>
                    <OneSquare idElement={6} graf={this.props.grafTable[5]}/> */}
                </div>

                <div>
                    {/* <OneSquare idElement={7} graf={this.props.grafTable[6]}/>
                    <OneSquare idElement={8} graf={this.props.grafTable[7]}/>
                    <OneSquare idElement={9} graf={this.props.grafTable[8]}/> */}
                </div>
                <div>
                    {/* <OneSquare idElement={10} graf={this.props.grafTable[9]}/>
                    <OneSquare idElement={11} graf={this.props.grafTable[10]}/>
                    <OneSquare idElement={12} graf={this.props.grafTable[11]}/> */}
                </div>
            </div>
        );
        
    }   
}

export default Board;