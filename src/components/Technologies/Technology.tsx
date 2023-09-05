import { Box, Flex, Heading } from "@chakra-ui/react";

interface TechnologyProps {
    name: string;
    imagePath: string;
}

export function Technology(props: TechnologyProps) {
    return (
        <Flex rounded={'xl'} bgColor={'gray.800'} h={40} align={'center'} justify={'center'} flexDir={'column'} boxShadow={'lg'} border={'2px'} borderColor={'purple.700'}>
            <Box 
                position={'relative'}
                zIndex={2}
                w='full'
                h={'full'}
                bgImage={props.imagePath}
                bgPos={'center'}
                bgRepeat={'no-repeat'}
                bgSize={'contain'}
                opacity={0.07}
            >
            </Box>
            <Heading pos={'absolute'} zIndex={1} opacity={100}>{props.name}</Heading>
        </Flex>
    );
}