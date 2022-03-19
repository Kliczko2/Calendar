import React from "react";
import Values from "./Values";
import './view.css'
const MONTHS = ["Styczen","Luty","Marzec","Kwiecien","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Pazdziernik","Listopad","Grudzień"];
class YearsView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Year View</h1>
                {MONTHS.map((month) =>
                <Values namePole={month} key = {month} className ="year"/>)}
            </div>
        )
    }
}

export default YearsView