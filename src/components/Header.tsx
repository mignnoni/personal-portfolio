import { Flex, HStack, Text } from "@chakra-ui/react";

export function Header() {
    
    return (
        <Flex as="header" w="100%" justify={'center'}>
            <HStack spacing={24} fontSize={'xl'}>
                <Text as='a' _hover={{ color: 'purple.400'}}>Sobre mim</Text>
                <Text as='a' _hover={{ color: 'purple.400'}}>Projetos</Text>
                <Text as='a' _hover={{ color: 'purple.400'}}>Tecnologias</Text>
            </HStack>
        </Flex>
    )
}