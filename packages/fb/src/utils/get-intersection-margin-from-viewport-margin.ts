const g = new Map()
export function getIntersectionMarginFromViewportMargin(a: any) {
  let b =
      'bottom:' +
      a.bottom +
      '|top:' +
      a.top +
      '|left:' +
      a.left +
      '|right:' +
      a.right,
    c = g.get(b)
  c == null &&
    ((c = {
      bottom: a.bottom * -1,
      left: a.left * -1,
      right: a.right * -1,
      top: a.top * -1,
    }),
    g.set(b, c))
  return c
}
