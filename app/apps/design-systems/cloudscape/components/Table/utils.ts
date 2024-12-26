export const getPageCount = (totalItemsCount?: number, pageSize?: number) => {
  if (!totalItemsCount || !pageSize) {
    return 0;
  }

  return Math.ceil(totalItemsCount / pageSize);
};

