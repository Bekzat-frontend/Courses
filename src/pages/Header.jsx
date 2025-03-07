import { Globe, Bell, User } from "lucide-react";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <StyledIcons>
        <Globe size={27} />
        <Bell size={27} />
        <User size={27} />
        <select>
          <option> Выйты</option>
        </select>
      </StyledIcons>
      <StyledHr />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #e2e0e099;
  width: 77%;
  margin-left: 304px;
  padding: 10px 20px;
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  gap: 15px;
  align-items: center;
  padding-top: 25px;
`;
const StyledHr = styled.hr`
  margin-top: 30px;
  width: 98%;
`;

export default Header;
