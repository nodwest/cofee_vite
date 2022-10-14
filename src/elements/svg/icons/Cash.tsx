import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const Cash: React.FC<IIconProps> = props => {
	const { className, ...rest } = props

	return (
		<svg className={cls(className)} width="72" height="61" viewBox="0 0 72 61" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
			<path fillRule="evenodd" clipRule="evenodd" d="M45 46C45 42.134 47.9179 39 51.5172 39H72V53H51.5172C47.9179 53 45 49.866 45 46ZM51.5172 43C49.9747 43 48.7241 44.3431 48.7241 46C48.7241 47.6569 49.9747 49 51.5172 49H68.2759V43H51.5172Z" fill="#485C44"/>
			<path d="M23.2827 0L44.982 7.62512L38.3514 26.494L14 26.4165L23.2827 0Z" fill="#485C44"/>
			<path d="M41.2828 0L62.982 7.62512L56.3515 26.494L32 26.4165L41.2828 0Z" fill="#485C44"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M0 21C0 17.6863 2.68629 15 6 15H66C69.3137 15 72 17.6863 72 21V21.6316C72 22.7361 71.1046 23.6316 70 23.6316C68.8954 23.6316 68 22.7361 68 21.6316V21C68 19.8954 67.1046 19 66 19H6C4.89543 19 4 19.8954 4 21V55C4 56.1046 4.89543 57 6 57H66C67.1046 57 68 56.1046 68 55V30.1579C68 29.0533 67.1046 28.1579 66 28.1579H8.375C7.27043 28.1579 6.375 27.2625 6.375 26.1579C6.375 25.0533 7.27043 24.1579 8.375 24.1579H66C69.3137 24.1579 72 26.8442 72 30.1579V55C72 58.3137 69.3137 61 66 61H6C2.68629 61 0 58.3137 0 55V21Z" fill="#485C44"/>
		</svg>
	)
}

export default memo(Cash)
