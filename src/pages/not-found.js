import styled from "@emotion/styled";
import { TbError404 } from "react-icons/tb";
import { Main } from "./ui";

const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
`;

function NotFound() {
  return (
    <Main>
      <TbError404 
        size="150px"
      />
      <Title>Page not Found</Title>
    </Main>
  )
}

export default NotFound;
