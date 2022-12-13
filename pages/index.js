import Image from 'next/image';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Alert from '../components/Alert';

const Home = () => {
  //get popular
  const [get, setGet] = useState([]);
  const res = 'http://localhost:8001/recipes?sortBy=id&sortOrder=DESC&limit=6';

  useEffect(() => {
    axios
      .get(res)
      .then((result) => {
        result.data && setGet(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Layout>
        <div className="row">
          <div className={`col-md-6`}>
            <p className={styles.text}>Discover Recipe & Delicios Food</p>

            {/* <InputGroup size="lg" className={styles.input}>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup> */}
            <div className="search ms-2">
              <input
                type="text"
                className="form-control"
                name="search"
                placeholder="search"
              />
            </div>
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
            {get.map((p) => (
              <div key={p.id} className={`col-md-4 mb-5 `}>
                <div>
                  <Link href={`/recipe/${p.id}`}>
                    <img
                      className="rounded"
                      src={p.photo}
                      alt="popular2"
                      width={300}
                      height={300}
                    />
                  </Link>
                  <h4 style={{ marginTop: '-50px', marginLeft: '10px' }}>
                    {p.title}
                  </h4>
                </div>
              </div>
            ))}
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

export default Home;
