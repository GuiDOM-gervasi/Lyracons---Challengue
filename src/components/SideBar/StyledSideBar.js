import styled from "styled-components";

export const StyledSideBar = styled.aside`
  width: 12.5rem;
  height: 38.6rem;
  top: 4.1rem;
  background-color: ${({ color }) => color};
  margin: 1rem auto auto 6.8%;
  h2 {
    opacity: ${({ hello }) => (hello ? 1 : 0)};
    margin: 1rem 0.5rem;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;
