import {VStack, Text, Input, Box} from '@chakra-ui/react'

function Search() {
    return (
        <>
        <VStack>
        <Input placeholder='search twitter' />
        <Text as='b'>whats happening</Text>
        <Text as='b'>who to follow</Text>
        </VStack>
        </>
    );
  }
  
  export default Search;