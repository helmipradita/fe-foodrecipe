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
        <div>
          <h3 className="text-center">Loream Sandwich</h3>
          <Image
            className={styles.photo1}
            src="/detail1.png"
            alt="Photo 1"
            width={700}
            height={500}
          />
        </div>

        <div className={styles.igredients}>
          <h3>Igredients</h3>
          <ul>
            <li>2 Eggs</li>
            <li>2 tbsp mayonnaise</li>
            <li>3 slices bread</li>
            <li>a little butter</li>
            <li>⅓ carton of cress</li>
            <li>
              2-3 slices of tomato or a lettuce leaf and a slice of ham or
              cheese
            </li>
            <li>crisps , to serve</li>
          </ul>
        </div>

        <div className={styles.video}>
          <h3>Video Step</h3>
          <button type="submit" className="btn btn-warning"></button>
          <button type="submit" className="btn btn-warning"></button>
          <button type="submit" className="btn btn-warning"></button>
          <button type="submit" className="btn btn-warning"></button>
        </div>

        <div className={styles.comment}>
          <InputGroup size="lg" className={styles.input}>
            <Form.Control
              aria-label="Large"
              placeholder="Comment:"
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
