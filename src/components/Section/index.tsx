import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionProps {
    title: string;
    id: string;
    children: ReactNode;
}

export function Section({ title, id, children }: SectionProps) {
    return (
        <Box as='section'>
            <Heading as='h2' id={id} mb={8}>{title}</Heading>
            {children}
        </Box>
    );
}