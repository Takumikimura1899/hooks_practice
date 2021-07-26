import { Layout } from 'antd';
import { useContext } from 'react';

import AppContext from './contexts/AppContext';

const Footer = () => {
  const { Footer } = Layout;

  const value = useContext(AppContext);
  return (
    <>
      <div>{value}</div>
      <Footer>Footer</Footer>
    </>
  );
};

export default Footer;
