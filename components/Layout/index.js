import Link from 'next/link';
import React from 'react';
import styles from './Layout.module.css';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="container">{children}</div>
      </div>
    </>
  );
};

export default Layout;
