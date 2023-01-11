import React from 'react';
import styles from './Recipe.module.css';
import axios from 'axios';
import Router from 'next/router';
import { Image } from 'react-bootstrap';

export const Recipe = ({ recipe, loading, token }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {recipe.map((item, i) => {
        return (
          <div className="container col-12 mt-2" key={item}>
            <div
              className={styles.card}
              onClick={() => Router.push(`/recipes/${item.id}`)}
            >
              <div className="row">
                <div className="col">
                  <Image
                    src={item.photo}
                    style={{ width: '200px', height: '200px' }}
                    alt="photo"
                  />
                </div>
                <div className="col" style={{ marginTop: '40px' }}>
                  <h5>Author: {item.author}</h5>
                  <h5>Title: {item.title}</h5>
                  <p>Created: {item.created_at}</p>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
          // </div>
        );
      })}
    </div>
  );
};

export default Recipe;
