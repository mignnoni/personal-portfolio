import { Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { Translator } from "./I18n/Translator";

export function Me() {
    return (
        <Flex
            justify={'space-between'}
            mt={[8, 12]}
            flexDir={['column-reverse', 'row']}
            align={['center', 'initial']}
        >
            <Stack textAlign={['center', 'initial']}>
                <Heading>
                    <Translator path="headline.hi" />
                </Heading>
                <Heading as='h1'>
                    <Translator path="headline.me" /> Iuri Mignoni,
                </Heading>
                <Heading as='h2' color={'purple.300'}>
                    <Translator path="headline.role" />
                </Heading>
            </Stack>
            <Flex align={'center'} justify={'flex-end'} mb={[4, 0]}>
                <Image w={['80px', '120px']} src={'/code_icon.png'} alt="code icon" />
            </Flex>
        </Flex>
    );
}