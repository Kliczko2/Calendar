import React from "react";
class Values extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div className={this.props.className}>
                {this.props.namePole}
            </div>
        )
    }
}
export default Values;