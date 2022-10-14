import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const MinusIcon: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="10"
			height="2"
			viewBox="0 0 10 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<rect width="10" height="2" fill="#485C44" />
		</svg>
	)
}

export default memo(MinusIcon)
