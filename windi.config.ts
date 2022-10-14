import { defineConfig } from 'vite-plugin-windicss'
import shortcuts from './windi.shortcuts'

const toRem = (px: number) => `${Math.round((px / 16) * 100) / 100}rem`

const array = (max: number) => new Array(max).fill(0).map((_, index) => index)

const spacing = array(999).reduce((sum, item) => ({ ...sum, [item]: toRem(item) }), {})

const defaultValues = {
	'1/2': '50%',
	'1/3': '33.333%',
	'1/4': '25%',
	'1/5': '20%',
	'1/6': '16.667%',
	'1/7': '14.286',
	'1/8': '12.5%',
	'1/9': '11.111%',
	'1/10': '10%',
	'20%': '20%',
	'25%': '25%',
	'30%': '30%',
	'33%': '33.333%',
	'40%': '40%',
	'50%': '50%',
	'66%': '66.666%',
	'75%': '75%',
	'85%': '85%',
	'90%': '90%',
	'95%': '95%',
	full: '100%',
	'150%': '150%',
	inherit: 'inherit',
	auto: 'auto',
	fit: 'fit-content'
}

const borderDirections = ['border-t', 'border-r', 'border-b', 'border-l']

const loaderColors = ['default', 'white', 'red', 'gray']

const loaderBorders = () => {
	return loaderColors.reduce<string[]>((acc, color) => {
		return [...acc, ...borderDirections.map(border => `${border}-${color}`)]
	}, []) 
}

export default defineConfig({
	plugins: [require('windicss/plugin/line-clamp')],
	safelist: [
		// Btn
		['btn-default', 'btn-black', 'btn-lg', 'btn-md', 'btn-sm', 'btn-inline'],
		// Checkbox
		['checkbox-default'],
		// Panel
		['panel-default', 'panel-gray'],
		// TextArea
		['textarea-default'],
		// TextInput
		['text-input-default', 'text-input__disabled', 'text-input__loading'],
		// Alert
		['alert-info', 'alert-success', 'alert-error'],
		// Loader
		['loader-xs', 'loader-sm', 'loader-md', 'loader-lg'],
		// Tooltip
		['tooltip'],
		//Drawer
		['drawer-top', 'drawer-right', 'drawer-bottom', 'drawer-left'],
		// Options
		['options-default'],
		['option-default', 'option-default__selected'],
		loaderBorders()
	],
	// attributify: true,
	alias:{},
	shortcuts,
	theme: {
		extend: {
			colors: {
				black: {
					100: '#262525'
				},
				grey: {
					0: '#FFFFFF',
					50: '#F6F6F4',
					100: '#F6F7F4',
					200: '#888888'
				},
				green: {
					100: '#D6DBCF',
					200: '#ADBF8F',
					300: '#577153',
					400: '#485C44',
					500: '#31412E'
				},
				yellow: {
					100: '#FDC12B'
				},
				red: {
					100: '#FFEAEA',
					200: '#DB4949'
				},
				brown: {
					100: '#623636'
				}
			},
			width: {
				...spacing,
				...defaultValues
			},
			height: {
				...spacing,
				...defaultValues
			},
			spacing: {
				...spacing,
				...defaultValues
			},
			borderWidth: {
				...spacing,
				...defaultValues
			},
			borderRadius: {
				...spacing,
				...defaultValues
			},
			maxWidth: {
				...spacing,
				...defaultValues
			},
			minWidth: {
				...spacing,
				...defaultValues,
				400: toRem(400),
				800: toRem(800)
			},
			top: { ...spacing, ...defaultValues, 400: toRem(400), 800: toRem(800) },
			bottom: {
				...spacing,
				...defaultValues,
				400: toRem(400),
				800: toRem(800)
			},
			fontSize: {
				...spacing,
				xs: '0.75rem',
				sm: '0.875rem',
				md: '1rem',
				lg: '1.125rem',
				xl: '1.25rem',
				'2xl': '1.875rem',
				'3xl': '2.875rem'
			},
			rotate: {
				'-180': '-180deg',
				'-90': '-90deg',
				'-45': '-45deg',
				'-12': '-12deg',
				'-6': '-6deg',
				'-3': '-3deg',
				'-2': '-2deg',
				'-1': '-1deg',
				0: '0deg',
				1: '1deg',
				2: '2deg',
				3: '3deg',
				6: '6deg',
				12: '12deg',
				45: '45deg',
				90: '90deg',
				180: '180deg'
			}
		},
		screens: {
			'2xs': '320px',
			xs: '416px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1280px',
			'2xl': '1440px',
			'3xl': '1536px',
			'4xl': '1980px'
		},
		fontFamily: {
			roboto: ['Roboto']
		},
		fontSize: {
			inherit: 'inherit',
			h1: ['2rem', { lineHeight: '3rem' }],
			h2: ['1.5rem', { lineHeight: '2rem' }],
			h3: ['1.125rem', { lineHeight: '1.5rem' }],
			xs: ['0.6rem', { lineHeight: '1rem' }],
			sm: ['0.875rem', { lineHeight: '1.25rem' }],
			base: ['1rem', { lineHeight: '1.5rem' }],
			lg: ['1.125rem', { lineHeight: '1.75rem' }],
			xl: ['1.25rem', { lineHeight: '1.75rem' }],
			'2xl': ['1.5rem', { lineHeight: '2rem' }],
			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
			'5xl': ['3rem', { lineHeight: '1' }],
			'6xl': ['3.75rem', { lineHeight: '1' }],
			'7xl': ['4.5rem', { lineHeight: '1' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }]
		}
	}
})
