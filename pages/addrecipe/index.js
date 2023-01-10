import { useRouter } from 'next/router';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from './Recipe.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

const AddRecipe = () => {
  const res = 'http://localhost:8001/recipes';
  const [input, setInput] = useState({
    title: '',
    ingredients: '',
    videos: '',
  });

  const [photo, setPhoto] = useState([]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoto = (e) => {
    const handle = e.target.files[0];
    setPhoto(handle);
    console.log(handle);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', input.title);
    formData.append('ingredients', input.ingredients);
    formData.append('photo', photo, input.photo);
    formData.append('videos', input.videos);
    try {
      const result = await axios({
        method: 'POST',
        url: 'http://localhost:8001/recipes',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(result);
    } catch (error) {
      console.log('failed', error);
    }
  };

  // const postForm = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('photo', input.photo);
  //   formData.append('title', input.title);
  //   formData.append('ingredients', input.ingredients);
  //   formData.append('videos', input.videos);
  //   console.log(formData);
  //   axios
  //     .post(res, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     })
  //     .then((result) => {
  //       console.log(result, 'insert data success');
  //     })
  //     .catch((err) => {
  //       console.log(err.message, 'insert data fail');
  //     });
  // };

  return (
    <div>
      <Layout>
        <form className="container " onSubmit={handleUpload}>
          <div className="col-10 offset-1">
            <input
              type="file"
              name="photo"
              className="form-control mb-3"
              id="exampleFormControlInput1"
              placeholder="photo"
              style={{ backgroundColor: '#F6F5F4' }}
              accept="image/*"
              value={input.photo}
              onChange={handlePhoto}
            />
            <input
              type="text"
              name="title"
              className="form-control mb-3"
              id="exampleFormControlInput1"
              placeholder="title"
              style={{ backgroundColor: '#F6F5F4' }}
              value={input.title}
              onChange={handleChange}
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
              value={input.ingredients}
              onChange={handleChange}
              name="ingredients"
            />
            <input
              type="text"
              name="videos"
              className="form-control mb-3"
              id="exampleFormControlInput1"
              placeholder="videos"
              style={{ backgroundColor: '#F6F5F4' }}
              value={input.videos}
              onChange={handleChange}
            />
            <div className="col-8 offset-4">
              <button
                type="submit"
                className="btn btn-warning mb-3 text-white"
                style={{ width: '40%' }}
              >
                Post
              </button>
            </div>
          </div>
        </form>
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
