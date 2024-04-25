import styled from "styled-components";

export const StudentContent = styled.div`
  input[type="text"] {
    height: 30px;
    min-width: 100%;
    background-color: #f2f2f2;
    border: none;
    margin-top: 5px;
  }

  p {
    font-weight: bold;
  }

  button {
    background-color: #a6192e;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background-color: #000000;
    }
  }
`;

export const SelectStyle = styled.div`
  margin-bottom: 20px;

  select {
    min-width: 40%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    appearance: none;
    outline: none;
    cursor: pointer;
    margin-right: 5px;
    background-color: #f2f2f2;
  }
`;

export const TimeSlot = styled.div`
  background-color: #f2f2f2;
  padding: 5px;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  min-height: 30px;

  :hover {
    background-color: #a6192e;
    color: #ffffff;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: left;
`;

export const TimeSlotContainer = styled.div`
  margin-top: 20px;

  p {
    margin-bottom: 10px;
  }

  .time-slots {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  input[type="radio"] {
    display: none;
  }

  label {
    display: block;
    width: 100px;
    height: 80px;
    background-color: #f2f2f2;
    border-radius: 10px;
    text-align: center;
    line-height: 80px;
    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    background-color: #a6192e;
    color: #fff;
  }
`;

export const AppointmentContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
  background-color: #f2f2f2;
  padding: 20px 30px;
  border-bottom: solid 0.7px;
`;
