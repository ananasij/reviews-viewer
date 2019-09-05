import React, { FC } from 'react';
import { PageLink } from './PageLink';

interface PaginationProps {
  page: number,
  totalPages: number,
  onPageChange: (value: number) => any,
}

export const Pagination: FC<PaginationProps> = ({page, totalPages, onPageChange}) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="todo">
      {(page > 1) && (
        <>
          <PageLink page={1} onPageChange={onPageChange}>&lt;&lt;</PageLink>
          <PageLink page={page - 1} onPageChange={onPageChange}>&lt;</PageLink>
        </>
      )}
      <span>{page}/{totalPages}</span>
      {(page < totalPages) && (
        <>
          <PageLink page={page + 1} onPageChange={onPageChange}>&gt;</PageLink>
          <PageLink page={totalPages} onPageChange={onPageChange}>&gt;&gt;</PageLink>
        </>
      )}
    </div>
  );
};
