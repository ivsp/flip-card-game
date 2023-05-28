import Head from "next/head";
import styles from "@/styles/Home.module.css";
import useWindowSize from "@/hooks/useWindowSize";
import { CHARACTERS } from "@/global/const";
import { useState } from "react";
import Layaout from "@/components/layaout/layaout";
import { FaQuestion } from "react-icons/fa";

export default function Home() {
  const size = useWindowSize();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Head>
        <title>Flip Card Game</title>
        <meta
          name="description"
          content="Clásico juego de volteo de cartas. Incluye varias categorías para poder jugar con la que más te guste!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layaout>
        <section className={styles.cardsContainerLimits}>
          <h1 className={styles.cardsContainerLimits_title}>
            Selecciona una de las categorías para empezar a jugar!
          </h1>
          <div className={styles.cardsContainer}>
            {CHARACTERS.map((char) => (
              <div key={char.image} className={styles.cardsContainer__item}>
                <FaQuestion />
              </div>
            ))}
          </div>
        </section>
        <footer className={styles.footer}>Esto es el footer</footer>
      </Layaout>
    </>
  );
}
