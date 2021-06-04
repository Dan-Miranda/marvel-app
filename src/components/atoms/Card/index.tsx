import React from 'react';

import styles from './Card.module.scss';

interface Props {
  className?: string,
}

const Card: React.FC<Props> = (props) => {
  const { className, children } = { ...props };
  return (
    <div className={`${styles.CardContainer} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
