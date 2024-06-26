/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { usePatient } from "../features/usePatient";
const ContDownMid = styled.div`
  width: 766px;
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
  vertical-align: middle;
  table-layout: fixed;

  th,
  td {
    padding: 1.6rem;
    white-space: nowrap;
  }
`;

const Thead = styled.thead`
  background-color: #f6f7f8;
  position: sticky;
  z-index: 2;
  top: 0;
  th {
    width: 100%;
  }
`;

const ThRight = styled.th`
  border-top-right-radius: 2.4rem;
  border-bottom-right-radius: 2.4rem;
`;
const ThLeft = styled.th`
  border-top-left-radius: 2.4rem;
  border-bottom-left-radius: 2.4rem;
`;
const Tbody = styled.tbody`
  td {
    font-size: 1.4rem;
  }
`;
const Scroll = styled.div`
  height: 256px;
  overflow-y: scroll;
`;
function DownMiddle() {
  const { isLoading, patient, error } = usePatient();
  if (isLoading) return null;

  return (
    <ContDownMid>
      <h1>Diagnostic List</h1>
      <Scroll>
        <Table>
          <Thead>
            <tr>
              <ThLeft>Problem/Diagnostics</ThLeft>
              <th>Description</th>
              <ThRight>Status</ThRight>
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
      </Scroll>
    </ContDownMid>
  );
}

export default DownMiddle;
