import React from 'react'
import {
  CometSVGIconColor,
  CometSVGIconSize,
  CometSvgIcon,
} from '@fb/tetra-icon'

type WorkCometIconWorkplaceProps = {
  size: CometSVGIconSize
  color: CometSVGIconColor
}

export default function WorkCometIconNotificationsFilled({
  color,
  size,
}: WorkCometIconWorkplaceProps) {
  return (
    <CometSvgIcon viewBox="0 0 28 28" color={color} size={size}>
      <path d="M9.555 24.787l6.5-1.156c.389-.07.715.324.555.685A4.496 4.496 0 0 1 12.5 27a4.448 4.448 0 0 1-3.233-1.383c-.271-.284-.098-.761.288-.83zm-.937-19.43A3.433 3.433 0 0 1 8.5 4.5c0-.33.06-.643.147-.946C9.063 2.084 10.4 1 12 1a3.48 3.48 0 0 1 2.729 1.336c.374.47.627 1.03.72 1.65 2.804.7 5.119 2.88 5.923 5.889l.424 1.88c.122.696.848 1.33 1.616 2.002 1.072.937 2.288 1.999 2.56 3.656.13.793-.086 2.944-2.634 3.398L7.2 23.683a4.221 4.221 0 0 1-.733.067c-2.003 0-2.77-1.646-2.9-2.356-.305-1.65.477-3.066 1.166-4.316.495-.897.962-1.744.846-2.405l-.241-1.92c-.255-2.998 1.055-5.743 3.28-7.396z" />
    </CometSvgIcon>
  )
}
