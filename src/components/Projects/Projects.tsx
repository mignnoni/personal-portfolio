import { Stack } from "@chakra-ui/react";
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
   ],
   videoRef: 'videositepsicalendar.mp4'
}

const comparerProps: IProject = {
    name: 'Comparador',
    period: '2023',
    tags : ['.NET', 'React', 'Electron', 'Windows Services', 'Chakra UI', 'ExcelJS'],
    paragraphs: [
        `O Comparador foi desenvolvido sob medida para atender às necessidades específicas de uma empresa de contabilidade. 
        A aplicação realiza a importação de arquivos gerados por outro sistema contábil e, a partir da leitura desses arquivos, 
        permite a aplicação de diversos filtros personalizáveis de acordo com as necessidades dos usuários.`,

        `Além disso, a aplicação oferece a flexibilidade de gerar relatórios em formato de planilha ou diretamente em PDF.
        `,

        `Para que a aplicação fosse utilizada no desktop e ainda tivesse uma interface amigável, foi utilizado o Electron para o front-end, 
        e o back-end como um serviço do Windows.
        `
   ],
   images: ['comparer001.png', 'comparer002.png', 'comparer003.png', 'comparer004.png', 'comparer005.png']
}

export function Projects() {
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