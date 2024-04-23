import React from "react";
import { AppointmentContent } from "./Professor.styled";

const Professor = () => {
  const appointmentData = [
    {
      id: 1,
      reason: "Classes registration",
      time: "2024-04-30T11:00:00",
    },
    {
      id: 2,
      reason: "Doubt Clarification",
      time: "2024-04-30T11:00:00",
    },
    {
      id: 3,
      reason: "Need guidance on semester project",
      time: "2024-04-30T11:00:00",
    },
    {
      id: 4,
      reason: "Comprehensive exams",
      time: "2024-04-30T11:00:00",
    },
  ];
  return (
    <div>
      <h3>Appointments</h3>
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

export default Professor;
