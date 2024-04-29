export const helper = (items, variableDate) => {
  // Variable date
//   const variableDate = "2024-04-30T03:48:57.091Z";
console.log(variableDate);
  // Function to extract time slots from items with the same start date
 function getAllTimeSlots(items, variableDate) {
   const filteredItems = items?.filter(
     (item) => item.startTime.substring(0, 10) === variableDate.substring(0, 10)
   );
     console.log(filteredItems);
   const timeSlots = filteredItems?.map((item) => {
       const startTime = item.startTime.substring(11, 16);
     const itemId = item._id // Extracting time part
       return { startTime, itemId };
   });
   return timeSlots;
 }
  // Get time slots
  const timeSlots = getAllTimeSlots(items, variableDate);
    console.log(timeSlots, "timeslots");
   return timeSlots;
};