import styled from "styled-components";
import { PiLineVerticalThin } from "react-icons/pi";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1564px;
  height: 72px;
  background-color: white;
  border-radius: 7rem;
  grid-column: 1/-1;
`;

const NavLinks = styled.ul`
  display: flex;
  font-weight: bold;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 4rem;
  li {
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const ProDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Settings = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const Highligth = styled.li`
  padding: 1.1rem 1.6rem;
  background-color: #01f0d0;
  border-radius: 41px;
`;

function Nav() {
  return (
    <StyledNav>
      <div>
        <img src="/TestLogo.svg" alt="Logo" />
      </div>

      <NavLinks>
        <li>
          <img
            src="/dashboard-icons/home_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Nav link icons"
          />
          Overview
        </li>
        <Highligth>
          <img
            src="/dashboard-icons/group_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Nav link icons"
          />
          Patients
        </Highligth>
        <li>
          <img
            src="/dashboard-icons/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Nav link icons"
          />
          Schedule
        </li>
        <li>
          <img
            src="/dashboard-icons/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Nav link icons"
          />
          Message
        </li>
        <li>
          <img
            src="/dashboard-icons/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Nav link icons"
          />
          Transactions
        </li>
      </NavLinks>

      <Profile>
        <span>
          <img
            src="/dashboard-icons/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
            alt="profile pic"
          />
        </span>

        <ProDescription>
          <span style={{ fontWeight: "Bold" }}>Dr. Jose Simmons</span>
          <span>General Practitioner</span>
        </ProDescription>
        <div>
          <PiLineVerticalThin />
        </div>
        <Settings>
          <img
            src="/dashboard-icons/settings_FILL0_wght300_GRAD0_opsz24.svg"
            alt="settings icon"
          />
          <img
            src="/dashboard-icons/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
            alt="settings icon"
          />
        </Settings>
      </Profile>
    </StyledNav>
  );
}

export default Nav;
