export const getDisplayLastModified = (lastModified: number | Date, locales?: string) => {
  const date = new Date(lastModified);
  return `Last modified: ${date.toLocaleString(locales)}`;
};

export const getDisplaySize = (size?: number | null) => {
  if (!size) return undefined;

  const k = 1000;
  const dm = 2;
  const sizes = ['bytes', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(size) / Math.log(k));

  return `Size: ${parseFloat((size / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};
