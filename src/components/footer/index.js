import React from "react";
import {
  Container,
  Row,
  Column,
  Title,
  Text,
  Link,
  Break,
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Cloumn = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
