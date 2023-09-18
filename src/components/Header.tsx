import { Flex, HStack, Text } from "@chakra-ui/react";
import { Translator } from "./I18n/Translator";

export function Header() {
    
    return (
        <Flex as="header" justify={'center'} scrollBehavior={'smooth'}>
            <HStack spacing={[8, 12, 24]} fontSize={['lg', 'xl']}>
                <Text as='a' href="#experience" _hover={{ color: 'purple.400'}}>
                    <Translator path="header.experience" />
                </Text>
                <Text as='a' href="#projects" _hover={{ color: 'purple.400'}}>
                    <Translator path="header.projects" />
                </Text>
                <Text as='a' href="#technologies" _hover={{ color: 'purple.400'}}>
                    <Translator path="header.technologies" />
                </Text>
            </HStack>
        </Flex>
    )
}