import React from 'react';
import CharacterContract from '../../../services/MarvelServices/contracts/CharacterContract';
import Card from '../../atoms/Card';

import styles from './HeroeCard.module.scss';

interface Props {
  heroe: CharacterContract,
}

const HeroeCard: React.FC<Props> = (props) => {
  const { heroe } = { ...props };
  return (
    <Card className={styles.HeroeCardContainer}>
      <div className={styles.HeroeCardCharacter}>
        <img
          alt="Heroe avatar"
          src={`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`}
          className={styles.HeroeCharacterThumbnail}
        />
        <p className={styles.HeroeCharacterName}>
          {heroe.name}
        </p>
      </div>

      <div className={`${styles.HeroeCardDescription} ${styles.ScrollStyle}`}>
        <p className={styles.HeroeCharacterName}>
          {heroe.description || 'Herói não possui descrição.'}
        </p>
      </div>

      <div className={`${styles.HeroeCardSeries} ${styles.ScrollStyle}`}>
        { heroe.series.items.length > 0
          ? heroe.series.items.map((serie) => (
            <p className={styles.HeroeCharacterSerieName}>
              {serie.name}
            </p>
          ))
          : 'Herói não participou de nenhuma série.'}
      </div>
    </Card>
  );
};

export default HeroeCard;
