import { Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { Intro } from "../components/Intro";
import { Technologies } from "../components/Technologies/Technologies";

export function Home() {
    return (
        <Stack w={'full'} spacing={[8, 12]}>
            <Flex
                justify={'space-between'}
                mt={[8, 12]}
                flexDir={['column-reverse', 'row']}
                align={['center', 'initial']}
            >
                <Stack textAlign={['center', 'initial']}>
                    <Heading>Olá!</Heading>
                    <Heading as='h1'>Sou o Iuri Mignoni,</Heading>
                    <Heading as='h2' color={'purple.300'}>Desenvolvedor Web Full Stack</Heading>
                </Stack>
                <Flex align={'center'} mb={[4, 0]}>
                    <Image w={['80px', '120px']} src={'/code_icon.png'} />
                </Flex>
            </Flex>
            <Intro />
            <Heading as='h2'>Tecnologias</Heading>
            <Technologies />
        </Stack>
    );
}