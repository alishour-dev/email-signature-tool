import { cn } from "@/utils/cn"
import { forwardRef, type ReactNode, type InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	inputClassName?: string
	leftIcon?: ReactNode
	rightIcon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, className, inputClassName, leftIcon, rightIcon, ...props }, ref) => (
		<InputWrapper label={label} id={props?.id} className={className}>
			<div className='group !relative h-max w-full md:max-w-[30rem]'>
				{!!leftIcon && (
					<span
						className={twMerge(
							"pointer-events-none absolute inset-y-0 start-3 h-full w-max text-primary-400 transition-[color] duration-300 flex-center group-focus-within:text-primary-600",
							!!props?.value && "text-primary-600"
						)}>
						{leftIcon}
					</span>
				)}

				<input
					{...props}
					ref={ref}
					className={cn(
						"inline-block min-h-[40px] w-full overflow-hidden rounded-md !border-0 !bg-transparent !px-2 !py-1.5 !text-sm text-gray-800 !outline-none ring-1 !ring-inset ring-primary-300 transition-all duration-300 ease-in-out placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-primary-500 focus:ring-2 focus:ring-primary-500 active:ring-2 active:ring-primary-500",
						!!leftIcon && "!pl-10",
						!!rightIcon && "!pr-10",
						!!props?.value && "invalid:ring-2 invalid:ring-red-500",
						inputClassName
					)}
				/>

				{!!rightIcon && (
					<span
						className={twMerge(
							"pointer-events-none absolute inset-y-0 end-3 h-full w-max text-primary-400 transition-[color] duration-300 flex-center group-focus-within:!text-primary-600",
							!!props?.value && "text-primary-600"
						)}>
						{rightIcon}
					</span>
				)}
			</div>
		</InputWrapper>
	)
)

Input.displayName = "Input"

interface InputWrapperProps extends Partial<Record<"label" | "id", string>> {
	children: ReactNode
	className?: string
}

const InputWrapper = ({ id, label, children, className }: InputWrapperProps) => (
	<div
		className={cn(
			"flex h-max w-full flex-col items-start justify-between gap-0.5 sm:flex-row sm:gap-1.5 sm:pl-0.5",
			className
		)}>
		{!!label?.length && (
			<label htmlFor={id} className='min-w-[56px] text-xs text-gray-800 sm:text-sm'>
				{label}:
			</label>
		)}
		{children}
	</div>
)
