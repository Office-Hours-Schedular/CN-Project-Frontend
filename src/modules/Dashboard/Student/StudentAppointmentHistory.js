import React from 'react'
import {AppointmentContent} from './Student.styled'

const StudentAppointmentHistory = ({ data }) => {
  const appointmentData = data.appointmentData;

  return (
    <div>
      {appointmentData.map((appointment) => {
        return (
          <AppointmentContent key={appointment.id}>
            <p>{appointment.reason}</p>
            <p>{appointment.time}</p>
          </AppointmentContent>
        );
      })}
    </div>
  );
};

export default StudentAppointmentHistory;