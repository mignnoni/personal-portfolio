import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function DefaultLayout() {
    return (
        <Flex minH={'100vh'}>
            <Flex w='full' my={12} mx="auto" maxW={900} px={[4, 6, 8, 0]} align={'center'} flexDir={'column'}>
                <Header />
                <Outlet />
                <Sidebar />
            </Flex>
        </Flex>
    )
}