import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const Card: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="72"
			height="46"
			viewBox="0 0 72 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 0H64C68.4183 0 72 3.58172 72 8V38C72 42.4183 68.4183 46 64 46H8C3.58172 46 0 42.4183 0 38V8C0 3.58172 3.58172 0 8 0ZM8 4C5.79086 4 4 5.79086 4 8V38C4 40.2091 5.79086 42 8 42H64C66.2091 42 68 40.2091 68 38V8C68 5.79086 66.2091 4 64 4H8Z"
				fill="#485C44"
			/>
			<path d="M2 12H70V16H2V12Z" fill="#485C44" />
			<path
				d="M43 36C43 34.8954 43.8954 34 45 34H58C59.1046 34 60 34.8954 60 36C60 37.1046 59.1046 38 58 38H45C43.8954 38 43 37.1046 43 36Z"
				fill="#485C44"
			/>
		</svg>
	)
}

export default memo(Card)
