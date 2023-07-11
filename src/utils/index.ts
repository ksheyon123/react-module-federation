const classNameBinder = (prefix: string, suffix: string, isActive: boolean) => {
  if (isActive) return prefix + " " + suffix;
  else return prefix;
};

export { classNameBinder };
