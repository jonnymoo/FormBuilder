// A helper function to supply a default value
export default function (o, defaultVal) {
  if (o === undefined || o === '') {
    return defaultVal
  } else {
    return o
  }
}
