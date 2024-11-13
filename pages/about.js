import Image from "next/image";
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>
                        Este projeto é o primeiro que criei utilizando Next.js, com o auxílio do canal de YouTube  
                        <strong> Matheus Battist - Hora de Codar</strong>.O objetivo é aprender a utilizar Next.js 
                        explorando o universo Pokémon, uma franquia repleta de criaturas fascinantes e ricas em 
                        história. Lançado no Japão em 1996, Pokémon permite que os jogadores capturem e treinem 
                        seus próprios “Pokémons” para batalhas em um mundo cheio de aventuras.
                    </p>
                </div>
                <Image className={styles.image} src='/images/charizard.png' width={300} height={300} alt="Charizard" />
            </div>
        </div>
    );
}
