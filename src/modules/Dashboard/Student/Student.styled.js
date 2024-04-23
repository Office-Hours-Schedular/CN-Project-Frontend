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

export const TimeSlotContainer = styled.div`
  margin-top: 30px;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 0.5fr);
  gap: 20px;

  p {
    font-size: 16px;
    font-weight: bold;
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
  margin-top: 20px;

  button {
    background-color: #a6192e;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #000000;
    }
  }
`;
