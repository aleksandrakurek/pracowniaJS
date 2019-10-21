import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'globalStyle';

import Footer from '../Footer/Footer';
import '../layout.css';

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;