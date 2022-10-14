import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const LongArrow: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="18"
			height="14"
			viewBox="0 0 18 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path d="M18 7H1M1 7L6.81579 13M1 7L6.81579 1" stroke="#888888" />
		</svg>
	)
}

export default memo(LongArrow)
