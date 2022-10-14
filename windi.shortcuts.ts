import { Shortcut } from 'windicss/types/interfaces'

export default {
  'absolute-center': 'absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2',
  'absolute-x-center': 'absolute left-1/2 transform -translate-x-1/2',
  'absolute-y-center': 'absolute top-1/2 transform -translate-y-1/2',
  'active-scale': 'cursor-pointer transform active:transition-transform active:scale-105',
  'flex-center': 'flex items-center justify-center',

  'focus-ring': 'focus:outline-none focus:ring-2 focus:ring-offset-1',
  'no-focus-ring': 'focus:ring-0 focus:ring-offset-0',
  'focus-within-ring': 'focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-1',
  'no-focus-within-ring': 'focus-within:ring-0 focus-within:ring-offset-0',

  'default-palette':
    'text-default bg-white border border-gray-100 hover:border-default focus:border-gray-100 focus-within:border-gray-100 active:border-gray-100 shadow-md',
  'disabled-palette':
    'opacity-50 bg-disabled-50 border border-disabled-200 rounded-md shadow-lg cursor-not-allowed select-none',
  'error-palette':
    'text-error bg-error bg-opacity-10 border border-error hover:border-error focus:border-error focus-within:border-error shadow-lg',

  disabled:
    'bg-disabled hover:bg-disabled no-focus-ring no-focus-within-ring placeholder-blue-gray-200 hover:placeholder-blue-gray-200 cursor-not-allowed shadow-lg select-none',

  box: 'px-3.5 py-2',

  'input-box': 'px-4 py-2 w-full text-md rounded-md cursor-pointer transition-colors active:border-black',
  'alert-box': 'w-full max-w-160 min-w-80 px-5 py-2 rounded-md shadow-md overflow-hidden',

  container: 'min-w-screen-2xs max-w-screen-4xl mx-auto py-6 px-4 min-h-screen',

  //Alert
  alert: 'alert-box mb-1 flex items-center break-words whitespace-normal transition-colors z-10',
  'alert-info': 'border border-info bg-info text-white',
  'alert-success': 'border border-green-700 bg-green-700 text-white',
  'alert-error': 'border border-white bg-error text-white',

  // Panel
  panel: 'w-full relative p-6 rounded-md shadow-md transition-colors',
  'panel-default': 'bg-white text-default ',
  'panel-gray-100': 'bg-gray-100 text-default',
  panel__error: 'error-palette',
  panel__disabled: '!disabled-palette',
  panel__loading: '!disabled-palette',

  //icon
  icon: 'hover:scale transition-colors cursor-pointer',
  'icon-xss': 'icon min-w-2 max-w-2 min-h-2',
  'icon-xs': 'icon min-w-4 max-w-4 min-h-4',
  'icon-sm': 'icon min-w-6 max-w-6 min-h-6',
  'icon-md': 'icon min-w-8 max-w-8 min-h-10',
  'icon-lg': 'icon min-w-12 max-w-12 min-h-10',
  'icon-xl': 'icon min-w-30 max-w-20 min-h-30',

  // Loader
  loader: 'rounded-full border-3 animate-spin transition-colors',
  'loader-xs': 'w-4 h-4',
  'loader-sm': 'w-6 h-6',
  'loader-md': 'w-12 h-12',
  'loader-lg': 'w-18 h-18',

  // Btn
  btn: 'active-scale w-full leading-4 rounded-xl shadow-md',
  'btn-default':
    'bg-red text-white hover:bg-opacity-80 ring-offset-red focus:ring-red focus-within:ring-red placeholder-red hover:placeholder-red transition-colors',
  'btn-black':
    'bg-default text-white hover:bg-opacity-80 ring-default focus:ring-default focus-within:ring-default placeholder-default hover:placeholder-default transition-colors',
  'btn-inline': 'w-unset shadow-none border-0 focus:(scale) hover:scale',
  'btn-lg': 'h-12 px-4',
  'btn-md': 'h-8 px-3',
  'btn-sm': 'h-6 px-2',
  btn__disabled: '!disabled',
  btn__loading: '!disabled',

  // Checkbox
  checkbox: 'flex-center w-5 h-5 rounded-sm transition-all active:scale',
  'checkbox-default': 'border-1 border-gray-100 text-white',
  checkbox__error: 'error-palette',
  checkbox__disabled: '!disabled-palette text-disabled-200',
  checkbox__loading: '!disabled-palette text-disabled-200',
  // TextArea
  textarea: 'w-full input-box text-sm cursor-pointer rounded-md shadow-md',
  'textarea-default': 'default-palette',
  textarea__disabled: 'disabled',
  textarea__loading: 'disabled',

  // TextInput
  'text-input-container': 'input-box flex items-center',
  'text-input': 'bg-transparent',
  'text-input-default': 'default-palette',
  'text-input__error': 'error-palette',
  'text-input__disabled': '!disabled-palette',
  'text-input__loading': '!disabled-palette',

  // Details
  details: 'flex items-center cursor-pointer select-none',

  // Tooltip
  tooltip: 'px-2 py-1 bg-default text-white rounded-md',

  // Modal
  modal: 'relative w-200 ',
  'modal-container': 'fixed inset-0 flex-center z-2',
  'modal-overlay': 'absolute inset-0 bg-overlay',
  'modal-close-icon': 'w-8 h-8 absolute top-6 right-6 cursor-pointer',
  'modal-center': 'inline-block max-w-full overflow-hidden text-left bg-white shadow-md rounded-md px-9 py-10',

  //Drawer
  drawer: 'fixed bg-white shadow-md py-8',
  'drawer-container': 'fixed inset-x-0 bottom-0 top-30 flex-center z-2',
  'drawer-close-icon': 'icon-md absolute top-8 right-9',
  'drawer-top': 'left-0 right-0  top-0 w-full h-50vh',
  'drawer-bottom': 'left-0 right-0 bottom-0 w-full h-50vh',
  'drawer-left': ' top-30 bottom-0 left-0 w-60vw h-100vh',
  'drawer-right': 'top-0 bottom-0 right-0 w-60vw h-100vh',

  // Options
  options: 'w-full overflow-y-auto overflow-x-hidden cursor-pointer select-none shadow-md transition-colors',
  'options-default': 'default-palette',
  options__error: 'error-palette bg-white bg-opacity-100',
  options__disabled: '!disabled-palette opacity-100',
  options__loading: '!disabled-palette opacity-100',

  option: 'py-2.5 px-4 flex items-center transition-colors',
  'option-default': 'text-default bg-white hover:bg-gray !focus:access-palette active:bg-gray-100',
  'option-default__selected': 'bg-gray-350 hover:bg-gray',
  option__disabled: '!disabled-palette border-0 shadow-none'
} as { [p: string]: Shortcut } | undefined
