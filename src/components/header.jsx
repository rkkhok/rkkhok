import React from 'react';
import styled from 'react-emotion';

const HeaderContainer = styled.h2`
  text-align: center;
`;

const SectionHeader = props => <HeaderContainer>{props.children}</HeaderContainer>;

export default SectionHeader;
