import styled from "styled-components";

export const StyledProducts = styled.div`
  display: flex;
  height: 629px;
  .container {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 1rem;
  }
  @media (max-width: 703px) {
    .container {
    justify-content: center;
      width: 100%;
      margin: 0;
    }
  }
`;
