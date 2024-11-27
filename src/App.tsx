//#region Import 
import { Suspense, lazy, useMemo, useState } from "react"

import { Header } from "@/comps/common/header"
import { InputsSidebar } from "@/comps/common/inputs-sidebar"
import { companies } from "@/constants/companies"
import { locations } from "@/constants/locations"
import type { Company, Data, TableElementsColors } from "@/types"
import { validateObject } from "@/utils/validate-object"

import { LuLoader2 } from "react-icons/lu"
//#endregion

export default function App() {
	const [data, setData] = useState(initialData)

	const SignaturePicked = useMemo(() => signatures[data.style], [data.style])

	return (
		<>
			<Header onReset={() => setData(initialData)} validData={isValid(data)} />
			<main className='flex w-full flex-1 flex-col md:flex-row '>
				<InputsSidebar data={data} setData={setData} />

				<div className='h-full w-full flex-1 flex-center'>
					<div className=' h-max w-max min-w-[500px] rounded-lg bg-white bg-opacity-[0.02] p-5 shadow-[0px_0px_6px_2px_rgba(34,22,115,0.15)] backdrop-blur-sm'>
						<Suspense
							fallback={
								<div className='h-[180px] w-[500px] flex-center'>
									<LuLoader2 className='sie-10 text-gray-400' />
								</div>
							}>
							<SignaturePicked
								logo={companies[data?.company].logo}
								website={companies[data.company].website}
								name={data?.name || "John Doe"}
								position={data?.position || PLACEHOLDER_TEXT}
								location={locations[data.location]}
								colors={getColors(data.company)}
								tel={data?.tel || PLACEHOLDER_TEXT}
								email={data?.email || PLACEHOLDER_TEXT}
								// Socials (optional)
								linkedIn={data?.linkedIn}
								skype={data?.skype}
								teams={data?.teams}
							/>
						</Suspense>
					</div>
				</div>
			</main>
		</>
	)
}

const signatures = {
	"First Style": lazy(() => import("@/comps/signatures/first-style").then((mod) => ({ default: mod.FirstStyle }))),
	"Second Style": lazy(() => import("@/comps/signatures/second-style").then((mod) => ({ default: mod.SecondStyle }))),
}

const initialData: Data = {
	name: "",
	position: "",
	tel: "",
	email: "",
	location: "Cyprus",
	company: "antwerp",
	style: "First Style",
}

const PLACEHOLDER_TEXT = "................................"

const getColors = (company: keyof Company): TableElementsColors => ({
	name: company === "antwerp" ? "#404682" : "#1D92D1",
	collapse: company === "antwerp" ? "#43b1e1" : "#e783cba7",
	position: company === "antwerp" ? "#1a8ab9" : "#4d9ad1",
	text: company === "antwerp" ? "#33a4d4" : "#4d9ad1",
})

const isValid = (data: Data) => {
	const cloneData = { ...data }
	delete cloneData.skype
	delete cloneData.linkedIn
	delete cloneData.teams

	return validateObject(cloneData)
}
