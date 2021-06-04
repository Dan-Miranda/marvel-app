import React, { useEffect, useState } from 'react';
import MarvelServices from '../../../services/MarvelServices';
import CharacterContract from '../../../services/MarvelServices/contracts/CharacterContract';
import HeroeCard from '../../molecules/HeroeCard';
import PaginationButtons from '../../molecules/PaginationButtons';

import styles from './HeroesList.module.scss';

const HeroesList: React.FC = () => {
  const [heroes, setHeroes] = useState<Array<CharacterContract>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const [page, setPage] = useState(1);

  useEffect(() => {
    MarvelServices.getHeroes(page)
      .then((resposta) => {
        if (resposta) {
          setHeroes(resposta.data.results);
          setTotalPages(resposta.data.total);
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <>
      <div className={styles.HeroeListTitle}>
        <p>Personagens</p>
        <p>Descrição</p>
        <p>Séries</p>
      </div>
      <div className={`${styles.HeroesListContainer} ${styles.ScrollStyle}`}>
        {heroes.map((heroe) => (
          <HeroeCard key={heroe.id} heroe={heroe} />
        ))}
      </div>
      <PaginationButtons
        pageState={[page, setPage]}
        lastPage={totalPages}
        perPage={10}
      />
    </>
  );
};

export default HeroesList;
