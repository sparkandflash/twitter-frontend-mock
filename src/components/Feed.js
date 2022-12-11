//infinite scroll
import { VStack, Text, Box, Flex } from '@chakra-ui/react'

function Feed() {
    return (

        <Flex padding={2} flex="auto">
            <Box h='400px' Width={'100%'}>
            <Text fontSize='lg' as='b'>Home</Text>
            </Box>
           <Box>  <Text>post</Text> </Box>
          
            {/*scrolling posts */}

        </Flex>
    );
}

export default Feed;