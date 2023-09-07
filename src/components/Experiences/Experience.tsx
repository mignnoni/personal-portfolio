import { Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { TechnologyTag } from "../TechnologyTag";

export function Experience() {
    return (
        <Flex w='full' bgColor={'gray.800'} border={'1px'} rounded={'2xl'} flexDir={'column'} p={[4, 6]} borderColor={'purple.500'}>
            <Heading size={'md'} as='h4' mb={2} fontFamily={'Nunito'}>Desenvolvedor Full Stack</Heading>
            <Heading size={'sm'} as='h5' color={'gray.400'} fontFamily={'Nunito'}>Sirros IoT</Heading>
            <Heading size={'sm'} as='h5' color={'gray.400'} fontFamily={'Nunito'}>2022 - Presente</Heading>
            <Stack w='full' mt={6} spacing={2} color='gray.200' mb={4}>
                <Text>
                    Desenvolvimento e manutenção de aplicações web robustas e escaláveis, principalmente com as tecnologias .NET, Angular e Angularjs.
                </Text>
                <Text>
                    Implementação de Background Services no .NET para utilização serviços de fila / mensageria com o Azure Service Bus, websockets com o SignalR, entre outros. 
                </Text>
            </Stack>
            <HStack flexWrap={'wrap'} spacing={3}>
                <TechnologyTag name='.NET' />
                <TechnologyTag name='Angular' />
                <TechnologyTag name='Angularjs' />
                <TechnologyTag name='Typescript' />
                <TechnologyTag name='Azure Service Bus' />
                <TechnologyTag name='SignalR' />
                <TechnologyTag name='Background Services' />
                <TechnologyTag name='SQL Server' />
                <TechnologyTag name='MongoDB' />
                <TechnologyTag name='Tailwind' />
                <TechnologyTag name='Material UI' />
            </HStack>
        </Flex>
    );
}