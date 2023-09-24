import { Flex, HStack, Icon, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import { Translator } from "./I18n/Translator";
import { LanguageSelector } from "./I18n/LanguageSelector";
import { RiGithubFill, RiLinkedinBoxFill, RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";

export function Header() {

    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex as='header' flexDir={'row'} justify={'space-between'} w="full">
            <Flex flex="1">
                {!isWideVersion && (
                    <IconButton
                        aria-label="Open navigation"
                        icon={<Icon as={RiMenuLine} />}
                        fontSize="24"
                        variant={"unstyled"}
                        mr="2"
                        onClick={onOpen}
                    >
                    </IconButton>
                )}
                {isWideVersion && (
                    <HStack spacing={4}>
                        <Flex as='a' target="_blank" href={'https://www.linkedin.com/in/iuri-mignoni/'}>
                            <Icon as={RiLinkedinBoxFill} fontSize={'2xl'}/>
                        </Flex>
                        <Flex as='a' target="_blank" href={'https://github.com/mignnoni'}>
                            <Icon as={RiGithubFill} fontSize={'2xl'} />
                        </Flex>
                    </HStack>
                )}
            </Flex>
            <Flex flex="4" as="header" justify={'center'} scrollBehavior={'smooth'}>
                {isWideVersion && (
                    <HStack spacing={[8, 12, 24]} fontSize={['lg', 'xl']}>
                        <Text as='a' href="#experience" _hover={{ color: 'purple.400' }}>
                            <Translator path="header.experience" />
                        </Text>
                        <Text as='a' href="#projects" _hover={{ color: 'purple.400' }}>
                            <Translator path="header.projects" />
                        </Text>
                        <Text as='a' href="#technologies" _hover={{ color: 'purple.400' }}>
                            <Translator path="header.technologies" />
                        </Text>
                    </HStack>
                )}
            </Flex>
            <Flex flex="1" justify={'flex-end'} mr={1}>
                <LanguageSelector />
            </Flex>
        </Flex>
    )
}