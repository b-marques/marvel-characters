import React from "react";

import IconButton from "@material-ui/core/IconButton";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import Typography from "@material-ui/core/Typography";

import styles from "./styles.module.css";

type SeriesHeroProps = {
  className?: string;
  image: string;
  heroName: string;
};

const SeriesHero = (props: SeriesHeroProps) => {
  const { className = "", image, heroName } = props;
  const classProps: string = `${styles.hero} ${className}`;

  return (
    <>
      <div
        className={classProps}
        style={{ backgroundImage: `url(${image})` }}
        aria-label="Imagem do personagem"
      >
        <IconButton className={styles.navigateBefore}>
          <NavigateBefore />
        </IconButton>
      </div>
      <Typography
        className={styles.text}
        variant="h5"
        component="h1"
      >{`Estas são as séries nas quais ${heroName} se encontra.`}</Typography>
    </>
  );
};

export default SeriesHero;
