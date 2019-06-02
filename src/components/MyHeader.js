import React from 'react';

class MyHeader extends React.Component {

    render(){
        return(
            <h1>{this.props.headerProps}</h1>
        );
    }
}

  MyHeader.defaultProps = {
    headerProps:"dsadasda",
  }

export default MyHeader;