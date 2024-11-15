export const getConfig = (keys: string[]) => {
  const keepCharacters = keys.filter(key => key.match(/[A-Z]/g));
  return {
    shouldForwardProp: (prop: string) => !keepCharacters.includes(prop),
  };
};
