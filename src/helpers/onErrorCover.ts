import React from 'react';

export const onErrorHandler = (e: React.SyntheticEvent): void => {
  (e.target as HTMLImageElement).onerror = null;
  (e.target as HTMLImageElement).src = '/assets/cover.jpg';
};
