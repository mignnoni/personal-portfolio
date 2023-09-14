import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            html: {
                scrollBehavior: 'smooth'
            },
            body: {
                bgGradient: 'linear(to-b, gray.700 60%, purple.800)',
                color: 'white',
                a: {
                    cursor: 'pointer',
                }
            }
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Nunito'
    }
})