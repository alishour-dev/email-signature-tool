import { useEffect, useState } from "react"
import { LuCheck, LuCopy } from "react-icons/lu"

import { Button } from "../ui/button"

interface Props {
	onReset: () => void
	validData: boolean
}

export const Header = ({ onReset, validData }: Props) => {
	const [isCopied, setIsCopied] = useState(false)

	const handleCopy = async () => {
		const tbody = document.getElementsByTagName("tbody")[0]

		if (!navigator.clipboard) {
			const range = document.createRange()

			range.selectNode(tbody)
			window?.getSelection()!.removeAllRanges()
			window?.getSelection()!.addRange(range)
			document.execCommand("copy")
			window?.getSelection()!.removeAllRanges()

			setIsCopied(true)
		} else {
			try {
				const htmlContent = tbody.outerHTML

				const clipboardItem = new ClipboardItem({ "text/html": new Blob([htmlContent], { type: "text/html" }) })

				await navigator.clipboard.write([clipboardItem])

				setIsCopied(true)
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error("Unable to copy HTML element to clipboard: ", error)
			}
		}
	}

	useEffect(() => {
		if (isCopied) {
			const timer = setTimeout(() => setIsCopied(false), 1200)

			return () => clearTimeout(timer)
		}
	}, [isCopied])

	return (
		<header className='flex items-center justify-between border-b border-primary-50 bg-primary-50 bg-opacity-40 px-4 py-3 backdrop-blur-md'>
			<h1 className='text-lg font-bold text-primary-900'>Blue.Ai + Antwerp Technologies Email Signature Generator</h1>

			<div className='flex gap-4'>
				<Button disabled={!validData} onClick={handleCopy} size='sm'>
					{isCopied ? <LuCheck /> : <LuCopy />}
					<span className='ml-4'>Copy to clipboard</span>
				</Button>
				<Button onClick={onReset} size='sm' variant='destructive'>
					Reset
				</Button>
			</div>
		</header>
	)
}
