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
      padding-top: 15px;
      list-style: none;
      font-weight: 600;
      cursor: pointer;
    }
    .menuItem1 {
      .subMenu {
        display: none;
        background-color: ${grey};
        top: 3.1rem;
        .subli {
          font-size: 14px;
          margin: auto;
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

  @media (max-width: 703px) {
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
      width: 100vw;
      position: absolute;
      display: flex;
      flex-direction: column;
      display: ${({ active }) => (active ? "flex" : "none")};
      left: 0;
      margin: 4.3rem 0;
      padding: 2rem 0;
      background-color: ${white};
      .menuItem1 {
        .subMenu {
        }
        &:hover > ul {
          display: none;
        }
      }
      li {
        padding: 0;
        margin: 0 0 3rem 2.2rem;
      }
    }
  }
`;
