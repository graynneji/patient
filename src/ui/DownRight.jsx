/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";

const DownRightCon = styled.div`
  width: 367px;
  grid-row: 3;
  grid-column: 3;
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
  /* overflow-y: scroll; */
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
`;
function DownRight({ patient, isLoading }) {
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
