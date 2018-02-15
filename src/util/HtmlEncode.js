export default function (s) {
  if (s === undefined) {
    return ''
  }

  var div = document.createElement('div')
  div.textContent = '' + s
  var ret = div.innerHTML
  div.remove()
  return ret
}
