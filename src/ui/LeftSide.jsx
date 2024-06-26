/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { usePatient } from "../features/usePatient";

const RightCon = styled.div`
  width: 36.7rem;
  grid-row: 2/-1;
  display: flex;
  flex-direction: column;
  border-radius: 1.6rem;
  background-color: white;
  height: 1109px;
  position: relative;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  padding: 1.6rem;
  img {
    width: 17.99px;
    height: 18px;
  }
`;

const TopLeft = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
`;

const PatientList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 2rem;
`;
const Patient = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const PatLeft = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  gap: 0.4rem;
  h3 {
    font-weight: bold;
  }
  h4 {
    color: #707070;
  }
`;
const ConPat = styled.div`
  padding: 0 1.6rem;

  display: flex;
  justify-content: space-between;
  background-color: ${({ name }) =>
    name === "Jessica Taylor" ? "#D8FCF7" : ""};
  padding: ${({ name }) => (name === "Jessica Taylor" ? "16px" : "")};
`;

const Image = styled.img`
  width: 1.8rem;
  height: 4rem;
`;
function LeftSide() {
  const { isLoading, patient, error } = usePatient();
  if (isLoading) return null;
  return (
    <RightCon>
      <Top>
        <TopLeft>Patients</TopLeft>
        <img src="search_FILL0_wght300_GRAD0_opsz24.svg" alt="serach icon" />
      </Top>

      <PatientList>
        <Patient>
          {isLoading
            ? "Loading..."
            : patient?.map((pat) => (
                <>
                  <ConPat key={pat.name} name={pat.name}>
                    <PatLeft>
                      <img
                        width="48px"
                        height="48px"
                        src={pat.profile_picture}
                        alt={pat.name}
                      />
                      <Details>
                        <h3>{pat.name}</h3>
                        <span>
                          {pat.gender}, {pat.age}
                        </span>
                      </Details>
                    </PatLeft>
                    <Image
                      src="more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
                      alt="dots"
                    />
                  </ConPat>
                </>
              ))}
        </Patient>
      </PatientList>
    </RightCon>
  );
}

export default LeftSide;
