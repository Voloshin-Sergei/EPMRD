const highRatingMovie = 8;
const averageRatingMovie = 5;

export const setRateColorStyle = (rating: number): string => {
  if (rating > highRatingMovie) {
    return 'green';
  }
  if (rating >= averageRatingMovie) {
    return 'orange';
  }
  return 'red';
};
