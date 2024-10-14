import React from 'react';

function Schedule() {
  // Dummy data for the mentor's schedule
  const scheduleData = [
    { day: 'Monday', time: '10:00 AM - 12:00 PM', availability: true },
    { day: 'Tuesday', time: '2:00 PM - 4:00 PM', availability: false },
    { day: 'Wednesday', time: '9:00 AM - 11:00 AM', availability: true },
    { day: 'Thursday', time: 'Not Available', availability: false },
    { day: 'Friday', time: '3:00 PM - 5:00 PM', availability: true },
  ];

  return (
    <div className="schedule-container">
      <h1>Mentor's Schedule</h1>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.availability ? 'Available' : 'Not Available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
