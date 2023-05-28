import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HeaderDesktop from "@/components/headerDesktop/headerDesktop";
import Layaout from "@/components/layaout/layaout";

export default function MarvelPage() {
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
        <h1>Marvel page</h1>
      </Layaout>
    </>
  );
}
