export const getFilterByName = (filterName) => {
  const filterMapping = {
    blur: `${filterName}(8px)`,
    "drop-shadow": `${filterName}(8px 8px 8px gray)`,
    "hue-rotate": `${filterName}(90deg)`,
  };

  return filterMapping[filterName] ?? `${filterName}(100)`;
};
