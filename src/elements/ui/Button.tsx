import React, { memo, useEffect, useState } from 'react'
import { Location } from '@reach/router'

interface ButtonProps {
  label: string
  type: 'primary' | 'secondary' | 'danger'
  size?: 'lg' | 'lm' | 'md' | 'sm' | 'ms' | 'xs' 
  to?: string
  disabled?: boolean
  loading?: boolean
  typography?: boolean
  className?: string
  handleClick?: (...args: any) => any
}

const Button: React.FC<ButtonProps> = props => {
	const { label, type, size, disabled, loading = false, typography, to, handleClick, className } = props

	let width
	switch (size) {
	case 'lg':
		width = 'w-[418px]'
		break
	case 'lm':
		width = 'w-[248px]'
		break
	case 'md':
		width = 'w-[214px]' //
		break
	case 'sm':
		width = 'w-[186px]'
		break
	case 'ms':
		width = 'w-[148px]'
		break
	case 'xs':
		width = 'w-[138px]'
		break
	default:
		width = ''
	}
	let buttonType
	switch (type) {
	case 'primary':
		buttonType = 'btn-primary'
		break
	case 'secondary':
		buttonType = 'btn-secondary'
		break
	case 'danger':
		buttonType = 'btn-danger'
		break
	}

	const buttonClassName = 'btn ' + buttonType + ' ' + width + ' ' + className

	const [stateLoading, handleLoading] = useState(false)

	useEffect(() => {
		if (loading) handleLoading(loading)
		else setTimeout(() => handleLoading(loading), 1000)
	}, [loading])

	return (
		<Location>
			{({ navigate }) => {
				const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
					if (!disabled && handleClick) to ? await navigate(to) : handleClick(e)
				}

				return (
					<button
						className={
							'text-center ' +
              (stateLoading || disabled ? 'disabled ' : ' ') +
              (typography ? 'typography ' : ' ') +
              buttonClassName
						}
						onClick={handleButtonClick}
					>
						{stateLoading ? 'Загрузка' : label}
					</button>
				)
			}}
		</Location>
	)
}

export default memo(Button)
