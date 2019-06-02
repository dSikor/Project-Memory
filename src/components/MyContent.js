import React from 'react';

class MyContent extends React.Component {

    render(){
        return(
            <div>
                 <input type="text" value={this.props.dataInput} onChange={this.props.updateStateProps} />
                 <h4>{this.props.mydata}</h4>
            </div>
        );
    }
}

export default MyContent;



