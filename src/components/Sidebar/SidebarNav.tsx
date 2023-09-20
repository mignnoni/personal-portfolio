import { Stack, Box } from "@chakra-ui/react";
import { BiCodeBlock } from "react-icons/bi";
import { MdLibraryBooks, MdOutlineWorkHistory } from "react-icons/md";
import { SidebarItem } from "./SidebarItem";
import { useTranslation } from "react-i18next";

export function SidebarNav() {
    const { t } = useTranslation();

    return (
        <Stack spacing={"12"} align="flex-start">
        <Box w="full">
            <Stack spacing={"4"} mt={4} align={"stretch"}>
                <SidebarItem icon={BiCodeBlock} href={'technologies'} title={t('header.technologies')} />
                <SidebarItem icon={MdOutlineWorkHistory} href={'experience'} title={t('header.experience')} />
                <SidebarItem icon={MdLibraryBooks} href={'projects'} title={t('header.projects')} />
            </Stack>
        </Box>
    </Stack>
    );
}