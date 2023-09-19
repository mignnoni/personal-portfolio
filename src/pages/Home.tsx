import { Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { Intro } from "../components/Intro";
// import { Technologies } from "../components/Technologies/Technologies";
import { Experiences } from "../components/Experiences/Experiences";
import { Projects } from "../components/Projects/Projects";
import { Technologies } from "../components/Technologies/Technologies";
import { Translator } from "../components/I18n/Translator";

export function Home() {
    return (
        <Stack w={'full'} spacing={[8, 12]} scrollBehavior={'smooth'}>
            <Flex
                justify={'space-between'}
                mt={[8, 12]}
                flexDir={['column-reverse', 'row']}
                align={['center', 'initial']}
            >
                <Stack textAlign={['center', 'initial']}>
                    <Heading><Translator path="headline.hi" /></Heading>
                    <Heading as='h1'><Translator path="headline.me" /> Iuri Mignoni,</Heading>
                    <Heading as='h2' color={'purple.300'}><Translator path="headline.role" /></Heading>
                </Stack>
                <Flex align={'center'} mb={[4, 0]}>
                    <Image w={['80px', '120px']} src={'/code_icon.png'} />
                </Flex>
            </Flex>
            <Intro />
            <Heading as='h2' id='technologies'><Translator path="header.technologies" /></Heading>
            <Technologies />
            <Heading as='h2' id='experience'><Translator path="header.experience" /></Heading>
            <Experiences />
            <Heading as='h2' id='projects'><Translator path="header.projects" /></Heading>
            <Projects />
        </Stack>
    );
}