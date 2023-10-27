import styled from "styled-components";

export const ButtonTitle = styled.button`
  button {
    font-size: 18px;
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  button:focus,
  button:hover {
    color: #fff;
  }

  button:focus:after,
  button:hover:after {
    width: 100%;
    left: 0%;
  }

  button:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;

export const ButtonMenu = styled.button`
  button {
    padding: 0.1em 0.25em;
    width: 12.1em;
    height: 4.2em;
    background-color: #233554;
    border: 0.08em solid #64ffda;
    border-radius: 0.3em;
    font-size: 8px;
    font-family: "Montserrat";
    font-weight: bold;
  }

  button span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0.4em;
    width: 8.25em;
    height: 2.5em;
    background-color: #212121;
    border-radius: 0.2em;
    font-size: 1.4em;
    color: #64ffda;
    border: 0.08em solid #64ffda;
    box-shadow: 0 0.4em 0.1em 0.019em #64ffda;
  }

  button span:hover {
    transition: all 0.5s;
    transform: translate(0, 0.4em);
    box-shadow: 0 0 0 0 #64ffda;
  }

  button span:not(hover) {
    transition: all 1s;
  }
`;
