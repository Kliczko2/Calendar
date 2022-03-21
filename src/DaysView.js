import React from 'react';
import Values from './Values';
import './view.css';

class DaysView extends React.Component
{
    constructor(props)
    {
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
    render()
    {
        let year = this.state.year
        let HOURS = [];
        for(let i=0;i<=23;i++)
        {
            HOURS.push(i);
        } 
        return(
            <div>
                <h2>Day View</h2>
                <h2>{year}</h2>
                {HOURS.map((hour)=><Values namePole = {hour} className = "day"/>)}
                <button onClick={()=>this.changeYear(-1)}>POPRZEDNI ROK</button>
                <button onClick={()=>this.changeYear(1)}>NASTPNY ROK</button>
            </div>
        )
    }
}
export default DaysView;
