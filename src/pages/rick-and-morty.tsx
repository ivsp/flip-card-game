import Head from "next/head";
import Layaout from "@/components/layaout/layaout";
import { useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import {
  CardData,
  GetRickMortyCharacterResults,
  RickMortyCharacter,
} from "@/interfaces/interfaces";
import styles from "@/styles/Rick.module.css";
import CharacterComponent from "@/components/characterComponents/characterComponent";
import useWindowSize from "@/hooks/useWindowSize";
import { BREAKPOINT_DESKTOP } from "@/global/const";

const RickAndMortyPage: NextPage<{ characters: RickMortyCharacter[] }> = ({
  characters,
}) => {
  const size = useWindowSize();
  const [numberOfImages, setNumberOfImages] = useState(
    size > BREAKPOINT_DESKTOP ? 9 : 8
  );
  const [selectedCharacters, setSelectedCharacters] = useState<CardData[] | []>(
    []
  );
  function shuffleAndSliceArray(n: number, array: RickMortyCharacter[]) {
    const shuffled: RickMortyCharacter[] = array.sort(
      () => 0.5 - Math.random()
    );
    const selected: RickMortyCharacter[] = shuffled.slice(0, n);
    return selected;
  }

  function shuffleAArray(array: CardData[]) {
    const shuffled: CardData[] = array.sort(() => 0.5 - Math.random());
    return shuffled;
  }
  useEffect(() => {
    if (size > BREAKPOINT_DESKTOP) setNumberOfImages(9);
    else setNumberOfImages(8);
  }, [size]);

  useEffect(() => {
    const suffleData = shuffleAndSliceArray(numberOfImages, characters);
    const data: CardData[] = suffleData.map((char, i) => {
      return {
        id: char.id,
        name: char.name,
        image: char.image,
        position: i,
      };
    });
    const duplicatedData = data.concat(data);
    const shuffleDuplicatedData = shuffleAArray(duplicatedData);
    setSelectedCharacters(shuffleDuplicatedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, numberOfImages]);

  /**
   * Crear una variable que recoja 2 cartas seleccionadas. Pasaremos por props para hacer un push a esa variable
   * Crear un useEfect que se ejecute cada vez que se actualiza la variable anterior.
   * 1. Si la longitud del array es 2 se comprueba si los id de las cartas son iguales
   * 2. Si lo son, asignar una clase especial para que no se ejecute el evento más
   * 3. Si no lo son, volver a voltear ambas cartas después de 2s
   * useEffect que recoja los datos de las cards seleccionadas
   */

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
        <h1 className={styles.cardsContainerLimits_title}>
          Rick and Morty page
        </h1>
        <article className={styles.cardsContainerLimits}>
          <div className={styles.cardsContainer}>
            {selectedCharacters.map((char, i) => (
              //   <div key={i} className={styles.cardsContainer__item}>
              <CharacterComponent
                key={i}
                name={char.name}
                image={char.image}
                id={char.id}
                position={i}
              />
              //   </div>
            ))}
          </div>
        </article>
      </Layaout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const { results }: GetRickMortyCharacterResults = await response.json();
  return {
    props: {
      characters: results,
    },
  };
};

export default RickAndMortyPage;
