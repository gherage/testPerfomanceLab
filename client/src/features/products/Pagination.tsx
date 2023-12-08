import React from 'react';

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
}: {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (number: number) => void;
}): JSX.Element => {
  const pages = [];
  for (
    let index = 1;
    index <= Math.ceil(totalPosts / postsPerPage);
    index += 1
  ) {
    pages.push(index);
  }

  return (
    <div>
      {pages.map((page, index) => (
        <button key={index} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
