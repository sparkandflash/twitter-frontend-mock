//infinite scroll
import {  HStack, Image, Spacer,  Text, Textarea, Box, Button, Flex } from '@chakra-ui/react'
import TwiPost from './TwiPost';
function Feed() {
    return (

        <Flex flexDirection='column' flex="auto">
            <Box p='10px' h='50px' minW={'100%'}>
                <Text fontSize='lg' className='menu-home' as='b'>Home</Text>
            </Box>

            <HStack> <Box w="50%" className='tab-selection' p='4'> <Text fontFamily='chirp-medium-web' className='tab-selection-text' align="center" >For You</Text> </Box>  <Box className='tab-selection' w='50%' p='4'> <Text className='tab-selection-text' fontFamily='chirp-medium-web' align="center" >following </Text> </Box> </HStack>

            <Box paddingLeft='15px' paddingRight="15px" h='200px' borderTopWidth='1px'  borderBottomWidth='1px' minW={'100%'}>
                <HStack height="130px">
                    <Image
                        marginBottom='42px'
                        borderRadius='full'
                        boxSize='48px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                    <Textarea resize="none" fontSize={19}  variant='unstyled' className='place-holder-textarea' placeholder="What's happening ?" />

                </HStack>

                <HStack>  <Button></Button>  <Spacer /> <Button disabled='true' borderRadius={50} colorScheme={'twitter'}>Tweet</Button>
                </HStack>
            </Box>

            <Box >  <TwiPost /> </Box>

            {/*scrolling posts */}

        </Flex>
    );
}

export default Feed;