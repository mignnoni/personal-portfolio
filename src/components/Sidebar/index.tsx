import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Translator } from "../I18n/Translator";

export function Sidebar() {

    const { isOpen, onClose } = useSidebarDrawer();

    return (
        <Drawer isOpen={isOpen} placement={"left"} onClose={onClose} autoFocus={false} returnFocusOnClose={false}>
            <DrawerOverlay>
                <DrawerContent bgColor={'gray.900'}>
                    <DrawerCloseButton mt="6" color={'white'}/>
                    <DrawerHeader>
                        <Translator path="sidebar.title"/>
                    </DrawerHeader>
                    <DrawerBody>
                        <SidebarNav />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
}