import Image from 'next/image';
import styles from './Forgot.module.css';
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
                <h3 className={` ${styles.welcome}`}>Forgot Password?</h3>
                <p className="text-secondary text-center">
                  We just need your registered e-mail address to send your
                  password resend
                </p>

                <br />

                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control "
                  placeholder="email@test.com"
                />

                <div className="d-grid">
                  <Link
                    className={`btn btn-warning btn-lg ${styles.btncustom}`}
                    href="/coderesetpassword"
                  >
                    Send E-mail
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
