import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const CrossIcon: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg
			className={cls(className)}
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<circle cx="16" cy="16" r="15" fill="white" stroke="#D6DBCF" strokeWidth="2" />
			<path
				d="M10.7071 9.29289C10.3166 8.90237 9.68342 8.90237 9.29289 9.29289C8.90237 9.68342 8.90237 10.3166 9.29289 10.7071L10.7071 9.29289ZM21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L21.2929 22.7071ZM22.7071 10.7071C23.0976 10.3166 23.0976 9.68342 22.7071 9.29289C22.3166 8.90237 21.6834 8.90237 21.2929 9.29289L22.7071 10.7071ZM9.29289 21.2929C8.90237 21.6834 8.90237 22.3166 9.29289 22.7071C9.68342 23.0976 10.3166 23.0976 10.7071 22.7071L9.29289 21.2929ZM9.29289 10.7071L15.2929 16.7071L16.7071 15.2929L10.7071 9.29289L9.29289 10.7071ZM15.2929 16.7071L21.2929 22.7071L22.7071 21.2929L16.7071 15.2929L15.2929 16.7071ZM16.7071 16.7071L22.7071 10.7071L21.2929 9.29289L15.2929 15.2929L16.7071 16.7071ZM21.2929 9.29289L9.29289 21.2929L10.7071 22.7071L22.7071 10.7071L21.2929 9.29289Z"
				fill="#D6DBCF"
			/>
		</svg>
	)
}

export default memo(CrossIcon)