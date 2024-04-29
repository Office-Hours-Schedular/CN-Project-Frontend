import React, { useEffect, useState } from "react";
import StudentView from "./StudentView";
import { useForm } from "react-hook-form";
import useAPI from "../../../hooks/useAPI";
import { helper } from "./helper";

const StudentContainer = ({ data }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const user_id = localStorage.getItem("userId");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({});
  const [timeSlotError, setTimeSlotError] = useState("");

  const [, addStudentScheduleItem] = useAPI("POST_STUDENT_SCHEDULE_ITEM", {
    lazy: true,
  });

  const [ProfessorListData, getProfessorList] = useAPI("GET_PROFESSOR_LIST", {
    lazy: true,
  });

  const ProfessorList = ProfessorListData?.data?.professors?.map(
    (professor) => ({
      value: professor?._id,
      label: `${professor?.name} ${professor?.lastname}`,
    })
  );

  useEffect(() => {
    getProfessorList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [ProfessorSchedule, getProfessorSchedule] = useAPI(
    "GET_PROFESSOR_SCHEDULE",
    {
      lazy: true,
    }
  );

  const watchProfessorId = watch("ProfessorName");

 
  useEffect(() => {
    watchProfessorId && getProfessorSchedule({ user_id: watchProfessorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchProfessorId]);

  const professorItems = ProfessorSchedule?.data?.professorItems;
  // const studentItems = ProfessorSchedule?.data?.studentItems;

  const watchDate = watch("date");
  console.log(professorItems, watchDate?.toISOString(), "watchDate");
  // const [, , { refresh }] = useAPI("GET_SCHEDULED_APPOINTMENT_LIST", { lazy: true });

  const availableSlots = watchDate && helper(
    professorItems,
    watchDate?.toISOString()
  );

  const handleSlotSelection = (slot) => {
    setSelectedTimeSlot(slot);
    setTimeSlotError("");
  };

  const handleScheduleSuccess = () => {
    //add alert
    // refresh();
    reset();
  };

  const handleScheduleSubmit = (formData) => {
    if (formData && selectedTimeSlot) {
      const newIsoDateTime = `${formData?.date?.toISOString().split("T")[0]
        }T${selectedTimeSlot.startTime}:00.000Z`;

      console.log("hii")
      // if (timeSlotError) {
      //   return; // Prevent form submission if there's an error message
      // }

      // const isoDate = formData.date.toISOString();
      const payload = {
        startTime: newIsoDateTime,
        professorItemId: selectedTimeSlot?.itemId,
        description: formData?.description,
      };
      // createUser({
      //   onSuccess: handleCreateUserSuccess,
      //   payload,
      // });

      addStudentScheduleItem({
        onSuccess: handleScheduleSuccess,
        user_id,
        payload,
      });
    };
  }
    return (
      <StudentView
        onScheduleSubmit={handleSubmit(handleScheduleSubmit)}
        control={control}
        errors={errors}
        register={register}
        selectedTimeSlot={selectedTimeSlot}
        setSelectedTimeSlot={setSelectedTimeSlot}
        timeSlotError={timeSlotError}
        handleSlotSelection={handleSlotSelection}
        watch={watch}
        data={data}
        ProfessorList={ProfessorList}
        availableSlots={availableSlots}
        watchDate={watchDate}
        professorItems={professorItems}
        watchProfessorId={watchProfessorId}
      />
    );
  };


export default StudentContainer;
