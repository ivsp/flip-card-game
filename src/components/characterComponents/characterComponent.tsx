import { CardData } from "@/interfaces/interfaces";
import Image from "next/image";
import React from "react";
import { FaQuestion } from "react-icons/fa";

const CharacterComponent: React.FC<CardData> = ({
  image,
  name,
  id,
  position,
  activesCards,
  setActivesCards,
  resolveCards,
  setResolveCards,
}) => {
  const flipcard = (id: number) => {
    const card = document.getElementById(String(position));
    if (activesCards[0]?.position === position) return;
    // check that the card is not resolve
    if (card?.className.includes("resolve")) {
      return;
    } else {
      if (activesCards.length > 1) {
        return;
      } else {
        activesCards.push({ id, position });
        card?.classList.toggle("flip");
        if (activesCards.length === 2) {
          setTimeout(() => {
            // check if the selected cards are equal
            if (activesCards[0].id === activesCards[1].id) {
              setResolveCards(resolveCards + 1);
              setActivesCards([]);
              // assign resolve classname
              activesCards.map((card) => {
                const slectCard = document.getElementById(
                  String(card.position)
                );
                slectCard?.classList.toggle("resolve");
              });
            } else {
              setTimeout(() => {
                activesCards.map((card) => {
                  const slectCard = document.getElementById(
                    String(card.position)
                  );
                  slectCard?.classList.toggle("flip");
                }, 1000);
              });
              setActivesCards([]);
            }
          }, 1000);
        }
      }
    }
  };

  return (
    <div
      className="card-container"
      id={String(position)}
      onClick={activesCards.length <= 2 ? () => flipcard(id) : () => {}}
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
