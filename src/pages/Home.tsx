import { Stack } from "@chakra-ui/react";
import { Intro } from "../components/Intro";
import { Experiences } from "../components/Experiences/Experiences";
import { Technologies } from "../components/Technologies/Technologies";
import { GetTranslation } from "../components/I18n/Translator";
import { Section } from "../components/Section";
import { Me } from "../components/Me";
import { Projects } from "../components/Projects/Projects";

export function Home() {

    return (
        <Stack w={'full'} spacing={[8, 12]} scrollBehavior={'smooth'}>
            <Me />
            <Intro />
            <Section title={GetTranslation('header.technologies')} id='technologies'>
                <Technologies />
            </Section>
            <Section title={GetTranslation('header.experience')} id='experience'>
                <Experiences />
            </Section>
            <Section title={GetTranslation('header.projects')} id='projects'>
                <Projects />
            </Section>
        </Stack>
    );
}