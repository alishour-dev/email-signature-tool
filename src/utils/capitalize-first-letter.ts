/**
 * Capitalize first letter of any given word/s
 *
 * @param input One or more word that we want their first letter to be capitalized
 * @returns The modified string with an uppercased first letter for each word
 */
export const capitalizeFirstLetter = (input: string): string => {
	return input
		?.split(" ")
		?.map((word) => word.charAt(0).toUpperCase() + word.slice(1)?.toLowerCase())
		?.join(" ")
}
