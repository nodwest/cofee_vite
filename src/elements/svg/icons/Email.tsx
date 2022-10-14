import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const EmailIcon: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="38"
			height="26"
			viewBox="0 0 38 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M4.6 0H33.4C35.38 0 37 1.40625 37 3.125V21.875C37 23.5938 35.38 25 33.4 25H4.6C2.62 25 1 23.5938 1 21.875V3.125C1 1.40625 2.62 0 4.6 0Z"
				fill="#ADBF8F"
			/>
			<mask id="path-2-inside-1" fill="white">
				<path d="M37 0L22.6298 15.1686C20.6576 17.2503 17.3424 17.2503 15.3702 15.1686L1 0" />
			</mask>
			<path
				d="M38.4519 1.37549C39.2116 0.573624 39.1774 -0.692244 38.3755 -1.45191C37.5736 -2.21157 36.3078 -2.17735 35.5481 -1.37549L38.4519 1.37549ZM2.45191 -1.37549C1.69224 -2.17735 0.426376 -2.21157 -0.375489 -1.45191C-1.17735 -0.692244 -1.21157 0.573624 -0.451905 1.37549L2.45191 -1.37549ZM22.6298 15.1686L21.1779 13.7931L22.6298 15.1686ZM35.5481 -1.37549L21.1779 13.7931L24.0817 16.5441L38.4519 1.37549L35.5481 -1.37549ZM16.8221 13.7931L2.45191 -1.37549L-0.451905 1.37549L13.9183 16.5441L16.8221 13.7931ZM21.1779 13.7931C19.9946 15.0421 18.0054 15.0421 16.8221 13.7931L13.9183 16.5441C16.6793 19.4585 21.3207 19.4585 24.0817 16.5441L21.1779 13.7931Z"
				fill="white"
				mask="url(#path-2-inside-1)"
			/>
			<path d="M1 25L13 12" stroke="white" strokeWidth="2" />
			<path d="M37 25L25 12" stroke="white" strokeWidth="2" />
		</svg>
	)
}

export default memo(EmailIcon)
