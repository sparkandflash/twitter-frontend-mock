//infinite scroll
import { HStack, Image, Spacer, Tab, TabList, Tabs, Text, Textarea, Box, Button, Flex } from '@chakra-ui/react'
import TwiPost from './TwiPost';
function Feed() {
    return (

        <Flex flexDirection='column' flex="auto">
            <Box p='10px' h='50px' minW={'100%'}>
                <Text fontSize='lg' className='menu-home' as='b'>Home</Text>
            </Box>

            {/*  <HStack> <Box w="50%" className='tab-selection' p='4'> <Text fontFamily='chirp-medium-web' className='tab-selection-text' align="center" >For You</Text> </Box>  <Box className='tab-selection' w='50%' p='4'> <Text className='tab-selection-text' fontFamily='chirp-medium-web' align="center" >following </Text> </Box> </HStack> */}
            <Tabs colorScheme={'twitter'} >
                <TabList>
                    <Box w="50%" align="center" className='tab-selection' >
                        <Tab ><Text fontFamily='chirp-bold-web' className='tab-selection-text' align="center" >For You</Text></Tab>
                    </Box>
                    <Box w="50%" align="center" className='tab-selection'>
                        <Tab ><Text className='tab-selection-text' fontFamily='chirp-bold-web' align="center" >following </Text> </Tab>
                    </Box>
                </TabList>
            </Tabs>
            <Box className='home-tweet-box' borderBottomWidth='1px' >
                <Box display='flex' >
                    <Image
                        marginBottom='50px'
                        borderRadius='full'
                        boxSize='48px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                    <Spacer padding={1}/>
                    <Textarea resize="none"  fontSize={19} variant='unstyled' className='place-holder-textarea' placeholder="What's happening ?" />
                </Box>
                <Box display='flex' >
                    <Button></Button>  <Spacer /> <Button disabled='true' borderRadius={50} colorScheme={'twitter'}>Tweet</Button>
                </Box>

            </Box>

            <Box >  <TwiPost /> </Box>

            {/*scrolling posts */}

        </Flex>
    );
}

export default Feed;