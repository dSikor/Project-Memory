import React from 'react';


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
