import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
    return (
        <Flex minH={'100vh'} minW={'100vw'}>
            <Flex w="100%" my={12} minW={1200} mx="auto" maxW={1200} align={'center'} flexDir={'column'}>
                <Header />
                {/* <Outlet /> */}
            </Flex>
        </Flex>
    )
}