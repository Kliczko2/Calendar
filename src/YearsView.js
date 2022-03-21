import React from "react";
import Values from "./Values";
import './view.css'
const MONTHS = ["Styczen","Luty","Marzec","Kwiecien","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Pazdziernik","Listopad","Grudzień"];
class YearsView extends React.Component{
    constructor(props){
        super(props);
        this.state = {year:2022}
    }
    changeYear(element)
    {
      let year=this.state.year;
      let yearAfterAdd;
      yearAfterAdd = year + element;
      this.setState({year:yearAfterAdd});
    }
    render(){
        let year = this.state.year;
        return(
            <div>
                <h1>Year View</h1>
                <h1>{year}</h1>
                {MONTHS.map((month) =>
                <Values namePole={month} key = {month} className ="year"/>)}
                <button onClick={()=>this.changeYear(-1)}>POPRZEDNI ROK</button>
                <button onClick={()=>this.changeYear(1)}>NASTPNY ROK</button>
            </div>
        )
    }
}

export default YearsView