import Image from "next/image"

import styles from '../styles/About.module.css'
export default function About(){
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum adipisci explicabo nulla vel deserunt at ut, magnam debitis consectetur quisquam ex deleniti unde pariatur officia? Adipisci tenetur eveniet sequi distinctio.</p>
            <Image src='/images/charizard.png' width={300} height={300} alt="Charizard"/>
        </div>
    )
}