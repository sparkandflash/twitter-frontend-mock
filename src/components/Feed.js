//infinite scroll
import { VStack, Spacer, Text, Box, Button, Flex } from '@chakra-ui/react'

function Feed() {
    return (

        <Flex flexDirection='column'  flex="auto">
            <Box p='10px' h='300px' borderBottomWidth='2px' minW={'100%'}>
            <Text fontSize='lg' as='b'>Home</Text>
<Box marginTop={200}>
    <Button></Button>   <Button>Tweet</Button></Box>

            </Box> 
           <Box p='10px' >  <Text>post</Text> </Box>
          
            {/*scrolling posts */}

        </Flex>
    );
}

export default Feed;