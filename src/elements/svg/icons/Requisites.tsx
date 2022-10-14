import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const RequisitesIcon: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="24"
			height="36"
			viewBox="0 0 24 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M18 5.31708H21C21.7956 5.31708 22.5587 5.67626 23.1213 6.31561C23.6839 6.95496 24 7.82211 24 8.72629V32.5908C24 33.495 23.6839 34.3621 23.1213 35.0015C22.5587 35.6408 21.7956 36 21 36H3C2.20435 36 1.44129 35.6408 0.87868 35.0015C0.31607 34.3621 0 33.495 0 32.5908V8.72629C0 7.82211 0.31607 6.95496 0.87868 6.31561C1.44129 5.67626 2.20435 5.31708 3 5.31708H6"
				fill="#ADBF8F"
			/>
			<rect x="5.14258" y="18.0976" width="13.7143" height="2" rx="1" fill="white" />
			<rect x="5.14258" y="23.0732" width="13.7143" height="2" rx="1" fill="white" />
			<rect x="5" y="1" width="14" height="7" rx="2" fill="#ADBF8F" stroke="white" strokeWidth="2" />
		</svg>
	)
}

export default memo(RequisitesIcon)
