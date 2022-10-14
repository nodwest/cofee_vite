import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const EyeOpenedIcon: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<circle cx="12" cy="12" r="4" fill="#D6DBCF" />
			<path
				d="M3.00003 12C8.00003 4 16 3.99999 21 12"
				stroke="#D6DBCF"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.00003 12C8.00003 20 16 20 21 12"
				stroke="#D6DBCF"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default memo(EyeOpenedIcon)
