import { Box, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface FiveStarsIconProps {
    numberFilled: number;
}



export function FiveStarsIcon(props: FiveStarsIconProps) {

    const [ icons, ] = useState<any[]>(() => {

        const filledStars = props.numberFilled;
        const emptyStars = 5 - filledStars;

        const fiveStars = [];

        for (let index = 0; index < filledStars; index++) {
            fiveStars.push(<Icon key={`${index}-filled`} as={AiFillStar} />)
        }

        for (let index = 0; index < emptyStars; index++) {
            fiveStars.push(<Icon key={`${index}-empty`} as={AiOutlineStar} />)
        }

        return fiveStars;
    });

    return (
        <Box>
            {icons}
        </Box>
    );
}