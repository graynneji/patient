/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { usePatient } from "../features/usePatient";

const DownRightCon = styled.div`
  width: 367px;
  min-height: 355px;
  background-color: white;
  border-radius: 1.6rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Top = styled.span`
  margin-bottom: 1.6rem;
  font-size: 2.4rem;
  font-weight: 800;
`;
const LabResults = styled.div`
  padding: 1.6rem;
`;

const LabCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
`;
function DownRight() {
  const { isLoading, patient, error } = usePatient();
  if (isLoading) return null;
  return (
    <DownRightCon>
      <Top>Lab Results</Top>
      {isLoading
        ? "Loading..."
        : patient[3]?.lab_results?.map((results) => (
            <>
              <LabCon key={results}>
                <LabResults>{results}</LabResults>
                <Image
                  src="/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                  alt="download icon"
                />
              </LabCon>
            </>
          ))}
    </DownRightCon>
  );
}

export default DownRight;
