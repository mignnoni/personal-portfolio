import { SimpleGrid } from "@chakra-ui/react";
import { Technology } from "./Technology";

export function Technologies() {
    return (
        <SimpleGrid minChildWidth={40} spacing={[4, 12]}>
            <Technology rating={5} name=".NET" imagePath={'csharp.png'} />
            <Technology rating={5} name="React" imagePath={'react.png'} />
            <Technology rating={5} name="Angular" imagePath={'angular.svg'} />
            <Technology rating={4} name="Next.js" imagePath={'next.png'} />
        </SimpleGrid>
    );
}