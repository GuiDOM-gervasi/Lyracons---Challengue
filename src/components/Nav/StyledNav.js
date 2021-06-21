import styled from "styled-components";
import { grey, lightgrey, white } from "../../containers/App/GlobalStyles";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  height: 3.12rem;
  background-color: ${grey};
  i {
    display: none;
  }
  img {
    margin: 11px 6rem auto 7.35%;
    width: 8.1rem;
    height: 1.6rem;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    width: 38%;
    li {
      width: 6.5rem;
      height: 100%;
      list-style: none;
      font-weight: 600;
      padding: 15px 0;
    }
    .menuItem1 {
      .subMenu {
        display: none;
        margin-top: 1rem;
        background-color: ${grey};
        li {
          font-size: 14px;
          padding: 0.3rem 0.1rem;
          border-bottom: solid 1px ${white};
          &:hover {
            background-color: ${lightgrey};
          }
        }
      }
      &:hover > ul {
        display: block;
        position: absolute;
      }
    }
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    height: 4.3rem;
    i {
      position: absolute;
      display: block;
      left: 0;
      font-size: 2rem;
      padding: 1.2rem;
    }

    img {
      margin: 18px auto;
      width: 10rem;
      height: 2rem;
    }
    .menu {
      position: absolute;
      display: flex;
      flex-direction: column;
      display: ${({ active }) => (active ? "flex" : "none")};
      left: 0;
      margin: 6.3rem 2.2rem;
      li {
        padding: 0;
        margin-bottom: 3rem;
      }
    }
  }
`;
