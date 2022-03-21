import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DaysView from './DaysView';
import MonthsView from './MonthsView'
import YearsView from "./YearsView";


class Calendar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {view:"year"};
    }
    
    modificateView(scene)
        {
            this.setState({view:scene})
        }
    render()
    {   let scene;
        let year = this.state.year;
        if(this.state.view ==="dayView")
        {
            scene =<DaysView/>
        }
        else if(this.state.view ==="monthView")
        {
            scene =<MonthsView number = {31}/>
        }
        else if(this.state.view ==="yearView")
        {
            scene =<YearsView/>
        }
        return(
            <div>
                <button onClick={()=>this.modificateView("dayView")}>Day View</button>
                <button onClick={()=>this.modificateView("monthView")}>Month View</button>
                <button onClick={()=>this.modificateView("yearView")}>Year View</button>
                {scene}
            </div>
        )
    }
    
}

ReactDOM.render(
  <Calendar/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
