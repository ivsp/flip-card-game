import { CardData } from "@/interfaces/interfaces";
import Image from "next/image";
import React from "react";
import styles from "./characterComponent.module.css";

const CharacterComponent: React.FC<CardData> = ({ image, name, id }) => {
  return (
    <div className={styles.cardsContainer__item}>
      {/* <h1>{name}</h1> */}
      <Image src={image} alt={`${name}`} width={50} height={50} />
    </div>
  );
};

export default CharacterComponent;
