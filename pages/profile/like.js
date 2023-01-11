import React from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from './Profile.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

function Profile() {
  return (
    <div>
      <Layout>
        <br /> <br /> <br /> <br /> <br /> <br />
        <div className={` ${styles.top}`}>
          <Image
            className={` ${styles.photo}`}
            src="/landingpage1.png"
            alt="Photo 1"
            width={100}
            height={100}
          />
          <h4 className="mt-3">Helmi Pradita</h4>
        </div>
        <div className={styles.tabs}>
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link " aria-current="true" href="/profile">
                    My Recipe
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/profile/save">
                    Save Recipe
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/profile/like">
                    Like Recipe
                  </a>
                </li>
              </ul>
            </div>
            <div className={`card-body ${styles.recipe}`}>
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <Image
                      className=""
                      src="/profile1.png"
                      alt="Photo 1"
                      width={250}
                      height={150}
                    />
                    <h3
                      className="text-white"
                      style={{ marginTop: '-35px', marginLeft: '10px' }}
                    >
                      Lorem ipsum
                    </h3>
                  </div>

                  <div className="col-md-3">
                    <Image
                      className=""
                      src="/profile1.png"
                      alt="Photo 1"
                      width={250}
                      height={150}
                    />
                    <h3
                      className="text-white"
                      style={{ marginTop: '-35px', marginLeft: '10px' }}
                    >
                      Lorem ipsum
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <footer className={styles.footer}>
        <div className={styles.tag}>
          <p>Product</p>
          <p>Company</p>
          <p>Learn More</p>
          <p>Get In Touch</p>
        </div>
      </footer>
    </div>
  );
}

export default Profile;
