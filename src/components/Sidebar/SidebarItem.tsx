import { Box, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

interface SidebarItemProps {
    icon: ElementType;
    href: string;
    title: string;
}

export function SidebarItem({ icon, href, title }: SidebarItemProps) {

    const { onClose } = useSidebarDrawer();

    function handleSidebarItemClick(e: React.MouseEvent<HTMLDivElement>, sectionId: string) {
        e.preventDefault();

        const section = document.getElementById(sectionId);

        if (section)
            section.scrollIntoView({ behavior: 'smooth' });

        onClose();
    }

    return (
        <Box
            as={'a'}
            display={'flex'}
            borderRadius={12}
            bgColor={'gray.800'}
            alignItems={'center'}
            color={'white'} 
            p={3}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleSidebarItemClick(e, href)}
        >
            <Icon as={icon} fontSize={20} />
            <Text ml={4} fontWeight={'medium'}>{title}</Text>
        </Box>
    );
}