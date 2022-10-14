import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const TeaIcon: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className, 'fill-current')}
			width="30"
			height="40"
			viewBox="0 0 30 40"
			fill="current"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M14.9999 0L10.8198 6.74684C7.35898 12.3327 9.28967 19.7638 14.9999 22.836C20.7102 19.7638 22.6409 12.3327 19.1801 6.74684L14.9999 0Z"
				fill="current"
			/>
			<path
				d="M29.6538 20.2137L22.7493 23.9099C17.0329 26.9701 15.0874 34.3971 18.5371 39.9902C24.9779 40.2622 30.2675 34.8181 29.9895 28.2033L29.6538 20.2137Z"
				fill="current"
			/>
			<path
				d="M0.346188 20.2137L0.0104764 28.2034C-0.267466 34.8181 5.02209 40.2622 11.4629 39.9902C14.9126 34.3971 12.9671 26.9701 7.25071 23.9099L0.346188 20.2137Z"
				fill="current"
			/>
		</svg>
	)
}

export default memo(TeaIcon)
