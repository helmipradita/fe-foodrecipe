export async function getStaticProps() {
  const res = await fetch('http://localhost:8001/recipes');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const user = ({ data }) => {
  return (
    <div>
      <div>list user</div>
      {data.map((item) => (
        <h5 key={item.id}>{item.success}</h5>
      ))}
    </div>
  );
};

export default user;
