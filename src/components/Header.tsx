import { Flex, HStack, Text } from "@chakra-ui/react";

export function Header() {
    
    return (
        <Flex as="header" justify={'center'} scrollBehavior={'smooth'}>
            <HStack spacing={[8, 12, 24]} fontSize={['lg', 'xl']}>
                <Text as='a' href="#experience" _hover={{ color: 'purple.400'}}>Experiência</Text>
                <Text as='a' href="#projects" _hover={{ color: 'purple.400'}}>Projetos</Text>
                <Text as='a' href="#technologies" _hover={{ color: 'purple.400'}}>Tecnologias</Text>
            </HStack>
        </Flex>
    )
}