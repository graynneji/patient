/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import moment from "moment";
import { usePatient } from "../features/usePatient";

const RightSideCon = styled.div`
  width: 367px;
  height: 740px;
  background-color: white;
  padding: 32px 20px;
  border-radius: 1.6rem;
`;

const ProfilePicName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.2rem;
  h2 {
    font-size: 2.4rem;
    font-weight: bolder;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
`;
const Info = styled.div`
  display: flex;
  gap: 1.6rem;
  p {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;
const Button = styled.button`
  border-radius: 41px;
  width: 100%;
  width: 220px;
  align-self: center;
  background-color: #01f0d0;
`;
function RightSide() {
  const { isLoading, patient, error } = usePatient();
  if (isLoading) return null;
  return (
    <RightSideCon>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <ProfilePicName>
            <Image src={patient[3]?.profile_picture} alt="" />
            <h2>{patient[3]?.name}</h2>
          </ProfilePicName>
          <Contact>
            <Info>
              <>
                <img src="/contact-icons/BirthIcon.svg" alt="birth" />
              </>
              <div>
                <span>Date of Birth</span>

                <p>
                  {moment(patient[3]?.date_of_birth, "MM-DD-YYYY").format(
                    "MMMM DD, YYYY"
                  )}
                </p>
              </div>
            </Info>
            <Info>
              <>
                <img src="/contact-icons/FemaleIcon.svg" alt="birth" />
              </>
              <div>
                <span>Gender</span>

                <p>{patient[3]?.gender}</p>
              </div>
            </Info>
            <Info>
              <>
                <img src="/contact-icons/PhoneIcon.svg" alt="birth" />
              </>
              <div>
                <span>Contact Info.</span>

                <p>{patient[3]?.phone_number}</p>
              </div>
            </Info>
            <Info>
              <>
                <img src="/contact-icons/PhoneIcon.svg" alt="birth" />
              </>
              <div>
                <span>Emergency Contacts</span>

                <p>{patient[3]?.emergency_contact}</p>
              </div>
            </Info>
            <Info>
              <>
                <img src="/contact-icons/InsuranceIcon.svg" alt="birth" />
              </>
              <div>
                <span>Insurance Provider</span>

                <p>{patient[3]?.insurance_type}</p>
              </div>
            </Info>
            <Button>Show All Information</Button>
          </Contact>
        </>
      )}
    </RightSideCon>
  );
}

export default RightSide;
