import { CFooter, CLink } from '@coreui/react';
import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
    return (
        <div className='mb-0'>
            <CFooter>
  <div>
    <CLink href="https://coreui.io">CoreUI</CLink>
    <span>&copy; 2021 creativeLabs.</span>
  </div>
  <div>
    <span>Powered by</span>
    <CLink href="https://coreui.io">CoreUI</CLink>
  </div>
</CFooter>
        </div>
    );
};

export default Footer;