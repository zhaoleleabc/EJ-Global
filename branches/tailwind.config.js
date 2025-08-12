export default {
    content: [
        './resources/views/**/*.html',
        './resources/views/**/*.php',
        './resources/views/templates/**/*.html',
        './resources/views/templates/**/*.php',
        './resources/**/*.js',
        './node_modules/flowbite-datepicker/**/*.js',
    ],
    safelist: [
        'bg-[#5A5656]',
        'bg-[#26295c]',
        'bg-[#6FD4E2]',
        'bg-[#D73841]',
        'bg-[#FF7A00]',
        'bg-[#E9AE77]'

    ],
    theme: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
                'eco-green': {
                    1: 'rgba(61, 153, 61, 1)',
                    2: '#317A3D',
                    4: 'rgba(29, 71, 40, 1)',
                    5: 'rgba(160, 224, 95, 1)'
                },
                'eco-gray': {
                    DEFAULT: 'rgba(250, 247, 245, 1)',
                    2: 'rgba(153, 153, 153, 1)',
                    333: 'rgba(51, 51, 51, 1)',
                    666: 'rgba(102, 102, 102, 1)',
                    ccc: 'rgba(204, 204, 204, 1)',
                },
                'eco-black': {
                    DEFAULT: 'rgba(0, 0, 0, 1)'
                },
                'eco-white': {
                    DEFAULT: 'rgba(255, 255, 255, 1)'
                },
                'eco-yellow': {
                    DEFAULT: 'rgba(245, 213, 181, 1)',
                    153: 'rgba(153, 108, 73, 1)',
                    181: 'rgba(181, 138, 105, 1)'
                },
                'eco-dark': {
                    1: '#333333',
                    999: '#999999'
                },
                'eco-button-yellow': {
                    2: '#B58A69',
                    3: '#996C49',
                },
                'eco-button': {
                    light: '#F7F1EB'
                },
                'eco-page-yellow': {
                    1: '#F5D5B5'
                }
            },
            fontSize: {
                'eco-large': '2.125rem',
                'eco-normal': '1.5rem',
                'eco-small': '1.125rem',
                'eco-mini': '0.875rem',
                'eco-base': '0.9375rem',
                'eco-1': '1rem',
                'eco-1375': '1.375rem',
            },
            fontWeight: {
                'eco-600': '600',
                'eco-500': '500',
                'eco-400': '400',
            },
            borderRadius: {
                large: '2.5rem',
                125: '1.25rem',
                625: '6.25rem',
            },
            transitionDuration: {
                1400: '1400ms'
            }
        }
    },
    plugins: [
        require('tailwindcss-textshadow')
    ],
    important: true
}
