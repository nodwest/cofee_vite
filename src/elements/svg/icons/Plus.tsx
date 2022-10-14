import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const PlusIcon: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path fillRule="evenodd" clipRule="evenodd" d="M6 4V0H4V4H0V6H4V10H6V6H10V4H6Z" fill="#485C44" />
		</svg>
	)
}

export default memo(PlusIcon)
