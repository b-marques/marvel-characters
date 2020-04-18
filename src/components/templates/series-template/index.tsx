import React, { ReactNode } from "react";

import styles from "./styles.module.css";

type SeriesTemplateProps = {
  seriesHero: ReactNode;
  seriesCardList: ReactNode;
};

const SeriesTemplate = (props: SeriesTemplateProps) => {
  const { seriesHero, seriesCardList } = props;
  return (
    <>
      {seriesHero}
      <section className={styles.content}>{seriesCardList}</section>
    </>
  );
};

export default SeriesTemplate;
