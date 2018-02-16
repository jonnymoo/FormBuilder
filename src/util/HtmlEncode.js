// Html encode a string
export default function (s) {
  if (s === undefined || s === null) {
    return ''
  }

  var div = document.createElement('div')
  div.textContent = '' + s
  return div.innerHTML
}
