import React from 'react';
import Values from './Values';
import './view.css';

class DaysView extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        let hours = [];
        for(let i=0;i<=23;i++)
        {
            hours.push(i);
        } 
        return(
            <div>
                <h2>Day View</h2>
                {hours.map((hour)=><Values namePole = {hour} className = "day"/>)}
            </div>
        )
    }
}
export default DaysView;
