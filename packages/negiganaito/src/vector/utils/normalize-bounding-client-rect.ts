export function normalizeBoundingClientRect(a: any, b: any) {
  a = a.ownerDocument.documentElement
  var c = a ? a.clientLeft : 0
  a = a ? a.clientTop : 0
  var d = Math.round(b.left) - c
  c = Math.round(b.right) - c
  var e = Math.round(b.top) - a
  b = Math.round(b.bottom) - a
  return {
    left: d,
    right: c,
    top: e,
    bottom: b,
    width: c - d,
    height: b - e,
  }
}
