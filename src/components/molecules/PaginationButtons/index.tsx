import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './PaginationButtons.module.scss';

interface Props {
  // pageState: [page: number, setPage: (value: number) => void],
  totalPages: number,
}

const PaginationButtons: React.FC<Props> = (props) => {
  const { totalPages } = { ...props };
  const [buttons, setButtons] = useState<Array<JSX.Element>>([]);
  const [currentPage, setCurrentPage] = useState();

  const router = useRouter();

  const handlePage = (page: number) => {
    // setPage(page);
    router.push(`/?page=${page}`);
  };

  const previous = () => {
    if (Number(router.query.page) - 1 > 0) {
      handlePage(Number(router.query.page) - 1);
    }
  };

  const next = () => {
    if (Number(router.query.page) + 1 <= totalPages) {
      handlePage(Number(router.query.page) + 1);
    }
  };

  const goToFirstPage = () => {
    handlePage(1);
  };

  const goToLastPage = () => {
    handlePage(totalPages);
  };

  const generateButtonsPagination = () => {
    const buttonList = [];
    let pageIndex = Number(router.query.page) || 1;
    for (let i = 0; i < 10 && pageIndex <= totalPages; i += 1) {
      buttonList.push((
        <Link href={`/?page=${pageIndex}`}>
          <button
            type="button"
            style={{ background: Number(router.query.page) === pageIndex ? '#D93D27' : '' }}
          >
            {pageIndex}
          </button>
        </Link>
      ));
      pageIndex += 1;
    }

    setButtons(buttonList);
  };

  useEffect(() => {
    generateButtonsPagination();
  }, [Number(router.query.page)]);

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
