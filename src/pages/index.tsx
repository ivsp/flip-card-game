import Head from "next/head";
import styles from "@/styles/Home.module.css";
import useWindowSize from "@/hooks/useWindowSize";
import { BREAKPOINT_DESKTOP, CHARACTERS } from "@/global/const";
import { useContext, useEffect, useState } from "react";
import Layaout from "@/components/layaout/layaout";
import { GetStaticProps, NextPage } from "next";
import {
  CardData,
  GetRickMortyCharacterResults,
  RickMortyCharacter,
} from "@/interfaces/interfaces";
import { useRouter } from "next/router";
import CharacterComponent from "@/components/characterComponents/characterComponent";
import Fireworks from "@fireworks-js/react";
import { CharactersContext } from "@/context/characters.context";

const Home: NextPage<{ rickCharacters: RickMortyCharacter[] }> = ({
  rickCharacters,
}) => {
  const size = useWindowSize();
  const router = useRouter();
  const { charactersTheme, setCharactersTheme } = useContext(CharactersContext);
  const [characters, setCharacters] = useState(rickCharacters);
  // const [charactersTheme, setCharactersTheme] = useState(
  //   "Rick and Morty characters"
  // );
  console.log(charactersTheme);
  const [numberOfImages, setNumberOfImages] = useState(
    size > BREAKPOINT_DESKTOP ? 9 : 8
  );
  const [selectedCharacters, setSelectedCharacters] = useState<CardData[] | []>(
    []
  );
  const [activesCards, setActivesCards] = useState([]);
  const [gameFinish, setGameFinish] = useState(false);
  const [resolveCards, setResolveCards] = useState(0);

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

  function restartGame() {
    router.reload();
    // actualizar la variable de estado que controla el fetch de datos
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
        activesCards: [],
        setActivesCards: () => {},
        resolveCards: 0,
        setResolveCards: () => {},
      };
    });
    const duplicatedData = data.concat(data);
    const shuffleDuplicatedData = shuffleAArray(duplicatedData);
    setSelectedCharacters(shuffleDuplicatedData);
  }, [size, numberOfImages, characters]);

  useEffect(() => {
    if (resolveCards === numberOfImages) setGameFinish(true);
  }, [numberOfImages, resolveCards, setGameFinish]);

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
        <h1 className={styles.cardsContainerLimits_title}>{charactersTheme}</h1>
        <article className={styles.cardsContainerLimits}>
          <div className={styles.cardsContainer}>
            {selectedCharacters.map((char, i) => (
              <CharacterComponent
                key={i}
                name={char.name}
                image={char.image}
                id={char.id}
                position={i}
                activesCards={activesCards}
                setActivesCards={setActivesCards}
                resolveCards={resolveCards}
                setResolveCards={setResolveCards}
              />
            ))}
          </div>
          {gameFinish && (
            <div>
              <Fireworks
                options={{
                  rocketsPoint: {
                    min: 0,
                    max: 100,
                  },
                }}
                style={{
                  top: 0,
                  position: "absolute",
                  left: "23%",
                  width: "55%",
                  height: "100%",
                  background: "transparent",
                }}
              />
              <p onClick={() => restartGame()} className={styles.playAgain}>
                PLAY AGAIN
              </p>
            </div>
          )}
        </article>
      </Layaout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const rickResponse = await fetch(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const { results }: GetRickMortyCharacterResults = await rickResponse.json();
  return {
    props: {
      rickCharacters: results,
    },
  };
};

export default Home;
