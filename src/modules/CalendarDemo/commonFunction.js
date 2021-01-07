export const getYearRange = (year) => {
  const divider = 10;
  const basicNumber = Math.floor(year / divider) * divider;
  const yearArray = [];
  for (let i = 0; i <= 10; i += 1) yearArray.push(basicNumber + i);
  return yearArray;
};

export const test = () => {};
