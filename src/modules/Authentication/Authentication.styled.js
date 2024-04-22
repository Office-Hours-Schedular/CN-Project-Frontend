import styled from "styled-components";
import backgroundImg from "../../assets/images/hepner-hall-zoom.png";

export const ContainerFluid = styled.div`
  padding: 0;
  background-image: url(${backgroundImg});
  height: calc(90vh - 72px);
`;

export const CardTitle = styled.div`
  font-weight: 600;
`;
