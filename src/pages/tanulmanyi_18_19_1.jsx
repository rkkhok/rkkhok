import { Helmet } from 'react-helmet';
import { SocialIcon } from 'react-social-icons';
import React from 'react';
import styled, { css } from 'react-emotion';

import NavBar from '../components/navbar';
import ScolarshipTable from '../components/scolarshiptable';

import osztondijdata from '../osztondij.json';

const LogoImg = styled.img`
  height: 50px;
  margin-bottom: 2rem;
`;

const MySocialIcon = styled(SocialIcon)`
  margin: 0 0.5rem;
`;

export default props => (
  <div>
    <Helmet>
      <title>Tanulmányi ösztöndíjak - 2018/19 Őszi félév | RKK HÖK</title>
      <meta name="description" content="A Rejtő karon a 2018/19-es tanév őszi félévében megitélt tanulmányi ösztöndíjak" />
    </Helmet>

    <NavBar title="Tanulmányi ösztöndíjak - 2018/19 Őszi félév" />
    <div
      className={css`
        margin-top: 30px;
      `}
    >
      <ScolarshipTable keys={osztondijdata.keys} values={osztondijdata.values} />
    </div>
  </div>
);
