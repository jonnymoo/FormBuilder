export default function (s) {
  if (s === undefined) {
    return ''
  }

  var div = document.createElement('div')
  div.textContent = '' + s
  return div.innerHTML
}
