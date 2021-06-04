import React, { useEffect, useState } from 'react';
import MarvelServices from '../../../services/MarvelServices';
import CharacterContract from '../../../services/MarvelServices/contracts/CharacterContract';
import Card from '../../atoms/Card';
import HeroesList from '../../organisms/HeroesList';

import styles from './HomeTemplate.module.scss';

const HomeTemplate: React.FC = () => (
  <div className={styles.HomeTemplateContainer}>
    <HeroesList />
  </div>
);

export default HomeTemplate;
