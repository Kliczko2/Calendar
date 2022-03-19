import React from "react";
import DaysView from './components/DaysView';
import MonthsView from './components/MonthsView'
import YearsView from "./components/YearsView";
class Calendar extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                {/* <YearsView/> */}
                <MonthsView number={31}/>
                {/* <DaysView/> */}
                <button>Day View</button>
                <button>Month View</button>
                <button>Year View</button>
            </div>
        )
    }
    
}
export default Calendar;

