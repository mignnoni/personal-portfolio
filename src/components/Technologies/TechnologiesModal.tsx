import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { FiveStarsIcon } from "../FiveStarsIcon";
import { ITechnology } from "../../interfaces/ITechnology";

interface TechnologiesModalProps {
    onClose: () => void;
    isOpen: boolean;
    technologies: ITechnology[];
}

export function TechnologiesModal({ onClose, isOpen, technologies }: TechnologiesModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={'sm'}>
            <ModalOverlay />
            <ModalContent bgColor={'gray.700'} mx={[4, 0]}>
                <ModalHeader>Tecnologias</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack pb={4}>
                    {technologies.map((t, index) => (
                        <Flex key={index + t.name} align={'center'} justify={'space-between'}
                            w={'full'} rounded={'full'} bgColor={'purple.700'} py={1} px={4} _hover={{bgColor: 'purple.500'}}
                        >
                            <Text fontSize={'sm'} fontWeight={'medium'}>{t.name}</Text>
                            <FiveStarsIcon numberFilled={t.rating}/>
                        </Flex>
                    ))}
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}