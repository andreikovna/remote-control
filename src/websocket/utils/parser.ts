type ParserType = {
  command: string;
  option: string;
};

export const parser = (string: string): ParserType => {
  const [command, option] = string.split(' ');
  return { command, option };
};
