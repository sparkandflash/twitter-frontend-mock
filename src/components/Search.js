import {VStack, Text, Input, Box} from '@chakra-ui/react'

function Search() {
    return (
        
   
        <VStack  paddingTop={1} paddingInline={5} w='400px' borderLeftWidth='1px' minH={'100%'} >
        <Input w='270px' borderColor='rgb(247, 249, 249)' bgColor='rgb(235, 237, 237)' borderRadius='20px' placeholder='search twitter' />
        <Box w='270px' bgColor='rgb(247, 249, 249)' borderColor='rgb(247, 249, 249)'  borderWidth='1px'p='20px' borderRadius='lg' h='300px'> <Text as='b'>what 's happening</Text></Box>
        
        <Box w='270px' bgColor='rgb(247, 249, 249)' borderColor='rgb(247, 249, 249)' borderWidth='1px' p='20px' borderRadius='lg' h='300px'>  <Text as='b'>who to follow</Text> </Box>
      
        </VStack>
       
        
    );
  }
  
  export default Search;