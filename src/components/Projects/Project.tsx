import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import { TechnologyTag } from "../TechnologyTag";
import { useRef } from "react";
import videojs from "video.js";
import { VideoJS } from "../Video/VideoJS";
import { IProjectProps } from "../../interfaces/IProject";
import { SlideProjectsImages } from "./SlideProjectsImages";


export function Project({ children, name, period, tags, videoRef, images }: IProjectProps) {

    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: videoRef,
            type: 'video/mp4'
        }]
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePlayerReady = (player: any) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };


    return (
        <Flex w='full' bgColor={'gray.800'} border={'1px'} rounded={'2xl'} flexDir={'column'} p={[4, 6]} borderColor={'purple.500'}>
            <Heading size={'md'} as='h4' mb={2} fontFamily={'Nunito'}>{name}</Heading>
            <Heading size={'sm'} as='h5' color={'gray.400'} fontFamily={'Nunito'}>{period}</Heading>
            {videoRef != null && (
                <Box maxW={'600px'} w='full' mx='auto' my={4} boxShadow={'xl'}>
                    <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                </Box>
            )}
            {images != null && (
                <Box maxW={'600px'} w='full' mx='auto' my={4}>
                    <SlideProjectsImages paths={images} />
                </Box>
            )}
            {children}
            <HStack flexWrap={'wrap'} spacing={3}>
                {tags.map((tag, idx) => (
                    <TechnologyTag name={tag} key={idx + tag} />
                ))}
            </HStack>
        </Flex>
    );
}