import { Text } from "@chakra-ui/react";

interface TechonologyTagProps {
    name: string;
}

export function TechnologyTag(props: TechonologyTagProps) {
    return (
        <Text rounded={'full'} color={'teal.200'} fontWeight={'bold'} fontSize={'sm'} bgColor={'teal.600'} px={3} py={1}>
            {props.name}
        </Text>
    );
}