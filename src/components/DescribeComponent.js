import React from 'react';
import '../styles/DescribeComponent.css'


class DescribeComponent extends React.Component {

    render(){

        return(
            <div id="descripe">
                <p>{this.props.describe}</p>
            </div>
        );

    }

}


export default DescribeComponent;
