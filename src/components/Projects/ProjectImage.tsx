import { Flex, Image } from "@chakra-ui/react";

interface IProjectImageProps {
    imagePath: string;
}

export function ProjectImage({ imagePath } : IProjectImageProps) {
    return (
        <Flex align={'center'} justify={'center'} flexDir={'column'} boxShadow={'xl'}>
            <Image src={imagePath} />
        </Flex>
    );
}