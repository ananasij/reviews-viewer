import React, { FC } from 'react';
import { PageLink } from './PageLink';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (value: number) => any;
}

export const Pagination: FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) {
    return null;
  }

  const backDisabled = page <= 1;
  const nextDisabled = page >= totalPages;

  return (
    <div className="pagination">
      <PageLink disabled={backDisabled} page={1} onPageChange={onPageChange}>
        <FirstPageIcon color={backDisabled ? 'disabled' : 'primary'} />
      </PageLink>
      <PageLink disabled={backDisabled} page={page - 1} onPageChange={onPageChange}>
        <NavigateBefore color={backDisabled ? 'disabled' : 'primary'} />
      </PageLink>

      <div className="pagination__counter">
        {page}/{totalPages}
      </div>

      <PageLink disabled={nextDisabled} page={page + 1} onPageChange={onPageChange}>
        <NavigateNext color={nextDisabled ? 'disabled' : 'primary'} />
      </PageLink>
      <PageLink disabled={nextDisabled} page={totalPages} onPageChange={onPageChange}>
        <LastPageIcon color={nextDisabled ? 'disabled' : 'primary'} />
      </PageLink>
    </div>
  );
};
