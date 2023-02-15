import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

const Layout = ({ children, SEO }) => {
  return (
    <>
      {SEO && <NextSeo {...SEO} />}
      <main className='l'>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  SEO: PropTypes.object,
};

export default Layout;
