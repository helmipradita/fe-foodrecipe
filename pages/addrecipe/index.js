import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from './Recipe.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';

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

const AddRecipe = ({ isLogin, token }) => {
  // const router = useRouter();
  const [upload, setUpload] = useState(false);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [photo, setPhoto] = useState({});
  const [videos, setVideos] = useState([]);

  const handleImage = (e) => {
    setPhoto({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleVideo = (e) => {
    setVideos({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleRecipes = async () => {
    try {
      setUpload(true);
      const data = new FormData();
      data.append('title', title);
      data.append('ingredients', ingredients);
      data.append('photo', photo.file);
      data.append('videos', videos);
      // const config = {
      //   headers: {
      //     "content-type": "multipart/form-data",
      //     Authorization: `Bearer ${token}`,
      //   },
      // };
      const user = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(user, 'token');
      await axios.post(process.env.REST_API + '/recipes', data, user);
      Swal.fire('Success', 'Add recipes success', 'success');
    } catch (err) {
      Swal.fire('Failed', 'Add recipes fails', 'error');
      console.log(err);
    }
  };
  return (
    <div>
      <header>
        <Navbar isLogin={isLogin} />
      </header>
      <Layout>
        <form className="container ">
          <div className="col-10 offset-1">
            <input
              type="file"
              className="form-control mb-3"
              id="exampleFormControlInput1"
              placeholder="photo"
              style={{ backgroundColor: '#F6F5F4' }}
              accept="image/*"
              name="photo"
              onChange={handleImage}
            />
            <input
              type="text"
              className="form-control mb-3"
              id="exampleFormControlInput1"
              placeholder="title"
              style={{ backgroundColor: '#F6F5F4' }}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="form-control mb-3"
              id="exampleFormControlTextarea1"
              rows="3"
              type="text"
              placeholder="ingredients"
              style={{
                width: '100%',
                paddingBottom: '10%',
                paddingTop: '10%',
                backgroundColor: '#F6F5F4',
              }}
              name="ingredients"
              onChange={(e) => setIngredients(e.target.value)}
            />
            <input
              type="text"
              name="videos"
              className="form-control mb-3"
              id="exampleFormControlInput1"
              placeholder="videos"
              style={{ backgroundColor: '#F6F5F4' }}
              onChange={(e) => setVideos(e.target.value)}
            />
          </div>
        </form>
        <div className="col-8 offset-4">
          <button
            type="submit"
            className="btn btn-warning mb-3 text-white"
            style={{ width: '40%' }}
            onClick={handleRecipes}
          >
            Post
          </button>
        </div>
      </Layout>
      <footer className={styles.footer}>
        <h3>Eat, Cook, Repeat</h3>
        <p className="text-secondary">
          Share your best recipe by uploading here !
        </p>
        <div className={styles.tag}>
          <p>Product</p>
          <p>Company</p>
          <p>Learn More</p>
          <p>Get In Touch</p>
        </div>
      </footer>
    </div>
  );
};

export default AddRecipe;
