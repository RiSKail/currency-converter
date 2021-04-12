export function tryStringifyJSON(jsonString: JSON): string {
  try {
    if (jsonString && jsonString !== undefined) {
      return JSON.stringify(jsonString)
    }
  } catch (e) {
    console.error(e)
  }

  return JSON.stringify(null)
}
