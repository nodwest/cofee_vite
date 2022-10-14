import React from 'react'
import cls from 'classnames'

// types
import { Children, ClassName, HtmlDivProps } from '~types'

// seo
import { PageMeta, IPageMetaProps } from '~seo'

export interface IPageProps extends Omit<HtmlDivProps, 'className'> {
  className?: ClassName
  meta: IPageMetaProps
  children: Children
}

const Page: React.FC<IPageProps> = props => {
	const { className, meta, children, ...rest } = props

	return ( 
		<>
			<PageMeta {...meta} />
			<section className={cls('min-h-screen', className)} {...rest}>
				{children}
			</section>
		</>
	)
}

export default Page
