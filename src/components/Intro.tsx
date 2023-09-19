import { Box, Flex, HStack, Circle, Stack, Highlight, Text, SystemStyleObject } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface TextProp {
    text: string;
    highlights: string | string[]
    highlightStyle?: SystemStyleObject | undefined;
}


export function Intro() {

    const { t } = useTranslation();

    const introBody = t('aboutMe', { returnObjects: true }) as TextProp[];

    return (
        <Flex
        flexDir={'column'}
        bgColor={'gray.900'}
        borderRadius={12} minH={'400px'}
        borderColor={'gray.600'}
        borderWidth={1}
        fontFamily={`'Source Code Pro', monospace`}
        boxShadow={'2xl'}
    >
        <Flex bgColor={'gray.600'} w='full' h={8} borderTopRadius={10} p={1} textAlign={'center'} justify={'space-between'}>
            <HStack spacing={2} h='full' flex={1} ml={2}>
                <Circle size={3} bg='red.400' />
                <Circle size={3} bg='yellow.400' />
                <Circle size={3} bg='green.400' />
            </HStack>
            <Text flex={3}>Hello, World!</Text>
            <Box flex={1}></Box>
        </Flex>
        <Stack spacing={4} p={6}>
            {introBody.map((el, index) => (
                <Text key={index} wordBreak={'break-word'}>
                    <Highlight query={el.highlights ?? ''} styles={el?.highlightStyle}>
                        {el.text}
                    </Highlight>
                </Text>
            ))}
        </Stack>
    </Flex>
    );
}