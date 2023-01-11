import Swal from 'sweetalert2';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const Navbar = ({ isLogin }) => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const result = await fetch('api/logout');
      const { logout } = await result.json();
      if (logout) {
        Swal.fire('Success', 'User Logout', 'success');
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
    console.log(isLogin);
  };
  return (
    <div className="container">
      <div className="navbar">
        <div className="d-flex flex-row">
          <div className="p-2">
            <Link className={styles.nav} href="/">
              Home
            </Link>
          </div>
          <div className="p-2">
            <Link className={styles.nav} href="/addrecipe">
              Add Recipe
            </Link>
          </div>
          <div className="p-2">
            <Link className={styles.nav} href="/profile">
              Profile
            </Link>
          </div>
          <div className="p-2">
            <Link className={styles.nav} href="/recipes/search">
              Search
            </Link>
          </div>
        </div>
        {!isLogin ? (
          <div className="d-flex flex-row-reverse">
            <p>
              <Link className={styles.nav} href={`/login`}>
                Login
              </Link>
            </p>
          </div>
        ) : (
          <div
            className="d-flex flex-row-reverse mt-2"
            style={{ marginRight: '60px' }}
          >
            <p onClick={handleLogout}>
              <Link className={styles.nav} href={`/`}>
                logout
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
