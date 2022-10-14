import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const Accessories: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className, 'fill-current')}
			width="40"
			height="29"
			viewBox="0 0 40 29"
			fill="current"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M30 9.66663H34.2806C37.4393 9.66663 40 12.4 40 15.7719C40 19.1437 37.4393 21.8772 34.2806 21.8772H30V19.8805H34.2806C36.4063 19.8805 38.1295 18.041 38.1295 15.7719C38.1295 13.5028 36.4063 11.6633 34.2806 11.6633H30V9.66663Z"
				fill="current"
			/>
			<path
				d="M2.30767 6.19691V23C2.30767 26.3137 4.99397 29 8.30767 29H24.3077C27.6214 29 30.3077 26.3137 30.3077 23V7.5H10.9997C10.4198 7.5 9.94971 7.05228 9.94971 6.5C9.94971 5.94772 10.4198 5.5 10.9997 5.5H30.0994C30.4408 5.5 30.7875 5.45495 31.0833 5.28442C31.946 4.78704 32.5 3.8591 32.5 2.83147C32.5 1.26769 31.2323 0 29.6685 0H2.81392C1.25983 0 0 1.25983 0 2.81391V3.12992C0 4.19664 0.705786 5.13466 1.73076 5.43016C2.07241 5.52866 2.30767 5.84134 2.30767 6.19691Z"
				fill="current"
			/>
		</svg>
	)
}

export default memo(Accessories)
