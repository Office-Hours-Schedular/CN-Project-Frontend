import React,{useState} from 'react'
import StudentView from './StudentView' 
import { useForm } from 'react-hook-form';
import useAPI from "../../../hooks/useAPI";

const StudentContainer = ({data}) => {

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
    reset
  } = useForm();

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [timeSlotError, setTimeSlotError] = useState("");
  const [, addStudentScheduleItem] = useAPI("POST_STUDENT_SCHEDULE_ITEM", {
    lazy: true,
  });
  // const [, , { refresh }] = useAPI("GET_SCHEDULED_APPOINTMENT_LIST", { lazy: true });

   const handleSlotSelection = (slot) => {
      setSelectedTimeSlot(slot);
      setTimeSlotError("");
   };
  
  const handleScheduleSuccess = (slot) => {
    //add alert
      // refresh();
      reset();
   };
  
  const handleScheduleSubmit = (formData) => {
    if (timeSlotError) {
      return; // Prevent form submission if there's an error message
    }
    const isoDate = formData.date.toISOString();
    const payload = formData;
    // createUser({
    //   onSuccess: handleCreateUserSuccess,
    //   payload,
    // });

    addStudentScheduleItem({
      onSuccess: handleScheduleSuccess,
      payload,
    });
    console.log(formData, isoDate);
    //api call
  };
 
  return (
    <StudentView
      onSignupSubmit={handleSubmit(handleScheduleSubmit)}
      control={control}
      errors={errors}
      register={register}
      selectedTimeSlot={selectedTimeSlot}
      setSelectedTimeSlot={setSelectedTimeSlot}
      timeSlotError={timeSlotError}
      handleSlotSelection={handleSlotSelection}
      watch={watch}
      data={data}
    />
  ); 
}

export default  StudentContainer;