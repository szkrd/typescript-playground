export const kebabize = (s: string): string =>
  s.replace(/([A-Z])/g, '-$1')
    .replace(/^-/, '')
    .toLowerCase();
