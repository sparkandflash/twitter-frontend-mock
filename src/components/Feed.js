//infinite scroll
import { VStack, HStack, Image, Spacer, Input, Text, Box, Button, Flex } from '@chakra-ui/react'
import Twi_post from './Twi_post';
function Feed() {
    return (

        <Flex flexDirection='column' flex="auto">
            <Box p='10px' h='50px' minW={'100%'}>
                <Text fontSize='lg' as='b'>Home</Text>
            </Box>

            <HStack> <Box  w="50%" p='4'> <Text align="center" >For You</Text> </Box>  <Box w='50%' p='4'> <Text align="center" >following </Text> </Box> </HStack>

            <Box padding='10px' h='200px' borderTopWidth='1px' borderBottomWidth='1px' minW={'100%'}>
                <HStack  height="130px">
                    <Image
                        marginBottom='42px'
                        borderRadius='full'
                        boxSize='48px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />

                    <Input  variant='unstyled' placeholder="What's happening ?" /> 

                     </HStack>

                <HStack>  <Button></Button>  <Spacer /> <Button disabled='true' borderRadius={50} colorScheme={'twitter'}>Tweet</Button>
                </HStack>
            </Box>

            <Box p='10px' >  <Twi_post /> </Box>
           
            {/*scrolling posts */}

        </Flex>
    );
}

export default Feed;