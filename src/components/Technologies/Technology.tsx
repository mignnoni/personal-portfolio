import { Box, Flex, Heading } from "@chakra-ui/react";
import { FiveStarsIcon } from "../FiveStarsIcon";
import { ITechnology } from "../../interfaces/ITechnology";

export function Technology({ imagePath, name, rating }: ITechnology) {


    return (
        <Flex rounded={'xl'} bgColor={'gray.800'} h={40} align={'center'} justify={'center'} flexDir={'column'} boxShadow={'lg'} border={'2px'} borderColor={'purple.700'}>
            <Box 
                position={'relative'}
                zIndex={2}
                w='full'
                h={'full'}
                bgImage={imagePath ?? ''}
                bgPos={'center'}
                bgRepeat={'no-repeat'}
                bgSize={'contain'}
                opacity={0.07}
            >
            </Box>
            <Box pos={'absolute'} zIndex={1} opacity={100} textAlign={'center'}  >
                <Heading>{name}</Heading>
                <Box color={'yellow.300'}>
                    {<FiveStarsIcon numberFilled={rating} />}
                </Box>
            </Box>
        </Flex>
    );
}