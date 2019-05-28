export default function getProperty(prop, obj) {
  return prop.reduce((x, y) => {
    return (y in x) ? x[y] : x
  }, obj);
};