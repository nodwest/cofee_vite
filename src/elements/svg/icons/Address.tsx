// svg
import { IIconProps } from '~svg'
import cls from 'classnames'
import React, { memo } from 'react'

const AddressIcon: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="27"
			height="34"
			viewBox="0 0 27 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M27 13.2222C27 23.1634 16.613 31.6512 14.0611 33.5865C13.7264 33.8403 13.2736 33.8403 12.9389 33.5865C10.387 31.6512 0 23.1634 0 13.2222C0 5.91979 6.04416 0 13.5 0C20.9558 0 27 5.91979 27 13.2222Z"
				fill="#ADBF8F"
			/>
			<circle cx="13.5" cy="13.5" r="6.5" fill="white" />
		</svg>
	)
}

export default memo(AddressIcon)
