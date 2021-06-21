import styled from "styled-components";

export const StyledSideBar = styled.aside`
width: 12.5rem;
height: 38.6rem;
top: 4.1rem;
background-color: ${({color})=>color} ;
margin: 1rem auto auto 6.8%;
@media (max-width: 480px) {
    display: none;
  }
`
;