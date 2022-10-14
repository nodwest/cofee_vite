import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const XButton: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M1 1L7 7M13 13L7 7M7 7L13 1L1 13"
				stroke="#888888"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default memo(XButton)