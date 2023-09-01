import { Box, Circle, Flex, HStack, Heading, Highlight, Image, Stack, Text } from "@chakra-ui/react";

export function Home() {
    return (
        <Stack w={'full'} spacing={12}>
            <Flex justify={'space-between'} mt={12}>
                <Stack>
                    <Heading>Olá!</Heading>
                    <Heading as='h1'>Sou o Iuri Mignoni,</Heading>
                    <Heading as='h2' color={'purple.300'}>Desenvolvedor Web Full Stack</Heading>
                </Stack>
                <Flex align={'center'}>
                    <Image boxSize={'120px'} src={'/code_icon.png'} />
                </Flex>
            </Flex>
            <Flex
                flexDir={'column'}
                bgColor={'gray.900'}
                borderRadius={12} minH={'400px'}
                borderColor={'gray.600'}
                borderWidth={1}
                fontFamily={`'Source Code Pro', monospace`}
                boxShadow={'2xl'}
            >
                <Flex bgColor={'gray.600'} w='full' h={8} borderTopRadius={10} p={1} textAlign={'center'} justify={'space-between'}>
                    <HStack spacing={2} h='full' flex={1} ml={2}>
                        <Circle size={3} bg='red.400' />
                        <Circle size={3} bg='yellow.400' />
                        <Circle size={3} bg='green.400' />
                    </HStack>
                    <Text flex={1}>Hello, World!</Text>
                    <Box flex={1}></Box>
                </Flex>
                <Stack spacing={4} p={6}>
                    <Text>Atuo profissionalmente como Desenvolvedor Web desde junho de 2022, e sou apaixonado pela área da programação!
                        Desde 2020 venho estudando, desenvolvendo projetos pessoais e aplicações web completas para usuários e empresas.
                    </Text>
                    <Text>
                        Atualmente estou cursando uma pós-graduação em Engenharia de Software na Unisinos.
                    </Text>
                    <Text>
                        <Highlight query={['.NET', 'Angular', 'React']} styles={{ color: 'purple.300' }}>
                            As principais tecnologias que domino são .NET, Angular e React, e tenho maior conhecimento com bancos de dados relacionais,
                            apesar de trabalhar com NoSQL também.
                        </Highlight>
                    </Text>
                    <Text>
                        <Highlight query={['inúteis', '(s)']} styles={{ textDecoration: 'line-through', color: 'purple.300'}}>
                            Mais algumas informações inúteis sobre mim: Tenho 26 anos, possuo inglês fluente (ou quase isso), 
                            gosto de viajar, sair com a namorada e amigos, assistir esportes em geral (principalmente futebol e basquete), gosto de assistir
                            sitcoms e streams na Twitch, e também de tomar aquela(s) xícara(s) de café diariamente!
                        </Highlight>
                    </Text>
                </Stack>
            </Flex>
        </Stack>
    );
}