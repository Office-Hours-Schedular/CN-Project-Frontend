import React from "react";
import { Form, Button } from "../../../components";
import { validateRequiredField } from "../../../utils/formValidations";
import { DatePicker as AntDatePicker } from "antd";
import { Controller } from "react-hook-form";
import {
  StyledInputWrapper,
  ErrorMessage,
  DatePickerContainer,
  TimeSlotButton,
  SelectView,
  StyledDate,
  StudentDashboardWrapper,
} from "./Student.styled";
import StudentAppointmentHistory from "./StudentAppointmentHistory";

const StudentView = ({
  professorItems,
  onScheduleSubmit,
  control,
  register,
  errors,
  setSelectedTimeSlot,
  selectedTimeSlot,
  handleSlotSelection,
  timeSlotError,
  watch,
  data,
  ProfessorList,
  watchDate,
  availableSlots,
  watchProfessorId,
}) => {
  return (
    <StudentDashboardWrapper>
      <Form onSubmit={onScheduleSubmit}>
        <SelectView>
          <StyledInputWrapper>
            <Form.Label
              label="Select Professor Name"
              margin="0 0 10px 0"
              bold
            />
            <Form.Select
              showSearch
              optionFilterProp="children"
              control={control}
              name="ProfessorName"
              placeholder="Select Professor Name"
              size="medium"
              options={ProfessorList}
              errors={errors}
              rules={{
                validate: { required: validateRequiredField("Professor Name") },
              }}
            />
          </StyledInputWrapper>
        </SelectView>
        <StyledInputWrapper>
          <Form.Label label="Enter subject/reason:" margin="0 0 10px 0" bold />
          <Form.Input
            control={control}
            errors={errors}
            name="description"
            type="Input"
            placeholder="Enter Meeting Description"
            size="medium"
            rules={{
              validate: {
                required: validateRequiredField("Description"),
              },
            }}
          />
        </StyledInputWrapper>
       {watchProfessorId && <StyledInputWrapper>
          <DatePickerContainer>
            <Form.Label label="Select a Date" margin="0 0 10px 0" bold />
            <StyledDate>
              <Controller
                name="date"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <AntDatePicker {...field} />}
              />
            </StyledDate>
            {errors.date && <ErrorMessage>Date is required</ErrorMessage>}
          </DatePickerContainer>
        </StyledInputWrapper>}
        {watchDate && <StyledInputWrapper>
          <Form.Label
            label="Select your preferred time slot"
            margin="0 0 10px 0"
            bold
          />
          <StyledDate>
            {availableSlots?.map((slot, index) => (
              <TimeSlotButton
                key={index}
                selected={selectedTimeSlot.startTime === slot?.startTime}
                onClick={() => handleSlotSelection(slot)}
                disabled={watchDate ? false : true}
                type="button"
              >
                {slot?.startTime}
              </TimeSlotButton>
            ))}
          </StyledDate>
          {timeSlotError && <ErrorMessage>{timeSlotError}</ErrorMessage>}
        </StyledInputWrapper>}
        <Button text="Schedule Appointment" size="large" />
      </Form>
      <StudentAppointmentHistory data={data} professorItems={professorItems} />
    </StudentDashboardWrapper>
  );
};

export default StudentView;
