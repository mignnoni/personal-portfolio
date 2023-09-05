import { SimpleGrid } from "@chakra-ui/react";
import { Technology } from "./Technology";

export function Technologies() {
    return (
        <SimpleGrid minChildWidth={40} spacing={[4, 12]}>
            <Technology name=".NET" imagePath={'csharp.png'} />
            <Technology name="React" imagePath={'react.png'} />
            <Technology name="Angular" imagePath={'angular.svg'} />
            <Technology name="Next.js" imagePath={'next.png'} />
        </SimpleGrid>
    );
}