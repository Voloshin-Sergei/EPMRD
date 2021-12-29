import React from 'react';
import cover from '../assets/cover.jpg';

export const onErrorHandler = (e: React.SyntheticEvent): void => {
  (e.target as HTMLImageElement).onerror = null;
  (e.target as HTMLImageElement).src = cover;
};
