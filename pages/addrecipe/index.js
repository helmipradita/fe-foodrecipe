import React from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from './Recipe.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const recipeDetail = () => {
  return (
    <div>
      <Layout>
        <div className={styles.addrecipe}>
          <InputGroup size="lg" className={styles.photo}>
            <Form.Control
              aria-label="Large"
              placeholder="Add Photo"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <InputGroup size="lg" className={styles.title}>
            <Form.Control
              aria-label="Large"
              placeholder="Title"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <InputGroup size="lg" className={styles.igredients}>
            <Form.Control
              aria-label="Large"
              placeholder="Igredients"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <InputGroup size="lg" className={styles.video}>
            <Form.Control
              aria-label="Large"
              placeholder="Video"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <button type="submit" className="btn btn-warning">
            Send
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

export default recipeDetail;
