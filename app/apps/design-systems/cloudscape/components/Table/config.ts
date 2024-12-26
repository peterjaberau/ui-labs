export const DEFAULT_TRACK_BY = 'id';
export const DEFAULT_LOADING_TEXT = 'Loading';
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_FILTERING_PLACEHOLDER = 'Search';
export const DEFAULT_FILTERING_ARIA_LABEL = 'Filter table content';
export const DEFAULT_COLLECTION_PREFERENCES_TITLE = 'Preferences';
export const DEFAULT_COLLECTION_PREFERENCES_CONFRIM_LABEL = 'Confirm';
export const DEFAULT_COLLECTION_PREFERENCES_CANCEL_LABEL = 'Cancel';

export const getAriaLabels = (trackBy: string = DEFAULT_TRACK_BY) => ({
  selectionGroupLabel: 'Items selection',
  allItemsSelectionLabel: ({ selectedItems }: any) =>
    `${selectedItems.length} ${selectedItems.length === 1 ? 'item' : 'items'} selected`,
  itemSelectionLabel: ({ selectedItems }: any, item: any) => {
    const isItemSelected = selectedItems.filter((i: any) => i[trackBy] === item[trackBy]).length;
    return `${item.name} is ${isItemSelected ? '' : 'not'} selected`;
  },
});

export const DEFAULT_PAGE_SIZE_OPTIONS = [
  { value: 10, label: '10 rows' },
  { value: 30, label: '30 rows' },
  { value: 50, label: '50 rows' },
];

export const DEFAULT_PAGINATION_LABELS = {
  nextPageLabel: 'Next page',
  previousPageLabel: 'Previous page',
  pageLabel: (pageNumber: number) => `Page ${pageNumber} of all pages`,
};
