import { injectGlobal } from 'emotion';
import React from 'react';
import { Helmet } from 'react-helmet';


import 'bootstrap/dist/css/bootstrap.min.css';

import { ContextProviderComponent } from '../utils/context';
import Navbar from './navbar';

const globalStyles = injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Muli, Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    background: white;
  }

  html,body {
  width :100%;
  height:100%;
  margin:0;
  padding: 0;
}
#___gatsby, #___gatsby > div {
  height: 100%
}


`;

const Layout = props => <ContextProviderComponent>{props.children}</ContextProviderComponent>;

export default Layout;
