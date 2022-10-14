import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const LikeIcon: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="36"
			height="30"
			viewBox="0 0 36 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M17.9992 29C-15.1659 12.3509 8.82009 -8.3479 17.9992 5.59237C27.1797 -8.3479 51.1671 12.3509 17.9992 29Z"
				stroke="#485C44"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default memo(LikeIcon)

