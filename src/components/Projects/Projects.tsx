import { Box } from "@chakra-ui/react";
import { Project } from "./Project";
import { Description } from "./Description";
import { IProject } from "../../interfaces/IProject";

const psiCalendarProps: IProject = {
    name: 'PsiCalendar',
    period: '2022 - Presente',
    tags : ['.NET', 'React', 'Next.js', 'Chakra UI', 'MySQL', 'EF Core', 'Docker', 'Vercel'],
    paragraphs: [
        `O PsiCalendar é uma aplicação web projetada para profissionais que atuam na área de psicologia clínica.
        Ele oferece uma maneira eficaz de gerenciar todas as facetas do negócio, desde o agendamento de consultas até o acompanhamento financeiro.`,

        `Os profissionais podem facilmente agendar e acompanhar consultas, visualizar uma agenda semanal intuitiva,
        gerar evoluções de consultas para pacientes e criar recibos de pagamento. Além disso, a aplicação fornece uma visão geral abrangente de faltas, 
        pagamentos e valores a receber, permitindo que os profissionais mantenham um controle preciso de suas práticas clínicas.
        `,

        `A aplicação foi desenvolvida principalmente com as tecnologias listadas abaixo, e atualmente já está sendo utilizada por profissionais da área.
        `
   ]
}

export function Projects() {
    return (
        <Box>
            <Project
                name={psiCalendarProps.name}
                period={psiCalendarProps.period}
                tags={psiCalendarProps.tags}            
            >
                <Description paragraphs={psiCalendarProps.paragraphs} />
            </Project>
        </Box>
    );

}