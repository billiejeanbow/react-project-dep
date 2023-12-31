import { useState } from 'react';
import Calendar from 'react-calendar';

function EventCal() {
    const [date, setDate] = useState(new Date());
  
    return (
      <div className='app'>
        <h1 className='text-center'>Event Calendar</h1>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </div>
    );
  }
  
  export default EventCal;