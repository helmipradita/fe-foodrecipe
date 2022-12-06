export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
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
        <h5 key={item.id}>{item.name}</h5>
      ))}
    </div>
  );
};

export default user;
