import {
  StyledDashboardContainer,
  StyleHeading,
  DashboardContent,
} from "./Dashboard.styled";
import Header from "../../components/Header";
import Student from "./Student";
import Professor from "./Professor";
import { shallowEqual, useSelector } from "react-redux";

const DashboardView = () => {

const user = useSelector(
  (state) => state.applicationReducer?.userDetails,
  shallowEqual
);

const userData = user?.data;

    return (
      <div>
        <Header />
        <StyledDashboardContainer>
          <StyleHeading>
            {userData?.occupation === "STUDENT"
              ? `Welcome to Dashboard ${userData?.name}`
              : `Welcome to Dashboard Professor, ${userData?.name}`}
          </StyleHeading>
          <DashboardContent>
            {userData?.occupation === "STUDENT" ? (
              <Student data={userData} />
            ) : (
              <Professor data={userData} />
            )}
          </DashboardContent>
        </StyledDashboardContainer>
      </div>
    );
};

export default DashboardView;
