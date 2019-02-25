import React from 'react';
import styled, { css } from 'react-emotion';

import { Helmet } from 'react-helmet';

import rkklogo from '../components/rkkhok.svg';

import { SocialIcon } from 'react-social-icons';

const LogoImg = styled.img`
  height: 200px;
  margin-bottom: 2rem;
`;

const MySocialIcon = styled(SocialIcon)`
  margin: 0 0.5rem;
`;

export default props => (
  <div
    className={css`
      display: grid;
      height: 90%;
      width: 100%;
      text-align: center;
    `}
  >
  <Helmet>
  <title>RKK HÖK</title>
  </Helmet>

    <div
      className={css`
        margin: auto;
      `}
    >
      <LogoImg src={rkklogo} alt="RKK HÖK Logó" />
      <div>
        <MySocialIcon url="https://facebook.com/rkkhok" />
        <MySocialIcon url="https://instagram.com/rejtohok" />
        <MySocialIcon url="mailto:rkkhok@rkkhok.hu" />
      </div>
    </div>
  </div>
);
