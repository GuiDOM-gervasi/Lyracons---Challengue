import styled from "styled-components";
import { black, grey, lightgrey } from "../../containers/App/GlobalStyles";

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 12.5rem;
  height: 18.7rem;
  margin: 1rem 1rem 0 1rem;
  background-color: ${lightgrey};
  border: solid 1px ${black};
  padding: 12px 15px 17px 15px;
  img {
    border: solid 1px ${black};
    width: 170px;
    height: 170px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 3.5rem;
    width: 10.6rem;
    h3 {
      width: 6.3rem;
      font-size: 0.7rem;
    }
    span {
      font-size: 0.7rem;
    }
  }

  button {
    width: 10.6rem;
    height: 1.6rem;
    background-color: ${grey};
    border: none;
    font-weight: 600;
  }
`;
