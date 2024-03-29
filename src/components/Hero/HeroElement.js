import styled from "styled-components";
import pizza2 from "../../Assets/pizza2.jpg";
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${pizza2});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0 rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: ;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 3.5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2.5rem, 10vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled(Link)`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
