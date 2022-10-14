import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const CoffeeBean: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="10"
			height="11"
			viewBox="0 0 10 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M7.54378 0.378018L6.59556 1.0153C5.23902 1.92699 4.52132 3.51614 4.74164 5.12026C4.90845 6.33483 4.36503 7.53809 3.33791 8.22839L1.14928 9.69931C-0.0963888 8.39995 -0.388347 6.40028 0.564727 4.77255L2.14345 2.07628C3.23952 0.204332 5.59091 -0.5074 7.54378 0.378018Z"
				fill={'current'}
			/>
			<path
				d="M8.51103 0.983889L7.18831 1.87285C6.1612 2.56315 5.61777 3.76641 5.78459 4.98099C6.00492 6.58507 5.2872 8.17425 3.93067 9.08595L2.00196 10.3822C2.03613 10.4029 2.0707 10.4232 2.10567 10.4432C4.11925 11.5895 6.694 10.9092 7.85654 8.92372L9.43527 6.22745C10.4697 4.46075 10.0375 2.25592 8.51103 0.983889Z"
				fill={'current'}
			/>
		</svg>
	)
}

export default memo(CoffeeBean)
