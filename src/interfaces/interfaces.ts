import { ReactNode } from "react";

export type ContextProps = {
  children: ReactNode;
};

export type CharactersContextType = {
  characters: CardData[];
  setCharacters: Function;
  charactersTheme: string;
  setCharactersTheme: Function;
};

export interface HeaderMobileProps {
  openModal: boolean;
  setOpenModal: Function;
}

export interface CardData {
  id: number;
  name: string;
  image: string;
  position: number;
  activesCards: any[];
  setActivesCards: Function;
  resolveCards: number;
  setResolveCards: Function;
}
export interface HomeData {
  image: string;
  text?: string;
}

export interface GetRickMortyCharacterResults {
  info: Info;
  results: RickMortyCharacter[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
export interface RickMortyCharacter {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
