import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure();

    useEffect(() => {
        disclosure.onClose()
    }, [])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);