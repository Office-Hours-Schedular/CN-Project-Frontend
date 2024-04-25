import {
  StyledDashboardContainer,
  StyleHeading,
  DashboardContent,
} from "./Dashboard.styled";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CalendarSelector from "../../components/CalendarSelector/CalendarSelector";
import Student from "./Student/Student";
import Professor from "./Professor/Professor";

const DashboardView = ({ data }) => {
  //add more components, by creating it outside.

  if (data.userType === "student") {
    return (
      <div>
        <Header />
        <StyledDashboardContainer>
          <StyleHeading>Welcome to Student Dashboard</StyleHeading>
          <DashboardContent>
            <CalendarSelector />
            <Student data={data} />
          </DashboardContent>
        </StyledDashboardContainer>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <StyledDashboardContainer>
          <StyleHeading>Welcome to Professor Dashboard</StyleHeading>
          <DashboardContent>
            <CalendarSelector />
            <Professor data={data} />
          </DashboardContent>
        </StyledDashboardContainer>

        <Footer />
      </div>
    );
  }
};

export default DashboardView;
