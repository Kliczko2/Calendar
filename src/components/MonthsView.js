import React from "react";
import Values from "./Values";

class MonthsView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let DAYS=[];
        for(let i=1;i<=this.props.number;i++){
            DAYS.push(i);
        }
        return(
            <div>
                <h1>Month View</h1>
                {DAYS.map((day) =>
                <Values namePole={day} key = {day} className="month"/>)}
            </div>
        )
    }
}

export default MonthsView 