import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from './Profile.module.css';
import { Tabs, Tab } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Swal from 'sweetalert2';

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

  return {
    props: {
      isLogin: true,
      token: token,
    },
  };
};

const Profile = ({ isLogin, token }) => {
  const router = useRouter();
  const [key, setKey] = useState('myrecipe');
  const [recipes, setRecipes] = useState([]);
  const [save, setSave] = useState([]);
  const [like, setLike] = useState([]);
  const [profile, setProfile] = useState([]);
  const [users, setUsers] = useState([]);
  const protect = {
    headers: { Authorization: `Bearer ${token}` },
  };
  console.log(token, 'token');
  useEffect(() => {
    // const getProfile = async () => {
    //   try {
    //     let result = await axios.get(process.env.REST_API + `/users/`, {
    //       ...protect,
    //     });
    //     setProfile(result.data.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    const getRecipes = async () => {
      try {
        let result = await axios.get(process.env.REST_API + `/recipes/`, {
          ...protect,
        });
        setRecipes(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getSave = async () => {
      try {
        let result = await axios.get(process.env.REST_API + `/save/`, {
          ...protect,
        });
        setSave(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getLike = async () => {
      try {
        let result = await axios.get(process.env.REST_API + `/like/`, {
          ...protect,
        });
        setLike(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRecipes(), getSave(), getLike();
  }, []);

  const handleDelete = async (id) => {
    // const router = useRouter();
    try {
      await axios.delete(process.env.REST_API + `/recipes/${id}`, {
        ...protect,
      });
      Swal.fire('Success', 'Delete Berhasil', 'success');
      router.push(`/profile`);
    } catch (err) {
      console.log(err);
      Swal.fire('ERROR', 'Delete Gagal', 'error');
    }
  };

  const handleDeleteSave = async (id) => {
    // const router = useRouter();
    try {
      await axios.delete(process.env.REST_API + `/save/${id}`, {
        ...protect,
      });
      Swal.fire('Success', 'Delete Berhasil', 'success');
      router.push(`/profile`);
    } catch (err) {
      console.log(err);
      Swal.fire('ERROR', 'Delete Gagal', 'error');
    }
  };

  const handleDeleteLike = async (id) => {
    // const router = useRouter();
    try {
      await axios.delete(process.env.REST_API + `/like/${id}`, {
        ...protect,
      });
      Swal.fire('Success', 'Delete Berhasil', 'success');
      router.push(`/profile`);
    } catch (err) {
      console.log(err);
      Swal.fire('ERROR', 'Delete Gagal', 'error');
    }
  };

  return (
    <div>
      <header>
        <Navbar isLogin={isLogin} />
      </header>
      <Layout>
        <br /> <br /> <br /> <br /> <br /> <br />
        <h4>Halloo</h4>
        {profile ? (
          profile.map((item) => (
            <div className={` ${styles.top}`} key={item}>
              <Image
                className={` ${styles.photo}`}
                src={item.photo}
                alt="Photo users"
                width={100}
                height={100}
              />
              <h4 className="mt-3"> {item.name}</h4>
            </div>
          ))
        ) : (
          <div>
            <h3>Loading</h3>
          </div>
        )}
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="myrecipe" title="My Recipe">
            <div className="row">
              {recipes ? (
                recipes.map((item) => (
                  <div className="col-3 mb-4" key={item}>
                    <div style={{ borderRadius: '10%', overflow: 'hidden' }}>
                      <Image
                        src={item.photo}
                        height={300}
                        width={300}
                        alt="like"
                        onClick={() => router.push(`/recipes/${item.id}`)}
                      />
                    </div>
                    <h4
                      style={{
                        marginTop: '-40px',
                        marginLeft: '13px',
                        color: 'white',
                      }}
                    >
                      {item.title}
                    </h4>
                    Created: {item.created_at}
                    <div
                      className="d-flex"
                      style={{
                        marginTop: '15px',
                        marginLeft: '50px',
                        paddingLeft: '20px',
                        color: 'white',
                      }}
                    >
                      <div onClick={() => handleDelete(item.id)}>
                        <button type="button" className="btn btn-danger">
                          Delete
                        </button>
                      </div>
                      |{/* EDIT */}
                      <div
                        onClick={() => router.push(`/recipes/edit/${item.id}`)}
                      >
                        <button type="button" className="btn btn-info">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <h1>Loading</h1>
                </div>
              )}
            </div>
          </Tab>
          <Tab eventKey="savedrecipe" title="Save Recipe">
            <div className="row">
              {save ? (
                save.map((item) => (
                  <div className="col-3" key={item}>
                    <div style={{ borderRadius: '10%', overflow: 'hidden' }}>
                      <Image
                        src={item.photo}
                        height={300}
                        width={300}
                        alt="like"
                        onClick={() => router.push(`/recipes/${item.id}`)}
                      />
                    </div>
                    <h4
                      style={{
                        marginTop: '-40px',
                        marginLeft: '13px',
                        color: 'white',
                      }}
                    >
                      {item.recipes_name}
                    </h4>
                    Save in : {item.created_at}
                    <div
                      className="d-flex "
                      style={{
                        marginTop: '15px',
                        marginLeft: '50px',
                        paddingLeft: '30px',
                        color: 'white',
                      }}
                    >
                      <div onClick={() => handleDeleteSave(item.id)}>
                        <button type="button" className="btn btn-danger">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <h1>Loading</h1>
                </div>
              )}
            </div>
          </Tab>
          <Tab eventKey="likedrecipe" title="Like Recipe">
            <div className="row">
              {like ? (
                like.map((item) => (
                  <div className="col-3" key={item.id}>
                    <div style={{ borderRadius: '10%', overflow: 'hidden' }}>
                      <Image
                        src={item.photo}
                        height={300}
                        width={300}
                        alt="like"
                        onClick={() => router.push(`/recipes/${item.id}`)}
                      />
                    </div>
                    <h4
                      style={{
                        marginTop: '-40px',
                        marginLeft: '13px',
                        color: 'white',
                      }}
                    >
                      {item.recipes_name}
                    </h4>
                    Like in : {item.created_at}
                    <div
                      className="d-flex"
                      style={{
                        marginTop: '15px',
                        marginLeft: '50px',
                        paddingLeft: '30px',
                        color: 'white',
                      }}
                    >
                      <div onClick={() => handleDeleteLike(item.id)}>
                        <button type="button" className="btn btn-danger">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <h1>Loading</h1>
                </div>
              )}
            </div>
          </Tab>
        </Tabs>
      </Layout>
      <footer className={styles.footer}>
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

export default Profile;
