import Link from 'next/link';
import React from 'react';
import styles from './Layout.module.css';
import Nav from 'react-bootstrap/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Nav
          activeKey="/"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link className={styles.nav} href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.nav} href="/addrecipe">
              Add Recipe
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.nav} href="/profile">
              Profile
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="container">{children}</div>
      </div>
    </>
  );
};

export default Layout;
