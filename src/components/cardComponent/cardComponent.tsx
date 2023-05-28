import { HomeData } from "@/interfaces/interfaces";
import Image from "next/image";
import React from "react";
import styles from "./cardomponent.module.css";

const CardComponent: React.FC<HomeData> = ({ image, text }) => {
  return (
    <div className={styles.cardsContainer__item}>
      <Image src={image} alt={`${text}`} width={50} height={50} />
    </div>
  );
};

export default CardComponent;
