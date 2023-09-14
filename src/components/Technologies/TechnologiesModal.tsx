import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { FiveStarsIcon } from "../FiveStarsIcon";

interface TechnologiesModalProps {
    onClose: () => void;
    isOpen: boolean;
}

interface Technology {
    name: string;
    rating: number;
}

const technologies: Technology[] = [
    { name: '.NET', rating: 5 },
    { name: 'React', rating: 5 },
    { name: 'Angular / Angularjs', rating: 5 },
    { name: 'SQL Server | MySQL', rating: 5},
    { name: 'Typescript', rating: 5 },
    { name: 'REST API', rating: 5 },
    { name: 'Next.js', rating: 4 },
    { name: 'Azure Service Bus', rating: 4 },
    { name: 'SignalR', rating: 4 },
    { name: 'Tailwind', rating: 4},
    { name: 'MongoDB', rating: 3 },
    { name: 'Docker', rating: 3 },
    { name: 'Node.js', rating: 3 }
]

export function TechnologiesModal({ onClose, isOpen }: TechnologiesModalProps) {
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