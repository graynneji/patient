/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import moment from "moment";
import { PiX } from "react-icons/pi";

const RightSideCon = styled.div`
  width: 367px;
  /* width: 100%; */
  grid-row: 2;
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
`;
const Button = styled.button`
  border-radius: 41px;
  width: 100%;
  width: 220px;
  align-self: center;
  background-color: #01f0d0;
`;
function RightSide({ isLoading, patient }) {
  return (
    <RightSideCon>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <ProfilePicName>
            <Image src={patient[3]?.profile_picture} alt="" />
            <span>{patient[3]?.name}</span>
          </ProfilePicName>
          <Contact>
            <Info>
              <>
                <img src="/contact-icons/BirthIcon.svg" alt="birth" />
              </>
              <div>
                <p>Date of Birth</p>

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
                <p>Gender</p>

                <p>{patient[3]?.gender}</p>
              </div>
            </Info>
            <Info>
              <>
                <img src="/contact-icons/PhoneIcon.svg" alt="birth" />
              </>
              <div>
                <p>Contact Info.</p>

                <p>{patient[3]?.phone_number}</p>
              </div>
            </Info>
            <Info>
              <>
                <img src="/contact-icons/PhoneIcon.svg" alt="birth" />
              </>
              <div>
                <p>Emergency Contacts</p>

                <p>{patient[3]?.emergency_contact}</p>
              </div>
            </Info>
            <Info>
              <>
                <img src="/contact-icons/InsuranceIcon.svg" alt="birth" />
              </>
              <div>
                <p>Insurance Provider</p>

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
