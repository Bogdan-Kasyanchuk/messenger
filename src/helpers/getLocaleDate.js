const getLocaleDate = (date, options) => {
  return date
    ? new Date(date).toLocaleDateString('en-US', options)
    : new Date().toLocaleDateString('en-US', options);
};

export default getLocaleDate;
