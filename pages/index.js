import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const res = await fetch('http://localhost:8001/recipes');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const home = ({ data }) => {
  return (
    <div>
      <Layout>
        <div className="row">
          <div className={`col-md-6`}>
            <p className={styles.text}>Discover Recipe & Delicios Food</p>

            <InputGroup size="lg" className={styles.input}>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
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
              <p>Popular Recipe</p>
            </div>
          </div>

          {/* <div>
            {Object.values(data).map((item) => (
              <h5 key={item.id}>{item.title}</h5>
            ))}
          </div> */}

          <div className="col-md-4">
            <div>
              <Image
                className={styles.popular1}
                src="/popular1.png"
                alt="popular1"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <Image
                className={styles.popular2}
                src="/popular2.png"
                alt="popular2"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <Image
                className={styles.popular3}
                src="/popular3.png"
                alt="popular3"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <Image
                className={styles.popular4}
                src="/popular4.png"
                alt="popular4"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <Image
                className={styles.popular5}
                src="/popular5.png"
                alt="popular5"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <Image
                className={styles.popular6}
                src="/popular6.png"
                alt="popular6"
                width={300}
                height={300}
              />
            </div>
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
export default home;
