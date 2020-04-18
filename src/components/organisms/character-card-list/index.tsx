import React from "react";

import styles from "./styles.module.css";

import { Character } from "src/types/character";
import CharacterCard from "src/components/molecules/character-card";

type CharacterCardListProps = {
  className?: string;
  characters: Character[];
};

const CharacterCardList = (props: CharacterCardListProps) => {
  const { className = "", characters } = props;
  const classProps: string = `${styles.content} ${className}`;

  return (
    <ul className={classProps} aria-label="conjunto de cards de personagens">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ul>
  );
};

export default CharacterCardList;
