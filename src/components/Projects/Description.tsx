import { Stack, Text } from "@chakra-ui/react";

interface IDescriptionProps {
    paragraphs: string[];
}

export function Description({ paragraphs }: IDescriptionProps) {

    return (
        <Stack w='full' mt={6} spacing={2} color='gray.200' mb={4}>
            {paragraphs.map((paragraph, index) => (
                <Text key={index + paragraph.substring(0, 3)}>
                    {paragraph}
                </Text>
            ))}
        </Stack>
    );
}