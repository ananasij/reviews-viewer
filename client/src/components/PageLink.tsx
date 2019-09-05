import React, { FC } from 'react';

interface PageLinkProps {
  page: number,
  onPageChange: (value: number) => any,
}

export const PageLink: FC<PageLinkProps> = ({page, onPageChange, children}) => {
  const onClick: React.EventHandler<any> = e => {
    e.preventDefault();
    onPageChange(page);
  };

  return (
    <a href="#" onClick={onClick}>{children}</a>
  );
};
