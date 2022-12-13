import Image from 'next/image';
import styles from './Login.module.css';
import Logo from '../../public/iconLogo.png';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const config = {
        withCredentials: true,
      };
      const result = await axios.post(
        'http://localhost:8001/users/login',
        user,
        config
      );
      console.log(user);
      if (result.data.message === 'email not found') {
        Swal.fire(
          'Warning',
          'Email Not Found, Please check if your email are registered',
          'error'
        );
        //router push
      } else if (result.data.message === 'wrong password') {
        Swal.fire('Warning', 'Wrong Password', 'error');
      } else {
        const token = result.data.data.token;
        const data = {
          token: token,
        };
        const cookie = await fetch('/api/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const checkToken = await cookie.json();
        if (!checkToken) {
          return Swal.fire('Warning', 'Login Failed', 'error');
        }
        Swal.fire('Success', 'Login Success,Returning to home', 'success');
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
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
              <form action="" className="row g-3 m-5">
                <h3 className={` ${styles.welcome}`}>Welcome</h3>
                <p className="text-secondary text-center">
                  Log in into your exiting account
                </p>

                <br />

                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  name="email"
                  className="form-control "
                  placeholder="email@test.com"
                  onChange={handleChange}
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
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
                  <button
                    className={`btn btn-warning btn-lg ${styles.btncustom}`}
                    title={loading ? 'Logging in..' : 'Login'}
                    onClick={handleSubmit}
                  >
                    Log in
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
                    <Link href="/register">
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

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  console.log(token);
  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        isLogin: false,
      },
    };
  }
};

export default Login;
