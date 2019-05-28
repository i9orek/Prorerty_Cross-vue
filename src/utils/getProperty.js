export default function getProperty(prop, object) {
  return prop.reduce((x, y) => {
    return (y in x) ? x[y] : x
  }, object);
};