import Image from 'next/image';
import styles from './Code.module.css';
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
                <label htmlFor="code">Code 6 Digit</label>
                <input type="number" className="form-control " />

                <div className="d-grid">
                  <Link
                    className={`btn btn-warning btn-lg ${styles.btncustom}`}
                    href="/resetpassword"
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
