import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const Arrow: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className, 'fill-current')}
			width="10"
			height="6"
			viewBox="0 0 10 6"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path d="M5 6L0 0H10L5 6Z" />
		</svg>
	)
}

export default memo(Arrow)
