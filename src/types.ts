export type Location = Record<"UAE" | "Cyprus", Record<"href" | "label", string>>

export type Company = Record<"blue" | "antwerp", Record<"logo" | "website", string>>

export type SignatureStyle = "First Style" | "Second Style"

export type Data = {
	name: string
	position: string
	tel: string
	email: string
	location: keyof Location
	company: keyof Company
	style: SignatureStyle
	// Socials (optional)
	linkedIn?: string
	skype?: string
	teams?: string
}

export type TableElementsColors = Record<"name" | "position" | "text" | "collapse", string>

export interface SignatureProps {
	logo: string
	website: string
	name: string
	position: string
	location: Location["UAE"] | Location["Cyprus"]
	tel: string
	email: string
	colors: TableElementsColors

	// Socials (optional)
	linkedIn?: string
	skype?: string
	teams?: string
}
