import Image from 'next/image';
import styles from './Login.module.css';
import Logo from '../../public/iconLogo.png';
import Link from 'next/link';

export default function Index() {
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
                  type="email"
                  className="form-control "
                  placeholder="email@test.com"
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
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
                    href="/"
                  >
                    Log in
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
}
