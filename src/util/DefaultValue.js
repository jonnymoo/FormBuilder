export default function (o, defaultVal) {
  if (o === undefined || o === '') {
    return defaultVal
  } else {
    return o
  }
}
