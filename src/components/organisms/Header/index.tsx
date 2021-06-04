import React from 'react';
import Card from '../../atoms/Card';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  console.log();
  return (
    <header className={styles.HeaderContainer}>
      <Card className={styles.HeaderCard}>
        <img
          alt="Logo Bradesco"
          src="https://logodownload.org/wp-content/uploads/2021/04/bradesco-cartoes-logo-1.png"
          className={styles.HeaderLogo}
        />
        <div className={styles.HeaderUserArea}>
          <p className={styles.HeaderUserName}>
            Danillo Miranda
          </p>
          <p className={styles.HeaderUserTest}>
            Teste front-end
          </p>
          <div className={styles.HeaderUserAvatar}>
            DM
          </div>
        </div>
      </Card>
    </header>
  );
};

export default Header;
