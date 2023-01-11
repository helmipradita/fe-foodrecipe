import Image from 'next/image';
import styles from './Register.module.css';
import Logo from '../../public/iconLogo.png';
import Link from 'next/link';
import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

const Register = () => {
  const router = useRouter();
  const [users, setUsers] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const result = await axios.post(
        process.env.REST_API + '/users/register',
        users
      );

      Swal.fire('Success', 'Register Success', 'success');
      router.push('/login');
    } catch (err) {
      console.log(err);
      Swal.fire('Warning', 'Email Already Registered', 'error');
      router.push('/login');
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-6 ${styles.leftside}`}>
            <Image src={Logo} alt="logo" className={styles.logo} />
          </div>

          <div className="col-md-6 d-flex align-items-center">
            <div className="col-md-8 offset-2">
              <form action="" onSubmit={handleSubmit} className="row g-3 ">
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
                  onChange={handleChange}
                  name="name"
                />

                <label htmlFor="name">Email address</label>
                <input
                  type="email"
                  className="form-control "
                  placeholder="Enter email address"
                  onChange={handleChange}
                  name="email"
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  className="form-control "
                  placeholder="08xxxxxxxxxx"
                  onChange={handleChange}
                  name="phone"
                />

                <label htmlFor="password">Create New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create New Password"
                  onChange={handleChange}
                  name="password"
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
              </form>
              <div className="d-grid gap-2">
                <button
                  className={`btn btn-warning btn-lg ${styles.btncustom}`}
                  onClick={handleSubmit}
                >
                  Register Account
                </button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
