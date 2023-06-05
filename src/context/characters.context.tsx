import { ContextProps, CharactersContextType } from "@/interfaces/interfaces";
import React, { useState } from "react";

const characterContextDefaultValues: CharactersContextType = {
  characters: [],
  setCharacters: () => {},
  charactersTheme: "Rick and Morty characters",
  setCharactersTheme: () => {},
};

export const CharactersContext = React.createContext<CharactersContextType>(
  characterContextDefaultValues
);

const CharacterDataContext = (props: ContextProps) => {
  const [characters, setCharacters] = useState([]);
  const [charactersTheme, setCharactersTheme] = useState(
    "Rick and Morty characters"
  );
  const value: CharactersContextType = {
    characters,
    setCharacters,
    charactersTheme,
    setCharactersTheme,
  };

  return (
    <CharactersContext.Provider value={value}>
      {props.children}
    </CharactersContext.Provider>
  );
};

export default CharacterDataContext;
