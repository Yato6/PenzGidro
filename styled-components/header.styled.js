import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 812px) {
    flex-direction: column;
  }

  div:nth-child(1) {
    margin-top: 0;
    padding-top: 0;
    width: 880px;
    height: 800px;
    background: #5551f7;

    @media (max-width: 1900px) {
      width: 860px;
    }

    @media (max-width: 1840px) {
      width: 800px;
    }

    @media (max-width: 1720px) {
      width: 720px;
    }


    @media (max-width: 812px) {
      width: 1655px;
    }

    a {
      cursor: pointer;
      position: absolute;
      font-family: Gilroy;
      top: 236px;
      left: 85.5px;
      font-size: 14px;
      line-height: 22px;
      color: #f6f6f6;
      opacity: 0.5;
    }

    a:nth-last-of-type(1) {
      left: 165px;
    }

    strong {
      position: absolute;
      top: 246px;
      left: 152px;
      width: 1px;
      height: 8px;
      background-color: #c4c4c4;
      transform: rotate(-135deg);
    }

    span {
      position: absolute;
      top: 241px;
      left: 152px;
      width: 1px;
      height: 8px;
      background-color: #c4c4c4;
      transform: rotate(-45deg);
    }

    img {
      position: absolute;
      left: 80px;
      top: 33px;
    }

    h2 {
      position: absolute;
      top: 35.5px;
      left: 139.4px;
      color: white;
      line-height: 100%;
      font-size: 13px;
      letter-spacing: 0.152em;
      font-family: Gilroy;
      text-transform: uppercase;
    }

    h1 {
      position: absolute;
      top: 229.5px;
      left: 80px;
      font-family: Gilroy;
      font-size: 84px;
      font-style: normal;
      line-height: 84px;
      color: #f6f6f6;
      font-weight: 600;
    }

    p {
      position: absolute;
      color: #f6f6f6;
      font-size: 25px;
      font-family: Gilroy;
      top: 606px;
      left: 80px;
      line-height: 40px;

      @media (max-width: 1560px) {
        left: 40px;
    }
    }
  }

  .plash {
    position: absolute;
    width: 880px;
    height: 1px;
    top: 583px;
    background: #d6d6d6;
    transform: matrix(-1, 0, 0, 1, 0, 0);

    @media (max-width: 1900px) {
      width: 860px;
    }

    @media (max-width: 1840px) {
      width: 800px;
    }

    @media (max-width: 1790px) {
      width: 784px;
    }

    @media (max-width: 1778px) {
      width: 784px;
    }


    @media (max-width: 1720px) {
      width: 720px;
    }

    @media (max-width: 1560px) {
      width: 683px
    }

  
  }

  .tanksAndSmokeStacks {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
      url("../img/tanks-and-smokestacks-P8YMA6G.jpg");
    height: 800px;
    width: 960px;
    background-position: 100%;

    @media (max-width: 1900px) {
      width: 940px;
    }

    @media (max-width: 1840px) {
      width: 940px;
    }

    @media (max-width: 1720px) {
      width: 895px;
    }

    @media (max-width: 1540px) {
      width: 860px;
    }
    
  }
`;
