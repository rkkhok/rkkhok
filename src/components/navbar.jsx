import React from 'react';

import styled from 'react-emotion';

import { Navbar, NavbarBrand } from 'reactstrap';

import rkklogo from './rkkhok.svg';

const LogoImg = styled.img`
  height: 50px;
`;

export default props => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
        <LogoImg src={rkklogo} />
      </NavbarBrand>
      {props.title}
    </Navbar>
  </div>
);
