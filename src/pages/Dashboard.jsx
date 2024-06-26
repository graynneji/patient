/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { usePatient } from "../features/usePatient";
import Nav from "../ui/Nav";
import LeftSide from "../ui/LeftSide";
import Middle from "../ui/Middle";
import RightSide from "../ui/RightSide";
import DownMiddle from "../ui/DownMiddle";
import DownRight from "../ui/DownRight";

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  padding: 1.8rem;
  background-color: #f6f7f8;

  margin: 0 auto;

  gap: 3.2rem;
`;

const Right = styled.div`
  grid-row: 2/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-top: -1.8rem;
`;

function Dashboard() {
  const { isLoading, patient, error } = usePatient();

  return (
    <StyledDashboard>
      <Nav />
      <LeftSide />
      <Middle />
      <DownMiddle />
      <Right>
        <RightSide />
        <DownRight />
      </Right>
    </StyledDashboard>
  );
}

export default Dashboard;
