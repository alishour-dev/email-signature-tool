import type { Data } from "@/types"

/**
 * Check if a passed object is Valid (Has truthy values)
 * @param obj Passed Object To be checked
 * @returns True if all values are valid, else false if any value isn't valid
 */
export function validateObject(obj: Partial<Data>) {
	return Object.values(obj).every((value) => Boolean(value))
}
