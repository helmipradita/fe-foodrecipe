import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from './Recipe.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../../components/Navbar/Navbar';

export async function getServerSideProps(context) {
  try {
    const { token } = context.req.cookies;

    const id = context.params.id;
    console.log(id);
    const result = await axios.get(process.env.REST_API + `/recipes/${id}`);
    const data = result.data.data;
    console.log(data);

    console.log(id);
    if (!token) {
      return {
        props: {
          data,
          isLogin: false,
        },
      };
    }

    return {
      props: {
        isLogin: true,
        token,
        data,
      },
    };
  } catch (e) {
    console.log(e);
  }
}

const RecipeDetail = ({ isLogin, data, token }) => {
  const [comment, setComment] = useState([]);
  const [postComment, setPostComment] = useState([]);
  useEffect(() => {
    const fetchComment = async () => {
      const result = await axios.get(
        process.env.REST_API + `/comment/${data.id}`
      );
      setComment(result.data.data);
    };

    fetchComment();
  }, []);

  const handleSave = async (id) => {
    try {
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const bodyParameters = { id: `${id}` };

      console.log(id, 'id resep');
      await axios.post(
        process.env.REST_API + `/save/${id}`,
        bodyParameters,
        header
      );

      Swal.fire('success', 'Anda Berhasil Bookmark Recipes', 'success');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (id) => {
    try {
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const bodyParameters = { id: `${id}` };

      console.log(id, 'id resep');
      await axios.post(
        process.env.REST_API + `/like/${id}`,
        bodyParameters,
        header
      );

      Swal.fire('success', 'Anda Berhasil Like Recipes', 'success');
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setPostComment({
      ...postComment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios.post(
        process.env.REST_API + `/comment/${data.id}`,
        postComment,
        header
      );

      Swal.fire('Success', 'Post Comment Success', 'success');
    } catch (err) {
      Swal.fire('Warning', 'Post Comment Failed', 'error');
    }
  };
  return (
    <div>
      <header>
        <Navbar isLogin={isLogin} />
      </header>
      <Layout>
        <div>
          <h3 className="text-center">{data.title}</h3>
        </div>

        <div
          className="row d-flex justify-content-center"
          style={{ marginLeft: '50px' }}
        >
          <div className="row d-flex justify-content-center">
            <img src={data.photo} style={{ width: '700px', height: '500px' }} />
            <div className="d-flex justify-content-center">
              <Image
                onClick={() => handleSave(data.id)}
                className="mt-3"
                src="/bookmark.png"
                width={50}
                height={50}
                alt="save"
                style={{ cursor: 'pointer' }}
              />
              <Image
                onClick={() => handleLike(data.id)}
                className="mt-3"
                src="/Like1.png"
                width={50}
                height={50}
                alt="like"
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>

        <div className={styles.ingredients}>
          <h3>Ingredients</h3>
          <ul>
            <li>{data.ingredients}</li>
          </ul>
        </div>

        <div className={styles.video}>
          <h3>Video Step</h3>
          <a href="/youtube" />
          {data.videos}
        </div>

        <div className={styles.comment}>
          <InputGroup size="lg" className={styles.input}>
            <Form.Control
              aria-label="Large"
              placeholder="Comment:"
              aria-describedby="inputGroup-sizing-sm"
              name="comment"
              onChange={handleChange}
            />
          </InputGroup>
          <button className="btn btn-warning" onClick={handleSubmit}>
            Send
          </button>
        </div>

        <div className={styles.commentList}>
          <h3>Comment list</h3>
          <div
            className="row justify-content-start mt-3"
            style={{ marginLeft: '10px' }}
          >
            {comment ? (
              comment.map((item) => (
                <>
                  <div className="row" key={item}>
                    <div className="col-1">
                      <Image
                        src={item.photo}
                        width={50}
                        height={50}
                        style={{ borderRadius: '50%' }}
                        alt="comment"
                      />
                    </div>
                    <div className="col-5">
                      <h6>{item.name}</h6>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <h3>Loading</h3>
            )}
          </div>
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

export default RecipeDetail;
