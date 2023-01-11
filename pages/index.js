import Image from 'next/image';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Alert from '../components/Alert';
import Navbar from '../components/Navbar/Navbar';
import Router from 'next/router';

const Home = ({ isLogin, href }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      try {
        const limit = 8;
        let result = await axios.get(
          process.env.REST_API + `/recipes/all?limit=${limit}`
        );
        setData(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    Router.push(href);
  };

  return (
    <div>
      <header>
        <Navbar isLogin={isLogin} />
      </header>
      <Layout>
        <div className="row">
          <div className={`col-md-6`}>
            <p className={styles.text}>Discover Recipe & Delicios Food</p>

            <InputGroup size="lg" className={styles.input}>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search Restaurant,Food"
              />
            </InputGroup>
          </div>

          <div className="col-md-6">
            <div className={`col-md-6 offset-md-9 ${styles.bgPhoto}`}></div>
            <div>
              <Image
                className={styles.photo1}
                src="/landingpage1.png"
                alt="Photo 1"
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className={styles.popular}>
            <div className={styles.text1}>
              <p>Popular For You !</p>
            </div>
          </div>

          <div className="col-md-6">
            <div>
              <Image
                className={styles.photo2}
                src="/landingpage2.png"
                alt="Photo 2"
                width={400}
                height={400}
              />
            </div>
            <p className={styles.popularFor1}>
              Healthy Bone Broth Ramen (Quick & Easy)
            </p>
            <p className={styles.popularFor2}>
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That’s right!
            </p>
            <button
              type="
            submit"
              className={`btn btn-warning ${styles.popularBtn1}`}
            >
              Learn More
            </button>
          </div>

          <div className={styles.newRecipe}>
            <div className={styles.text2}>
              <p>New Recipe</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className={`col-md-6 offset-md-9 ${styles.bgPhoto3}`}></div>
            <div>
              <Image
                className={styles.photo3}
                src="/landingpage3.png"
                alt="Photo 3"
                width={400}
                height={400}
              />
            </div>
            <p className={styles.popularFor3}>
              Healthy Bone Broth Ramen (Quick & Easy)
            </p>
            <p className={styles.popularFor4}>
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That’s right!
            </p>
            <button
              type="
            submit"
              className={`btn btn-warning ${styles.popularBtn2}`}
            >
              Learn More
            </button>
          </div>

          <div className={styles.popularRecipe}>
            <div className={styles.text3}>
              <p>Popular Recipes</p>
            </div>
          </div>

          <div className="card-group" style={{ marginTop: '1900px' }}>
            {data ? (
              data.map((item, key) => (
                <div className="col-3 mt-5 d-flex flex-column" key={item.id}>
                  <img
                    src={item.photo}
                    style={{ height: '300px', width: '300px' }}
                    className="rounded"
                    onClick={() => Router.push(`/recipes/${item.id}`)}
                  />
                  <h6
                    style={{
                      marginTop: '-40px',
                      marginLeft: '20px',
                      fontSize: '20px',
                      color: 'white',
                    }}
                    className=""
                  >
                    {item.title}
                  </h6>
                </div>
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

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  return {
    props: {
      isLogin: token ? true : false,
    },
  };
};

export default Home;
