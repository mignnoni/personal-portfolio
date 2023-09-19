import { Stack } from "@chakra-ui/react";
import { Project } from "./Project";
import { Description } from "./Description";
import { IProject } from "../../interfaces/IProject";
import { useTranslation } from "react-i18next";

interface ProjectTranslationProps {
    name: string;
    period: string;
    tags: string[];
    description: string[];
}

interface CurrentProjects {
    psiCalendar: ProjectTranslationProps;
    comparer: ProjectTranslationProps;
}


export function Projects() {

    const { t } = useTranslation();
    const projectTranslation = t('projects', { returnObjects: true }) as CurrentProjects;

    const psiCalendarProps: IProject = {
        name: projectTranslation.psiCalendar.name,
        period: projectTranslation.psiCalendar.period,
        tags : projectTranslation.psiCalendar.tags,
        paragraphs: projectTranslation.psiCalendar.description,
        videoRef: 'videositepsicalendar.mp4'
    }
    
    const comparerProps: IProject = {
        name: projectTranslation.comparer.name,
        period: projectTranslation.comparer.period,
        tags : projectTranslation.comparer.tags,
        paragraphs: projectTranslation.comparer.description,
        images: ['comparer001.png', 'comparer002.png', 'comparer003.png', 'comparer004.png', 'comparer005.png']
    }


    return (
        <Stack spacing={10}>
            <Project
                name={psiCalendarProps.name}
                period={psiCalendarProps.period}
                tags={psiCalendarProps.tags}
                videoRef={psiCalendarProps.videoRef}            
            >
                <Description paragraphs={psiCalendarProps.paragraphs} />
            </Project>
            <Project
                name={comparerProps.name}
                period={comparerProps.period}
                tags={comparerProps.tags}
                images={comparerProps.images}         
            >
                <Description paragraphs={comparerProps.paragraphs} />
            </Project>
        </Stack>
    );

}