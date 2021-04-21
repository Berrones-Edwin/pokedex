export const getTypes = (types: any[]): string => {
  return types.filter((x) => x.slot === 1)[0]?.type.name;
};
