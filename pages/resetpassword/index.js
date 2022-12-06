import Image from 'next/image';
import styles from './Reset.module.css';
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
              <form action="" className={`row  g-3 m-5`}>
                <label htmlFor="password">Create New Password</label>
                <input type="password" className="form-control " />

                <label htmlFor="password">New Password</label>
                <input type="password" className="form-control " />

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

                <div className="d-grid">
                  <Link
                    className={`btn btn-warning btn-lg ${styles.btncustom}`}
                    href="/login"
                  >
                    Reset Password
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
