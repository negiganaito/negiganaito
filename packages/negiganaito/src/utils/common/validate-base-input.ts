import { processBaseInputValidators } from './process-base-input-validators'

export default function validateBaseInput(
  isPristine: any,
  value: any,
  validator: any,
) {
  const allResults =
    validator != null && !isPristine
      ? processBaseInputValidators(value, validator)
      : []
  if (allResults.length === 0)
    return {
      allResults: allResults,
      topResultReason: null,
      topResultType: 'CORRECT',
    }
  const hasError = allResults.some((result: any) => {
    return result.type === 'ERROR'
  })
  const topResultType =
    (value = allResults.find((result: any) => {
      return result.type === (hasError ? 'ERROR' : 'WARN')
    })) != null
      ? value
      : null
  return {
    allResults: allResults,
    topResultReason:
      topResultType != null && topResultType.reason != null
        ? topResultType.reason
        : null,
    topResultType: topResultType != null ? topResultType.type : 'CORRECT',
  }
}
