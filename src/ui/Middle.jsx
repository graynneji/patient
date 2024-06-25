/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Chart from "./Chart";
import { useHistory } from "../hooks/history";
import { usePatient } from "../features/usePatient";

const History = styled.div`
  padding: 1.6rem;
  width: 766px;
  display: flex;
  /* gap: 39.05px; */
  grid-row: 2;
  background-color: white;
  border-radius: 1.6rem;
  flex-direction: column;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* background-color: green; */
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Right = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  /* background-color: red; */
  flex: 1;
`;

const Hbp = styled.span`
  font-weight: bold;
`;
const HbpValues = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
`;
const Header = styled.p`
  font-size: 2.4rem;
  margin-bottom: 4rem;
`;

const MainHis = styled.div`
  padding: 1.6rem;
  display: flex;
  gap: 1.6rem;
  background-color: #f4f0fe;
  border-radius: 1.2rem;
  margin-bottom: 2rem;
`;
const HeartRate = styled.div`
  display: flex;
  gap: 2.1rem;
  justify-content: center;
  align-items: center;
`;
const Heart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  min-width: 22.8rem;
  border-radius: 1.2rem;
  padding-left: 1.6rem;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  font-size: 1.6rem;
  p {
    font-size: 3rem;
    font-weight: bolder;
  }
`;
const Normal = styled.span`
  font-size: 1.4rem;
`;
const Image = styled.img`
  width: 9.6rem;
  height: 9.6rem;
`;
function Middle() {
  const { isLoading, patient, error } = usePatient();
  if (isLoading) return null;

  const dataOne = patient[3]?.diagnosis_history?.map(
    ({ heart_rate, respiratory_rate, temperature }) => ({
      heart: heart_rate,
      res: respiratory_rate,
      temp: temperature,
    })
  );
  console.log(dataOne);
  const data = patient[3]?.diagnosis_history
    ?.filter((_, idx) => idx < 6)
    ?.reverse()
    ?.map(({ month, year, blood_pressure }) => ({
      date: `${month.slice(0, 3)}. ${year}`,
      systolic: blood_pressure.systolic.value,
      diastolic: blood_pressure.diastolic.value,
    }));
  // function Middle({ isLoading, patient }) {
  // const { data, error } = useHistory("chart");
  // const dataOne = useHistory("middle");
  // console.log(dataOne);

  return (
    <History>
      <Header> Diagnossis History</Header>
      {/* {isLoading ? (
        "Loading..."
      ) : ( */}
      <>
        <MainHis>
          <Left>
            <Hbp>Blood Pressure</Hbp>
            <Chart data={data} />
          </Left>
          <Right>
            <Top>
              <Hbp>Systolic</Hbp>
              <HbpValues>{data[5]?.systolic}</HbpValues>
              <span>Higher than Average</span>
            </Top>
            <hr />
            <Top>
              <Hbp>Diastolic</Hbp>
              <HbpValues>{data[5]?.diastolic}</HbpValues>
              <span>Lower than Average</span>
            </Top>
          </Right>
        </MainHis>

        <HeartRate>
          <Heart style={{ backgroundColor: "#E0F3FA " }}>
            <Image src="/respiratory rate.svg" alt="respiratory" />
            <div>
              <span>Respiratory Rate</span>
              <p> {dataOne[0].res.value}bpm</p>
            </div>
            <Normal>{dataOne[0].res.levels}</Normal>
          </Heart>
          <Heart style={{ backgroundColor: "#FFE6E9  " }}>
            <Image src="/temperature.svg" alt="hhhhh" />
            <div>
              <span>Respiratory Rate</span>
              <p> {dataOne[0].temp.value}F</p>
            </div>
            <Normal>{dataOne[0].temp.levels}</Normal>
          </Heart>
          <Heart style={{ backgroundColor: "#FFE6F1  " }}>
            <Image src="/HeartBPM.svg" alt="heart" />
            <div>
              <span>Respiratory Rate</span>
              <p> {dataOne[0].heart.value}bpm</p>
            </div>
            <Normal>{dataOne[0].heart.levels}</Normal>
          </Heart>
        </HeartRate>
      </>
      {/* )} */}
    </History>
  );
}

export default Middle;
