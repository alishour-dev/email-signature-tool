export type Company = Record<"antwerp" | "blue", Record<"logo" | "website", string>>

export type Data = {
	company: keyof Company
	email: string
	// Socials (optional)
	linkedIn?: string
	location: keyof Location
	name: string
	position: string
	skype?: string
	style: SignatureStyle
	teams?: string
	tel: string
}

export type Location = Record<"Cyprus" | "UAE", Record<"href" | "label", string>>

export interface SignatureProps {
	colors: TableElementsColors
	email: string
	// Socials (optional)
	linkedIn?: string
	location: Location["Cyprus"] | Location["UAE"]
	logo: string
	name: string
	position: string
	skype?: string

	teams?: string
	tel: string
	website: string
}

export type SignatureStyle = "First Style" | "Second Style"

export type TableElementsColors = Record<"collapse" | "name" | "position" | "text", string>
