import { HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDropDownLine } from "react-icons/ri";

export function LanguageSelector() {

    const { i18n } = useTranslation();

    const [ language, setLanguage ] = useState<string>(() => {
        return i18n.language;
    });

    function handleChangeLanguage(lang: string): void {

        if (lang != language) {
            i18n.changeLanguage(lang);
            setLanguage(lang);
        } 
    }

    return (
        <Menu size={'sm'}>
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
            <HStack>
               {language.toLowerCase() == 'pt-br' ? <Text>PT</Text> : <Text>EN</Text> } <Icon as={RiArrowDropDownLine} />
            </HStack>
            </MenuButton>
            <MenuList bgColor={'gray.800'} maxW={'fit-content'}>
                <MenuItem bgColor={'gray.800'} _hover={{ bg: 'purple.500' }} onClick={() => handleChangeLanguage('pt-br')}>Português - Brasil</MenuItem>
                <MenuItem bgColor={'gray.800'} _hover={{ bg: 'purple.500' }} onClick={() => handleChangeLanguage('en-US')}>English</MenuItem>
            </MenuList>
        </Menu>
    );
}