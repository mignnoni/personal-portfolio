import { Flex, Heading, Stack } from "@chakra-ui/react";

export function Home() {
    return (
        <Flex w={"full"} justify={'space-between'} mt={12}>
            <Stack>
                <Heading as='h1'>Iuri Mignoni</Heading>
                <Heading as='h2' color={'purple.300'}>Desenvolvedor Web Full Stack</Heading>
            </Stack>
            <Flex>
                A2
            </Flex>
        </Flex>
    );
}