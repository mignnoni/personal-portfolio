import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
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