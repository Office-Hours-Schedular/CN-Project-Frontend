import styled from "styled-components";
import { Select } from "antd";

export const StyledSelect = styled(Select)`
  &&& {
    ${({ fullWidth }) => fullWidth && ` width: 100%;`};

    > div {
      border-color: ${({ color }) =>
        color === "success" || color === "error" ? "#ac1330" : "#f6f7f8"};

      &:active,
      &:active:hover,
      &:focus,
      &:focus:hover {
        border-color:#ac1330;
      }

      &:hover {
        border-color: #ac1330;
      }
    }

    .ant-select-selection-item {
      border-radius: 25px;
    }

    svg {
      fill: #f6f7f8;
    }
  }
`;
