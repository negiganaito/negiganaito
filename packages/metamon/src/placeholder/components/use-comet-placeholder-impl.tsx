import React, { useCallback, useLayoutEffect, useRef } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

/* eslint-disable camelcase */
import { cometSuspenseHUDReact } from '@negiganaito/common'
import { useStable } from '@negiganaito/hooks'
import executionEnvironment from '@negiganaito/utils/common/execution-environment'

import HeroPlaceholder from './hero-placeholder'

function p(a: any) {
  var b = a.cb,
    c = useRef(!1)
  useLayoutEffect(function () {
    c.current || (b(), (c.current = !0))
  })
  return null
}

const _1863055 = false

export function useCometPlaceholderImpl(b: any) {
  let e = b.children,
    f = b.fallback,
    g = b.name,
    i = b.unstable_avoidThisFallback,
    l = b.unstable_onSuspense,
    q = useStable(function () {
      return cometSuspenseHUDReact && executionEnvironment.canUseDOM
        ? window.document.createElement('div')
        : null
    }),
    r = useRef(0),
    s = useRef(null),
    t = useRef(!1)
  b = e
  e = f
  // d('CometSSRHydrationMarkerUtils').addMarkersToChildren != null &&
  //   d('CometSSRHydrationMarkerUtils').addMarkersToFallback != null &&
  //   ((b = d('CometSSRHydrationMarkerUtils').addMarkersToChildren(b)),
  //   (e = d('CometSSRHydrationMarkerUtils').addMarkersToFallback(e)))
  f = useCallback(
    (a: any) => {
      q != null && (q.textContent = a), (s.current = a), l && l(a)
    },
    [q, l],
  )
  let u = null
  q != null &&
    cometSuspenseHUDReact != null &&
    (u = jsx(cometSuspenseHUDReact, {
      desc: q,
    }))
  let v = useCallback(
    function () {
      r.current += 1
      // _1863055 &&
      //   t.current &&
      //   r.current <= o &&
      //   n.onReady(function (a) {
      //     a.log(function () {
      //       return {
      //         event: 'unexpected_suspense',
      //         is_backup_placeholder: i === !0,
      //         placeholder_name: g,
      //         promise_name: s.current,
      //         suspense_count: String(r.current),
      //       }
      //     })
      //   })
    },
    [g, i],
  )
  const cb = useCallback(() => {
    t.current = !0
  }, [])

  return jsxs(HeroPlaceholder, {
    fallback: jsxs(React.Fragment, {
      children: [
        e,
        jsx(p, {
          cb: v,
        }),
        u,
      ],
    }),
    name: g,
    unstable_avoidThisFallback: i,
    unstable_onSuspense: f,
    children: [
      jsx(p, {
        cb: cb,
      }),
      b,
    ],
  })
}
