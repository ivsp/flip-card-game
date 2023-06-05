import "@/styles/globals.css";
import "./../components/characterComponents/characterComponent.css";

import type { AppProps } from "next/app";
import CharacterDataContext from "@/context/characters.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CharacterDataContext>
      <Component {...pageProps} />
    </CharacterDataContext>
  );
}
