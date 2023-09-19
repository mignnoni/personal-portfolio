import { Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { TechnologyTag } from "../TechnologyTag";

interface ExperienceProps {
    role: string;
    company: string;
    period: string;
    technologies: string[];
    description: string[];
}

export function Experience({ role, company, period, technologies, description }: ExperienceProps) {
    return (
        <Flex w='full' bgColor={'gray.800'} border={'1px'} rounded={'2xl'} flexDir={'column'} p={[4, 6]} borderColor={'purple.500'}>
            <Heading size={'md'} as='h4' mb={2} fontFamily={'Nunito'}>{role}</Heading>
            <Heading size={'sm'} as='h5' color={'gray.400'} fontFamily={'Nunito'}>{company}</Heading>
            <Heading size={'sm'} as='h5' color={'gray.400'} fontFamily={'Nunito'}>{period}</Heading>
            <Stack w='full' mt={6} spacing={2} color='gray.200' mb={4}>
                {description.map((el, index) => (
                    <Text key={index}>{el}</Text>
                ))}
            </Stack>
            <HStack flexWrap={'wrap'} spacing={3}>
                {technologies.map((el, index) => (
                    <TechnologyTag name={el} key={el + index} />
                ))}
            </HStack>
        </Flex>
    );
}