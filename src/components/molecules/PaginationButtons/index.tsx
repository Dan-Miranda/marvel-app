import React, { useEffect, useState } from 'react';

import styles from './PaginationButtons.module.scss';

interface Props {
  pageState: [page: number, setPage: (value: number) => void],
  perPage: number,
  lastPage: number,
}

const PaginationButtons: React.FC<Props> = (props) => {
  const { perPage, lastPage, pageState } = { ...props };
  const [buttons, setButtons] = useState<Array<JSX.Element>>([]);
  const [page, setPage] = pageState;

  const handlePage = (page: number) => {
    setPage(page);
  };

  const previous = () => {
    if (page - 1 > 0) {
      handlePage(page - 1);
    }
  };

  const next = () => {
    if (page <= lastPage) {
      handlePage(page + 1);
    }
  };

  const goToFirstPage = () => {
    handlePage(1);
  };

  const goToLastPage = () => {
    handlePage(lastPage);
  };

  const genereteButtonsPagination = () => {
    const buttonList = [];
    let pageIndex = page;
    for (let i = 0; i <= perPage; i += 1) {
      buttonList.push((
        <button
          type="button"
          onClick={() => handlePage(i)}
          className={pageIndex === page ? 'PaginationButtonFocus' : ''}
        >
          {pageIndex}
        </button>
      ));
      pageIndex += 1;
    }

    setButtons(buttonList);
  };

  useEffect(() => {
    genereteButtonsPagination();
  }, []);

  return (
    <div className={styles.PaginationContainer}>
      <button type="button" onClick={() => goToFirstPage()}>
        {'<<'}
      </button>
      <button type="button" onClick={() => previous()}>
        {'<'}
      </button>
      { buttons.map((button) => button)}
      <button type="button" onClick={() => next()}>
        {'>'}
      </button>
      <button type="button" onClick={() => goToLastPage()}>
        {'>>'}
      </button>
    </div>
  );
};

export default PaginationButtons;
