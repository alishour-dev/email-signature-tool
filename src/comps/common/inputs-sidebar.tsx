import type { Company, Data, Location, SignatureStyle } from "@/types"

import { companies } from "@/constants/companies"
import { locations } from "@/constants/locations"
import { trim } from "@/utils/trim"
import {
	FaBuilding,
	FaEnvelope,
	FaLinkedin,
	FaMapMarkerAlt,
	FaMicrosoft,
	FaPhone,
	FaSkype,
	FaUserTie
} from "react-icons/fa"

//#region Import
import { Input, type InputProps } from "../ui/input"
import { Select, SelectItem } from "../ui/select"
//#endregion

type InputsSidebarType = {
	data: Data
	setData: React.Dispatch<React.SetStateAction<Data>>
}

export const InputsSidebar = ({ data, setData }: InputsSidebarType) => {
	const onChange = (e: React.ChangeEvent) => {
		const { name, value } = e.target as HTMLInputElement

		// trimming value only on the following inputs
		if (["email"].includes(name)) return setData((prev) => ({ ...prev, [name]: trim(value) }))

		setData((prev) => ({ ...prev, [name]: value }))
	}

	return (
		<div className='h-full w-full max-w-[350px] border-r border-r-primary-50 bg-opacity-5 backdrop-blur-[3px]'>
			<div className='flex w-full flex-col border-b border-dashed border-primary-200 px-4 py-5'>
				<h2 className='mb-2 text-base text-primary-900'>1. Pick a company</h2>
				<Select
					onValueChange={(company: keyof Company) => setData((prev) => ({ ...prev, company }))}
					triggerProps={{ children: <FaBuilding />, placeholder: "Select company" }}
					value={data?.company || undefined}>
					{Object.keys(companies)?.map((v, idx) => (
						<SelectItem key={v + "-" + idx} value={v}>
							{v}
						</SelectItem>
					))}
				</Select>
			</div>

			<div className='flex w-full flex-col border-b border-dashed border-primary-200 px-4 py-5'>
				<h2 className='mb-2 text-base text-primary-900'>2. Pick a signature style</h2>
				<Select
					onValueChange={(style: SignatureStyle) => setData((prev) => ({ ...prev, style }))}
					triggerProps={{ children: <FaUserTie />, placeholder: "Select a style" }}
					value={data?.style || undefined}>
					{["First Style", "Second Style"]?.map((v, idx) => (
						<SelectItem key={v + "-" + idx} value={v}>
							{v}
						</SelectItem>
					))}
				</Select>
			</div>

			<div className='flex w-full flex-col gap-1.5 px-4 py-5'>
				<h2 className='mb-2 text-base text-primary-900'>3. Add your personal Info Below</h2>

				{inputs?.map((props, idx) => (
					<Input
						key={idx}
						onChange={onChange}
						// onKeyDown={onKeyDown}
						{...props}
						className='!w-full !max-w-full'
						minLength={2}
						required
						value={data[props?.name as keyof Data] ?? ""}
					/>
				))}

				<Select
					onValueChange={(location: keyof Location) => setData((prev) => ({ ...prev, location }))}
					triggerProps={{ children: <FaMapMarkerAlt />, placeholder: "Select Location" }}
					value={data?.location || undefined}>
					{Object.keys(locations)?.map((v, idx) => (
						<SelectItem key={v + "-" + idx} value={v}>
							{v}
						</SelectItem>
					))}
				</Select>
			</div>
		</div>
	)
}

const inputs: (Pick<InputProps, "leftIcon" | "placeholder" | "type"> & {
	name: keyof Omit<Data, "company" | "location">
})[] = [
	{ leftIcon: <FaUserTie />, name: "name", placeholder: "Full name", type: "text" },
	{
		leftIcon: <FaBuilding />,
		name: "position",
		placeholder: "Current position",
		type: "text"
	},
	{
		leftIcon: <FaLinkedin />,
		name: "linkedIn",
		placeholder: "LinkedIn Profile URL (optional)",
		type: "url"
	},
	{
		leftIcon: <FaSkype />,
		name: "skype",
		placeholder: "Skype profile URL (optional)",
		type: "url"
	},
	{
		leftIcon: <FaMicrosoft />,
		name: "teams",
		placeholder: "Teams profile URL (optional)",
		type: "url"
	},
	{
		leftIcon: <FaEnvelope />,
		name: "email",
		placeholder: "email address",
		type: "email"
	},
	{ leftIcon: <FaPhone />, name: "tel", placeholder: "Your mobile phone number", type: "number" }
]

// const onKeyDown = (e: React.KeyboardEvent): void => {
// 	const { key }: Partial<React.KeyboardEvent> = e
// 	const target = e.target as HTMLElement

// 	const inputs: any = Object.values((target as any)?.form)?.filter(
// 		(i: any) => ["text", "email", "tel"]?.includes(i?.type) || i?.name === "select"
// 	)

// 	const currentIdx = inputs?.findIndex((node: HTMLInputElement) => node?.outerHTML === target?.outerHTML)

// 	const nextInput: HTMLInputElement = inputs?.[currentIdx + 1]
// 	const prevInput: HTMLInputElement = inputs?.[currentIdx - 1]

// 	if (key === "Backspace" && currentIdx === 5 && data?.tel?.length === 1) {
// 		setData((prev) => ({ ...prev, tel: "" }))
// 	}

// 	if (["ArrowDown", "Enter", "tab"]?.includes(key)) {
// 		if (nextInput) {
// 			e.preventDefault()
// 			nextInput.focus()
// 		}
// 	}

// 	if (key === "ArrowUp") {
// 		if (prevInput) {
// 			e.preventDefault()
// 			prevInput.focus()
// 		}
// 	}
// }
