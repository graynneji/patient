/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { usePatient } from "../features/usePatient";
const ContDownMid = styled.div`
  width: 766px;
  height: 310px;
  border-radius: 1.6rem;
  padding: 20px 20px 8px 20px;
  background-color: white;
  grid-row: 3;
  grid-column: 2;

  h1 {
    margin-bottom: 4rem;
    font-size: 2.4rem;
  }
`;
const Table = styled.table`
  border-collapse: collapse;
  text-align: left;
  /* border: 1px solid black; */
  vertical-align: middle;

  th,
  td {
    padding: 1.6rem;
    white-space: nowrap;
  }
`;

const Thead = styled.thead`
  /* width: 100%; */
  background-color: #f6f7f8;
  th {
    border-radius: 2.4rem 2.4rem 0 0;
    width: 100%;
    /* padding: 1.6rem; */
  }
`;
const Tbody = styled.tbody`
  height: 2rem;
  overflow-y: scroll;
  td {
    overflow-y: scroll;
    font-size: 1.4rem;
  }
`;
function DownMiddle() {
  const { isLoading, patient, error } = usePatient();
  if (isLoading) return null;

  return (
    <ContDownMid>
      <h1>Diagnostic List</h1>

      <Table>
        <Thead>
          <tr>
            <th>Problem/Diagnostics</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </Thead>

        <Tbody>
          {patient[3]?.diagnostic_list?.map((list) => (
            <tr key={list.name}>
              <td>{list.name}</td>
              <td>{list.description}</td>

              <td style={{ whiteSpace: "wrap" }}>{list.status}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </ContDownMid>
  );
}

export default DownMiddle;
