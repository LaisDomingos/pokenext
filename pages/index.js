import styles from "../styles/Home.module.css";
import { useState } from "react"; //// Hook para controlar o estado de busca
import Image from "next/image";

//Meus componentes
import Card from "../components/Card";

export async function getStaticProps() {
  const maxPokemons = 255; 
  const api = `https://pokeapi.co/api/v2/pokemon/`; 

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  const [search, setSearch] = useState(""); // Declara o "search" com o valor inicial como uma string vazia

  // Filtrar os Pokémon de acordo com o termo de busca
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

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
      <div className={styles.search_container}>
        <input
          type="text"
          placeholder="Buscar Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Atualiza o estado "search" com o valor digitado pelo usuário
          className={styles.search_input}
        />
      </div>
      <div className={styles.pokemon_container}>
        {filteredPokemons.map((pokemon) => ( //Mapeia a lista filtrada de Pokémon para exibir apenas os correspondentes
          <Card key={pokemon.id} pokemon={pokemon} /> //Renderiz os pokemons
        ))}
      </div>
    </>
  );
}
