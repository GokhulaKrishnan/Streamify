import React, { createContext, useState, useContext } from "react";
import {
  Container,
  Title,
  Inner,
  Frame,
  Item,
  Header,
  Body,
} from "./styles/accordion";
const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordianTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordianFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

// This is a particual FAQ thing
Accordion.Item = function AccordianItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

// This place is where the user clicks to open the body
Accordion.Header = function AccordianHeader({ children, ...restProps }) {
  // Here we are getting the state using useContext
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header // Here we can just put (!toggleShow) but its not a goodway becasue of batching
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Close" />
      )}
    </Header>
  );
};

// Here we are getting the state and opening the body when the user clicks
Accordion.Body = function AccordionBody({ children, ...restProps }) {
  // Get the state
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
