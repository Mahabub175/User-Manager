export const formatDate = (date: Date | undefined): string => {
  if (!date) return "";

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
