//#region Import 
import { Input, type InputProps } from "../ui/input"

import {  Select, SelectItem } from "../ui/select"

import { companies } from "@/constants/companies"
import { locations } from "@/constants/locations"
import type { Company, Data, Location, SignatureStyle } from "@/types"
import { trim } from "@/utils/trim"

import { FaLinkedin, FaMicrosoft, FaSkype, FaPhone, FaUserTie, FaEnvelope, FaBuilding, FaMapMarkerAlt } from "react-icons/fa"
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
					value={data?.company || undefined}
					onValueChange={(company: keyof Company) => setData((prev) => ({ ...prev, company }))}
					triggerProps={{ placeholder: "Select company", children: <FaBuilding /> }}>
					{Object.keys(companies)?.map((v, idx) => (
						<SelectItem value={v} key={v + "-" + idx}>
							{v}
						</SelectItem>
					))}
				</Select>
			</div>

			<div className='flex w-full flex-col border-b border-dashed border-primary-200 px-4 py-5'>
				<h2 className='mb-2 text-base text-primary-900'>2. Pick a signature style</h2>
				<Select
					value={data?.style || undefined}
					onValueChange={(style: SignatureStyle) => setData((prev) => ({ ...prev, style }))}
					triggerProps={{ placeholder: "Select a style", children: <FaUserTie /> }}>
					{["First Style", "Second Style"]?.map((v, idx) => (
						<SelectItem value={v} key={v + "-" + idx}>
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
						value={data[props?.name as keyof Data] ?? ""}
						required
						minLength={2}
						className='!w-full !max-w-full'
					/>
				))}

				<Select
					value={data?.location || undefined}
					onValueChange={(location: keyof Location) => setData((prev) => ({ ...prev, location }))}
					triggerProps={{ placeholder: "Select Location", children: <FaMapMarkerAlt /> }}>
					{Object.keys(locations)?.map((v, idx) => (
						<SelectItem value={v} key={v + "-" + idx}>
							{v}
						</SelectItem>
					))}
				</Select>
			</div>
		</div>
	)
}

const inputs: (Pick<InputProps, "type" | "leftIcon" | "placeholder"> & {
	name: keyof Omit<Data, "location" | "company">
})[] = [
	{ leftIcon: <FaUserTie />, name: "name", type: "text", placeholder: "Full name" },
	{
		leftIcon: <FaBuilding />,
		name: "position",
		type: "text",
		placeholder: "Current position",
	},
	{
		leftIcon: <FaLinkedin />,
		name: "linkedIn",
		type: "url",
		placeholder: "LinkedIn Profile URL (optional)",
	},
	{
		leftIcon: <FaSkype />,
		name: "skype",
		type: "url",
		placeholder: "Skype profile URL (optional)",
	},
	{
		leftIcon: <FaMicrosoft />,
		name: "teams",
		type: "url",
		placeholder: "Teams profile URL (optional)",
	},
	{
		leftIcon: <FaEnvelope />,
		name: "email",
		type: "email",
		placeholder: "email address",
	},
	{ leftIcon: <FaPhone />, name: "tel", type: "number", placeholder: "Your mobile phone number" },
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