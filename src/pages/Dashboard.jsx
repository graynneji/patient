/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import styled from "styled-components";
import { usePatient } from "../features/usePatient";
import Loader from "../ui/Loader";
const Nav = React.lazy(() => import("../ui/Nav"));
const LeftSide = React.lazy(() => import("../ui/LeftSide"));
const Middle = React.lazy(() => import("../ui/Middle"));
const RightSide = React.lazy(() => import("../ui/RightSide"));
const DownMiddle = React.lazy(() => import("../ui/DownMiddle"));
const DownRight = React.lazy(() => import("../ui/DownRight"));

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
  if (isLoading) return null;
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default Dashboard;
