export default {
    translations: {
        header: {
            experience: 'Experiência',
            projects: 'Projetos',
            technologies: 'Tecnologias'
        },
        sidebar: {
            title: 'Navegação'
        },
        headline: {
            hi: 'Olá',
            me: 'Sou o',
            role: 'Desenvolvedor Web Full Stack'
        },
        aboutMe: [
            {
                text: `Atuo profissionalmente como Desenvolvedor Web desde junho de 2022, e sou apaixonado pela área da programação!
            Desde 2020 venho estudando, desenvolvendo projetos pessoais e aplicações web completas para usuários e empresas.`,
                highlights: [],
                highlightStyle: {}
            },
            {
                text: `Atualmente estou cursando pós-graduação em Engenharia de Software na Unisinos. (2023 - 2024)`,
                highlights: ['pós-graduação em', 'Engenharia de Software'],
                highlightStyle: { color: 'purple.300' }
            },
            {
                text: `As principais tecnologias que domino são .NET, Angular e React, e tenho maior conhecimento com bancos de dados relacionais,
            apesar de trabalhar com NoSQL também.`,
                highlights: ['.NET', 'Angular', 'React'],
                highlightStyle: { color: 'purple.300' }
            },
            {
                text: `Mais algumas informações úteis sobre mim: Tenho 26 anos, possuo inglês fluente (ou quase isso), 
            gosto de viajar, sair com a namorada e amigos, assistir esportes em geral (principalmente futebol e basquete), gosto de assistir
            sitcoms e streams na Twitch, e também de tomar aquela(s) xícara(s) de café diariamente!`,
                highlights: ['úteis', '(s)'],
                highlightStyle: { textDecoration: 'line-through', color: 'purple.300' }
            }
        ],
        technologies: {
            seeAll: 'Ver todas'
        },
        experience: {
            sirros: {
                role: 'Desenvolvedor Full Stack',
                company: 'Sirros IoT',
                period: '2022 - Presente',
                description: [
                    `Desenvolvimento e manutenção de aplicações web robustas e escaláveis, principalmente com as tecnologias .NET, Angular e Angularjs.`,
                    `Implementação de Background Services no .NET para utilização serviços de fila / mensageria com o Azure Service Bus,
                     websockets com o SignalR, entre outros.`
                ]
            }
        },
        projects: {
            psiCalendar: {
                name: 'PsiCalendar',
                period: '2022 - Presente',
                tags : ['.NET', 'React', 'Next.js', 'Chakra UI', 'MySQL', 'EF Core', 'Docker', 'Vercel'],
                description: [
                    `O PsiCalendar é uma aplicação web projetada para profissionais que atuam na área de psicologia clínica.
                    Ele oferece uma maneira eficaz de gerenciar todas as facetas do negócio, desde o agendamento de consultas até o acompanhamento financeiro.`,
            
                    `Os profissionais podem facilmente agendar e acompanhar consultas, visualizar uma agenda semanal intuitiva,
                    gerar evoluções de consultas para pacientes e criar recibos de pagamento. Além disso, a aplicação fornece uma visão geral abrangente de faltas, 
                    pagamentos e valores a receber, permitindo que os profissionais mantenham um controle preciso de suas práticas clínicas.
                    `,
            
                    `A aplicação foi desenvolvida principalmente com as tecnologias listadas abaixo, e atualmente já está sendo utilizada por profissionais da área.
                    `
               ],
            },
            comparer: {
                name: 'Comparador',
                period: '2023',
                tags : ['.NET', 'React', 'Electron', 'Windows Services', 'Chakra UI', 'ExcelJS'],
                description: [
                    `O Comparador foi desenvolvido sob medida para atender às necessidades específicas de uma empresa de contabilidade. 
                    A aplicação realiza a importação de arquivos gerados por outro sistema contábil e, a partir da leitura desses arquivos, 
                    permite a aplicação de diversos filtros personalizáveis de acordo com as necessidades dos usuários.`,
            
                    `Além disso, a aplicação oferece a flexibilidade de gerar relatórios em formato de planilha ou diretamente em PDF.
                    `,
            
                    `Para que a aplicação fosse utilizada no desktop e ainda tivesse uma interface amigável, foi utilizado o Electron para o front-end, 
                    e o back-end como um serviço do Windows.
                    `
               ],
            }
        }
    }
}