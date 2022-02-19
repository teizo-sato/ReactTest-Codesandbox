import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <Slink to="/">HOME</Slink>
      <Slink to="/users">USERS</Slink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 0 8px;
`;

const Slink = styled(Link)`
  margin: 0 8px;
`;
