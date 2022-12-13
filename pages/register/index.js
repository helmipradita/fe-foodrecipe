import Image from 'next/image';
import styles from './Register.module.css';
import Logo from '../../public/iconLogo.png';
import Link from 'next/link';
import React, { SyntheticEvent, useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-6 ${styles.leftside}`}>
            <Image src={Logo} alt="logo" className={styles.logo} />
          </div>

          <div className="col-md-6 d-flex align-items-center">
            <div className="col-md-8 offset-2">
              <form action="" className="row g-3 m-5">
                <h3 className={styles.welcome}>Let's Get Started !</h3>
                <p className="text-secondary text-center">
                  Create new account to access all features
                </p>

                <br />

                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Name"
                />

                <label htmlFor="name">Email address</label>
                <input
                  type="email"
                  className="form-control "
                  placeholder="Enter email address"
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  className="form-control "
                  placeholder="08xxxxxxxxxx"
                />

                <label htmlFor="password">Create New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create New Password"
                />

                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                />

                <div className="form-check">
                  <input
                    className={`form-check-input ${styles.checkbox}`}
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label
                    className={`form-check-label `}
                    htmlFor="flexCheckDefault"
                  >
                    I agree of terms & conditions
                  </label>
                </div>

                <div className="d-grid gap-2">
                  <Link
                    className={`btn btn-warning btn-lg ${styles.btncustom}`}
                    href="/login"
                  >
                    Register Account
                  </Link>
                </div>

                <div className={`${styles.forgot}`}>
                  <Link href="/forgotpassword">
                    <p className="text-secondary ">Forgot password ?</p>
                  </Link>
                </div>

                <div className="text-center">
                  <p className="text-secondary ">
                    Don't have an account?{' '}
                    <Link href="/login">
                      <span className="text-warning">Sign Up</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
