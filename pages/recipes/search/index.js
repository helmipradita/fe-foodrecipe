import axios from 'axios';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Recipe from '../../../components/Recipe/Recipe';
import { Form, InputGroup } from 'react-bootstrap';
import styles from './../Recipe.module.css';

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: true,
      },
    };
  }
  console.log(token, 'token ssr');
  return {
    props: {
      isLogin: token ? true : false,
      token: token,
    },
  };
};

export default function Search({ isLogin, token }) {
  const [recipe, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      const result = await axios.get(
        process.env.REST_API + `/recipes/all?search=${search}`
      );
      setRecipes(result.data.data);
      setLoading(false);
    };

    fetchRecipe();
  }, [search]);

  //Get Current Recipes
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = recipe.slice(indexOfFirstPost, indexOfLastPost);

  //Ganti halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <header>
        <Navbar isLogin={isLogin} />
      </header>
      <div className="container justify-align-center">
        <div className="flex-row">
          <InputGroup size="lg" className={styles.search}>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Search Restaurant,Food"
              id="right-search"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </InputGroup>
          <input className="rounded-pill" />
          <Recipe recipe={currentPost} loading={loading} />
          {/* <Pagination
            postPerPage={postPerPage}
            totalPost={recipe.length}
            paginate={paginate}
          /> */}
        </div>
      </div>
    </>
  );
}
