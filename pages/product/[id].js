/*const Burger = ({ burger }) => {
  return (
    <>
      <title>{burger.title}</title>
      <h1>{burger.name}</h1>
      <p>{burger.desc}</p>
    </>
  );
};

export default Burger;
export async function getStaticProps({ params }) {
  const response = await fetch(
    "pages\api\api.js${params.id}"
  );
  const data = await response.json();

  return {
    props: {
      article: data,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("pages\api\api.js");
  const data = await response.json();

  return {
    fallback: false,
    paths: data.map((burger) => ({
      params: { id: burger.id.toString() },
    })),
  };
}*/
