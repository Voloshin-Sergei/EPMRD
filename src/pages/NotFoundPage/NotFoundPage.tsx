import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import style from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {
  const location = useLocation();

  return (
    <div className={style.container}>
      <span className={style.error}>error</span>
      <h1 className={style.title}>404</h1>
      <p className={style.describe}>{`Sorry, ${location.pathname.slice(1)} page can't be found`}</p>
      <Link to="/" className={style.homepage}>
        Go to Homepage
      </Link>
    </div>
  );
};
