type ParserType = {
  command: string;
  option: string;
  option2: string;
};

export const parser = (string: string): ParserType => {
  const [command, option, option2] = string.split(' ');
  return { command, option, option2 };
};
