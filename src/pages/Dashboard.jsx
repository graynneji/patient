/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { usePatient } from "../features/usePatient";
import Nav from "../ui/Nav";
import LeftSide from "../ui/LeftSide";
import Middle from "../ui/Middle";
import RightSide from "../ui/RightSide";
import DownMiddle from "../ui/DownMiddle";
import DownRight from "../ui/DownRight";

// const Container = styled.div`
//   display: grid;
//   width: 100vw;
//   max-width: 1600px;
//   /* height: 100dvh; */
//   background-color: green;
//   /* padding: 0 32px 0 32px; */
// `;

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  padding: 1.8rem;
  background-color: #f6f7f8;

  margin: 0 auto;
  /* row-gap: 3.2rem; */
  gap: 3.2rem;
`;

function Dashboard() {
  const { isLoading, patient, error } = usePatient();

  console.log(patient, isLoading);

  return (
    // <Container>
    <StyledDashboard>
      <Nav />

      <LeftSide isLoading={isLoading} patient={patient} />

      <Middle isLoading={isLoading} patient={patient}>
        fdfd
      </Middle>
      <RightSide isLoading={isLoading} patient={patient} />

      <DownMiddle />

      <DownRight isLoading={isLoading} patient={patient}>
        fdfd
      </DownRight>
    </StyledDashboard>
    // </Container>
  );
}

export default Dashboard;
