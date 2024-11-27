/**
 *
 * @param word Any string that we want to trim and remove all spaces
 * @returns Trimmed Word
 */
export const trim = (word: string) => String(word)?.trim()?.replace(/ +/g, "")?.toLowerCase()
