export const myLoader = ({ src, width, quality }) => {
  const origin = window.location.origin
  return `${origin}/helseatlas${src}?w=${width}&q=${quality || 75}`;
};
