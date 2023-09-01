import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
    return (
        <Flex minH={'100vh'}>
            <Flex w='full' my={12} mx="auto" maxW={900} px={[8, 8, 8, 0]} align={'center'} flexDir={'column'}>
                <Header />
                <Outlet />
            </Flex>
        </Flex>
    )
}