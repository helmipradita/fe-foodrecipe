import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../../../components/Navbar/Navbar';
// import Navbar from '../../components/Navbar/Navbar';

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

const EditRecipes = ({ islogin, token }) => {
  const router = useRouter();
  const { id } = router.query;
  const [photo, setPhoto] = useState({});
  const [videos, setVideos] = useState({});
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const handlePhoto = (e) => {
    setPhoto({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleEdit = async () => {
    try {
      const data = new FormData();
      data.append('title', title);
      data.append('ingredients', ingredients);
      data.append('photo', photo.file);
      data.append('videos', videos);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.put(process.env.REST_API + `/recipes/${id}`, data);
      Swal.fire('Success', 'Edit Recipes Sukses', 'success');
      router.push(`/recipes/${id}`);
    } catch (error) {
      console.log(error);
      Swal.fire('Errror', 'Edit Recipes gagal', 'error');
    }
  };

  return (
    <div>
      {' '}
      <header>
        <Navbar isLogin={islogin} />
      </header>
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
            onChange={handlePhoto}
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
        <button className="btn btn-primary mt-4" onClick={handleEdit}>
          Input
        </button>
      </div>
    </div>
  );
};

export default EditRecipes;
