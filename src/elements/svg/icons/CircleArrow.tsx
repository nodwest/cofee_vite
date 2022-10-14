import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const CircleArrowIcon: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg className={cls(className)} width="48" height="48" viewBox="0 0 48 48" fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46ZM24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48Z"
				fill="#888888"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.4141 24.0001L29.707 14.7072L28.2928 13.293L17.5857 24.0001L28.2928 34.7072L29.707 33.293L20.4141 24.0001Z"
				fill="#888888"
			/>
		</svg>
	)
}

export default memo(CircleArrowIcon)
