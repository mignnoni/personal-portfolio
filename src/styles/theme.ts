import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'gray.800',
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