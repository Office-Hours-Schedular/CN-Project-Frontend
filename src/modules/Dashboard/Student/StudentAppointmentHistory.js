import React, { useEffect } from "react";
import {
  AppointmentContent,
  StyledDescription,
  StyledItemWrapper,
  StyledWrapper,
  StyledHeading,
} from "./Student.styled";
import useAPI from "../../../hooks/useAPI";

const StudentAppointmentHistory = ({ professorItems }) => {
  const user_id = localStorage.getItem("userId");
  const [scheduledListData, scheduledList] = useAPI(
    "GET_STUDENT_SCHEDULE_LIST",
    {
      lazy: true,
    }
  );

  useEffect(() => {
    scheduledList({ user_id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const appointmentData = scheduledListData?.data?.studentItems;
  console.log(appointmentData);
  
  return (
    <StyledWrapper>
      <StyledHeading>Upcoming Appointments</StyledHeading>
      {appointmentData?.map((appointment) => {
        const [datePart, timePart] = appointment.startTime.split("T");

        // Extract date components
        const [year, month, day] = datePart.split("-");

        // Extract time components
        const [time, timezone] = timePart.split("Z")[0].split(":");

        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const monthName = monthNames[parseInt(month, 10) - 1];

        return (
          <AppointmentContent key={appointment.id}>
            {/* <p>{appointment.description}</p> */}
            <StyledItemWrapper>
              Date:
              <StyledDescription>
                {day} {monthName} {year}
              </StyledDescription>
            </StyledItemWrapper>
            <StyledItemWrapper>
              Time: <StyledDescription>{time}:00</StyledDescription>
            </StyledItemWrapper>
            <StyledItemWrapper>
              Professor: <StyledDescription>John</StyledDescription>
            </StyledItemWrapper>
            <StyledItemWrapper>
              Description:{" "}
              <StyledDescription>{appointment.description}</StyledDescription>
            </StyledItemWrapper>
          </AppointmentContent>
        );
      })}
    </StyledWrapper>
  );
};

export default StudentAppointmentHistory;