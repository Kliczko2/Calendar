import React from "react";
import Values from "./Values";
const MONTHS = ["Styczen","Luty","Marzec","Kwiecien","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Pazdziernik","Listopad","Grudzień"];
class MonthsView extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {year:2022,month:1}
    }
    changeYear(element)
    {
      let year=this.state.year;
      let yearAfterAdd;
      yearAfterAdd = year + element;
      this.setState({year:yearAfterAdd});
    }
    render()
    {   
        let year= this.state.year;
        let DAYS=[];
        for(let i=1;i<=this.props.number;i++)
        {
            DAYS.push(i);
        }
        return(
            <div>
                <h1>Month View</h1>
                <h2>{year}</h2>
                <button onClick={()=>this.changeYear(-1)}>POPRZEDNI ROK</button>
                <button onClick={()=>this.changeYear(1)}>NASTPNY ROK</button>
                {DAYS.map((day) =>
                <Values namePole={day} key = {day} className="month"/>)}
            </div>
        )
    }
}
export default MonthsView 