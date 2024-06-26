/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import styled from "styled-components";
import Chart from "./Chart";
import { usePatient } from "../features/usePatient";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
const History = styled.div`
  padding: 1.6rem;
  width: 766px;
  min-height: 673px;
  display: flex;
  grid-row: 2;
  background-color: white;
  border-radius: 1.6rem;
  flex-direction: column;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  flex: 1;
`;

const Hbp = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
`;
const StoDia = styled.span`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;
const HbpValues = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
`;
const Header = styled.p`
  font-size: 2.4rem;
  margin-bottom: 4rem;
  font-weight: bolder;
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
const Horizontal = styled.hr`
  border-color: #70707051 !important;
  border-width: 1px !important;
  border-style: solid !important;
`;

const Duration = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Time = styled.div``;
const TimeCon = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
`;

const ArrowsIconCon = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
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
  const data = patient[3]?.diagnosis_history
    ?.filter((_, idx) => idx < 6)
    ?.reverse()
    ?.map(({ month, year, blood_pressure }) => ({
      date: `${month.slice(0, 3)}. ${year}`,
      systolic: blood_pressure.systolic.value,
      diastolic: blood_pressure.diastolic.value,
    }));

  return (
    <History>
      <Header> Diagnosis History</Header>

      <>
        <MainHis>
          <Left>
            <Duration>
              <Hbp>Blood Pressure</Hbp>
              <TimeCon>
                <Time>Last 6 months</Time>
                <IoIosArrowDown />
              </TimeCon>
            </Duration>
            <Chart data={data} />
          </Left>
          <Right>
            <Top>
              <StoDia>
                <GoDotFill
                  style={{
                    width: "14px",
                    height: "14px",
                    color: "#E66FD2",
                  }}
                />

                <Hbp>Systolic</Hbp>
              </StoDia>
              <HbpValues>{data[5]?.systolic}</HbpValues>
              <ArrowsIconCon>
                <IoMdArrowDropup />
                <span>Higher than Average</span>
              </ArrowsIconCon>
            </Top>
            <Horizontal />
            <Top>
              <StoDia>
                <GoDotFill
                  style={{
                    width: "14px",
                    height: "14px",
                    color: "#7E6CAB",
                  }}
                />

                <Hbp>Diastolic</Hbp>
              </StoDia>
              <HbpValues>{data[5]?.diastolic}</HbpValues>
              <ArrowsIconCon>
                <IoMdArrowDropdown />
                <span>Lower than Average</span>
              </ArrowsIconCon>
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
              <p> {dataOne[0].temp.value}&#176;F</p>
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
    </History>
  );
}

export default Middle;
