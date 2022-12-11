import {VStack, Text, Input, Box} from '@chakra-ui/react'

function Search() {
    return (
        
   
        <VStack  paddingTop={1} paddingInline={5} w='300px' borderLeftWidth='1px' minH={'100%'} >
        <Input borderRadius='20px' placeholder='search twitter' />
        <Box w='270px'  borderWidth='1px'p='20px' borderRadius='lg' h='300px'> <Text as='b'>whats happening</Text></Box>
        
        <Box w='270px' borderWidth='1px' p='20px' borderRadius='lg' h='300px'>  <Text as='b'>who to follow</Text> </Box>
      
        </VStack>
       
        
    );
  }
  
  export default Search;