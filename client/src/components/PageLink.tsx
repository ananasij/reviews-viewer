import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';

interface PageLinkProps {
  page: number;
  onPageChange: (value: number) => any;
  disabled: boolean;
}

export const PageLink: FC<PageLinkProps> = ({ page, onPageChange, disabled, children }) => {
  const onClick: React.EventHandler<any> = e => {
    e.preventDefault();
    onPageChange(page);
  };

  return (
    <IconButton size="small" color="primary" disabled={disabled} onClick={onClick}>
      {children}
    </IconButton>
  );
};
