import React from "react";
import {
  SelectStyle,
  StudentContent,
  TimeSlotContainer,
  TimeSlot,
  SubmitWrapper,
} from "./Student.styled";

const Student = () => {
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
        <p>Please select your preferred slot</p>

        <TimeSlot>9:00 AM</TimeSlot>
        <TimeSlot>9:30 AM</TimeSlot>
        <TimeSlot>10:00 AM</TimeSlot>
        <TimeSlot>10:30 AM</TimeSlot>
        <TimeSlot>11:00 AM</TimeSlot>
        <TimeSlot>11:30 AM</TimeSlot>
        <TimeSlot>12:00 PM</TimeSlot>
        <TimeSlot>12:30 PM</TimeSlot>
        <TimeSlot>1:00 PM</TimeSlot>
      </TimeSlotContainer>

      <SubmitWrapper>
        <button type="submit">Schedule Appointment</button>
      </SubmitWrapper>
    </StudentContent>
  );
};

export default Student;
