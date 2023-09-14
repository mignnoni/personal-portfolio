import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { SlideTechnologies } from "./SlideTechnologies";
import { TechnologiesModal } from "./TechnologiesModal";
import { ITechnology } from "../../interfaces/ITechnology";

const technologies: ITechnology[] = [
    { name: '.NET', rating: 5, imagePath: 'csharp.png' },
    { name: 'React', rating: 5, imagePath: 'react.png' },
    { name: 'Angular / Angularjs', rating: 5, imagePath: 'angular.svg' },
    { name: 'SQL Server | MySQL', rating: 5, imagePath: 'database.png' },
    { name: 'Typescript', rating: 5, imagePath: 'typescript.png' },
    { name: 'REST API', rating: 5, imagePath: 'rest.png' },
    { name: 'Next.js', rating: 4, imagePath: 'next.png' },
    { name: 'Azure Service Bus', rating: 4, imagePath: 'servicebus.png' },
    { name: 'SignalR', rating: 4, imagePath: 'signalr.png' },
    { name: 'Tailwind', rating: 4, imagePath: 'tailwind.png' },
    { name: 'MongoDB', rating: 3, imagePath: 'mongodb.png' },
    { name: 'Docker', rating: 3, imagePath: 'docker.png' },
    { name: 'Node.js', rating: 3, imagePath: 'node.png' }
]

export function Technologies() {

    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <Box>
            <SlideTechnologies technologies={technologies} />
            <Flex w='full' align={'center'} justify={'center'} mt={4}>
                <Button colorScheme="purple" rounded={'full'} onClick={onOpen}>Ver todas</Button>
            </Flex>
            <TechnologiesModal onClose={onClose} isOpen={isOpen} technologies={technologies} />
        </Box>
    );
}