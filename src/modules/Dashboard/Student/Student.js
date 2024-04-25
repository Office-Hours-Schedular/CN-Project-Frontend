import React from "react";
import {
  SelectStyle,
  StudentContent,
  TimeSlotContainer,
  SubmitWrapper,
  AppointmentContent,
} from "./Student.styled";

const Student = ({ data }) => {
  const appointmentData = data.appointmentData;

  return (
    <StudentContent>
      <SelectStyle>
        <select class="name-dropdown">
          <option value="">Select Name</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
        </select>
        <select class="department-dropdown">
          <option value="">Select Department</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
        </select>
      </SelectStyle>

      <p>Enter subject/reason:</p>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Enter Meeting Description"
      />

      <TimeSlotContainer>
        <p>Select your preferred time slot</p>
        <div class="time-slots">
          <input type="radio" id="slot_1" name="time-slot" value="9:00" />
          <label for="slot_1">9:00 AM</label>

          <input type="radio" id="slot_2" name="time-slot" value="9:30" />
          <label for="slot_2">9:30 AM</label>

          <input type="radio" id="slot_3" name="time-slot" value="10" />
          <label for="slot_3">10:00 AM</label>

          <input type="radio" id="slot_4" name="time-slot" value="10:30" />
          <label for="slot_4">10:30 AM</label>

          <input type="radio" id="slot_5" name="time-slot" value="11:00" />
          <label for="slot_5">11:00 AM</label>

          <input type="radio" id="slot_6" name="time-slot" value="11:30" />
          <label for="slot_6">11:30 AM</label>

          <input type="radio" id="slot_7" name="time-slot" value="12:00" />
          <label for="slot_7">12:00 PM</label>

          <input type="radio" id="slot_8" name="time-slot" value="11:00" />
          <label for="slot_8">12:30 PM</label>
        </div>
      </TimeSlotContainer>

      <SubmitWrapper>
        <button type="submit">Schedule Appointment</button>
      </SubmitWrapper>
      <h2> All Upcoming Appointments</h2>
      {appointmentData.map((appointment) => {
        return (
          <AppointmentContent key={appointment.id}>
            <p>{appointment.reason}</p>
            <p>{appointment.time}</p>
          </AppointmentContent>
        );
      })}
    </StudentContent>
  );
};

export default Student;
