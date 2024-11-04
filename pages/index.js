import styles from "../styles/Home.module.css";

import Image from "next/image";

//Meus componentes
import Card from "../components/Card";

export async function getStaticProps() {
	//Aqui definimos a quantidade que queremos pedir, quanto mais, mais demora para o load
  const maxPokemons = 255; 
  //Rota da API
  const api = `https://pokeapi.co/api/v2/pokemon/`; 

	//Essa API podemos colocar o limit
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  
  //Transformar em json
  const data = await res.json();

  //Criar o indice de cada pokemon, pois essa API vem apenas o nome e uma URL
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home( {pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width={50}
          height={50}
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
          {pokemons.map((pokemon)=> (
          <Card key= {pokemon.id} pokemon={pokemon}/>
          ))}
      </div>
    </>
    
  );
}
