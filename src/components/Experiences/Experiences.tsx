import { Box } from "@chakra-ui/react";
import { Experience } from "./Experience";
import { useTranslation } from "react-i18next";

interface ExperienceTranslationObject {
    role: string;
    company: string;
    period: string;
    description: string[];
}

export function Experiences() {
    const { t } = useTranslation();
    const experienceSirros = t('experience.sirros', { returnObjects: true }) as ExperienceTranslationObject;

    return (
        <Box>
            <Experience 
                role={experienceSirros.role}
                company={experienceSirros.company}
                period={experienceSirros.period}
                description={experienceSirros.description}
                technologies={['.NET', 'Angular', 'Angularjs', 'Typescript', 'Azure Service Bus', 'SignalR', 'Background Services',
            'SQL Server', 'MongoDB', 'Tailwind', 'Material UI']}
            />
        </Box>
    );

}