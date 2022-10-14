import { defineConfig } from 'vite-plugin-windicss'
import shortcuts from './windi.shortcuts'

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
	alias: {},
	shortcuts,
	theme: {
		extend: {
			colors: {
				overlay: 'rgba(0,0,0,0.3)',
				error: '#E01F19',
				default: '#000000',
				red: '#E1315B',
				blue: '#2196F3',
				blue_dark: '#4350AF',
				gray: {
					40: '#F3F3F3',
					50: '#737372',
					100: '#C0BFC0',
					150: '#DEDEDE',
					200: '#E2E2E2',
					300: '#FAFAFA',
					350: '#F4F4F4',
					400: '#848484',
					500: '#4F4F4F'
				}
			},
			width: {
				unset: 'unset'
			},
			ringWidth: {
				no: 'none'
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
