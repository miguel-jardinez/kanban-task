export const normalizeUrl = (value: string) => value.toLowerCase().replace(' ', '-');
export const normalizeUrlToString = (value: string) => value.replace('-', ' ');

export const getBoardName = (pathName: string) => {
  const path = pathName.replace('/board/', '');
  return normalizeUrlToString(path);
};
