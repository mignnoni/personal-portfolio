import { Button, Flex, HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Translator } from "./I18n/Translator";
import { RiArrowDropDownLine } from "react-icons/ri";

export function Header() {
    
    return (
        <Flex flexDir={'row'} justify={'space-between'} w="full">
            <Flex flex="1">
            </Flex>
            <Flex flex="4" as="header" justify={'center'} scrollBehavior={'smooth'}>
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
            <Flex flex="1" justify={'flex-end'}>
                <Menu>
                    <MenuButton
                        px={4}
                        py={2}
                        transition='all 0.2s'
                        borderRadius='md'
                        borderWidth='2px'
                        borderColor={'purple.600'}
                        _hover={{ bg: 'purple.500' }}
                        _expanded={{ bg: 'purple.700' }}
                    >
                    File <Icon as={RiArrowDropDownLine} />
                    </MenuButton>
                    <MenuList bgColor={'gray.800'}>
                        <MenuItem bgColor={'gray.800'} _hover={{ bg: 'purple.500' }}>Português - Brasil</MenuItem>
                        <MenuItem bgColor={'gray.800'} _hover={{ bg: 'purple.500' }}>English</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    )
}