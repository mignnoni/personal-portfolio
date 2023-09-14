import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { Slide } from "../Slide";
import { TechnologiesModal } from "./TechnologiesModal";

export function Technologies() {
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <Box>
            <Slide />
            <Flex w='full' align={'center'} justify={'center'} mt={4}>
                <Button colorScheme="purple" rounded={'full'} onClick={onOpen}>Ver todas</Button>
            </Flex>
            <TechnologiesModal onClose={onClose} isOpen={isOpen} />
        </Box>
    );
}