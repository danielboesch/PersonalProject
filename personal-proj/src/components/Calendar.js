import React, {Component} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css;'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker} from 'react-dates';
import '../App.css';
import { render } from '@testing-library/react';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    } 

    alertStartDate = () => {
        alert(this.state.startDate)
    }
    alertEndDate = () => {
        alert(this.state.endDate)
    }

    render(){
        return(
            <div className='calendarApp'>
                <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />
            </div>

        )
    };
}

export default Calendar;