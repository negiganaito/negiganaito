import { TrustedTypes } from './trusted-types'

const a = {
  createHTML: function (a: any) {
    return a
  },
}

export const TrustedTypesIEFixDOMPolicy = TrustedTypes.createPolicy(
  'dom-ie-fix',
  a,
)
