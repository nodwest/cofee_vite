import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const HeaderPhoneIcon: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1.49259 3.06012C1.75619 2.62366 3.20857 1.03615 4.245 1.08407C4.55481 1.10974 4.82869 1.29717 5.05121 1.51454C5.56215 2.01347 7.02479 3.90052 7.10781 4.29761C7.30979 5.27152 6.14926 5.83292 6.50443 6.81453C7.40992 9.03021 8.97013 10.5903 11.1868 11.4949C12.1676 11.8501 12.729 10.6896 13.703 10.8924C14.0992 10.9754 15.9872 12.438 16.4862 12.9489C16.7027 13.1706 16.891 13.4453 16.9167 13.7551C16.9552 14.8462 15.2692 16.3191 14.9405 16.5074C14.1651 17.0619 13.1535 17.0525 11.9202 16.4791C8.47887 15.0474 2.9792 9.65152 1.52084 6.08025C0.962825 4.85389 0.924312 3.83548 1.49259 3.06012Z"
				stroke="#485C44"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default memo(HeaderPhoneIcon)
