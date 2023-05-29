import { CardData } from "@/interfaces/interfaces";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./characterComponent.module.css";
import { FaQuestion } from "react-icons/fa";

const CharacterComponent: React.FC<CardData> = ({
  image,
  name,
  id,
  position,
}) => {
  const [flipCard, setFlipCard] = useState(false);
  const flipcard = (id: number) => {
    // Ingresar condición que si hay 2 cartas volteadas no entre en la función (longitud mayor o igual a 2)
    console.log(id);
    setFlipCard(true);
    const card = document.getElementById(String(position));
    if (card === null) {
      // comprobación para que no se de la vuelta si ya está resuelta
    } else {
      card?.classList.toggle("flip");
    }
    // Hacer un push a la variable que controla las cartas que se dan la vuelta

    // Esto hay que llevárselo al useEfect
    setTimeout(() => {
      card?.classList.toggle("flip");
    }, 3000);
  };

  // useEffect(() => {
  //   const card = document.getElementById(String(id));
  //   card?.addEventListener("click", function () {
  //     console.log(id);
  //     card.classList.toggle("flip");
  //     return this.removeEventListener;
  //   });
  // }, [id]);
  console.log(styles);
  return (
    // <div
    //   className={styles.card_container}
    //   id={String(position)}
    //   onClick={() => flipcard(position)}
    // >
    //   <div className={styles.flip_card}>
    //     <div className={styles.flip_card_front}>
    //       <FaQuestion />
    //     </div>
    //     <div className={styles.flip_card_back}>
    //       {/* <h1>{name}</h1> */}
    //       <img src={image} alt={`${name}`} width={50} height={50} />
    //     </div>
    //   </div>
    // </div>

    <div
      className="card-container"
      id={String(position)}
      onClick={() => flipcard(position)}
    >
      <div className="flip-card">
        <div className="flip-card-front">
          <FaQuestion />
        </div>
        <div className="flip-card-back">
          <Image src={image} alt={`${name}`} width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default CharacterComponent;
