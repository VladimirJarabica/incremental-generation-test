const Pokemon = ({ name, img }) => {
  return (
    <div>
      Pokemon {name}!
      <br />
      <img src={img} />
    </div>
  );
};

export default Pokemon;

export async function getStaticProps({ params }) {
  const { pokemon } = params;
  console.log(`getting ${pokemon} data`);

  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    ).then((x) => x.json());

    return {
      props: {
        name: res.name,
        img: res.sprites.front_default,
      },
    };
  } catch (err) {
    return { props: {} };
  }
}

export async function getStaticPaths() {
  // Predefined routes
  return { paths: ["/pokemon/ditto"], fallback: "blocking" };
}
