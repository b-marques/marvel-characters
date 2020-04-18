import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

import styles from "./styles.module.css";

import { Character } from "src/types/character";

type CharacterCardProps = {
  className?: string;
  character: Character;
};

const CharacterCard = (props: CharacterCardProps) => {
  const { className = "", character } = props;
  const classProps = `${styles.card} ${className}`;

  return (
    <Card component="li" className={classProps}>
      <CardActionArea className={styles.actionArea}>
        <CardMedia
          className={styles.image}
          image={character.image}
          aria-label={`Imagem personagem ${character.name}`}
        />
        <CardContent className={styles.content}>
          <Typography className={styles.name} variant="caption" component="h2">
            {character.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
