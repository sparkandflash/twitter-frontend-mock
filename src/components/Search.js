import { VStack, Text, Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
function Search() {
    return (


        <VStack paddingTop='20px' paddingRight='80px' paddingLeft='20px' w='400px' borderLeftWidth='1px' minH={'100%'} >

            <InputGroup marginLeft= '30px'>
                <InputLeftElement

                    bgColor='rgb(235, 237, 237)'
                    pointerEvents='none'
                    borderRadius='20px'
                    children={<Search2Icon bgColor='rgb(235, 237, 237)' color='gray.500' />}
                />
                <Input borderColor='rgb(247, 249, 249)' w='270px' borderRadius='20px' bgColor='rgb(235, 237, 237)' placeholder='search twitter' />
            </InputGroup>

            <Box   w='270px' bgColor='rgb(247, 249, 249)' borderColor='rgb(247, 249, 249)' borderWidth='1px' paddingLeft='20px' paddingTop='10px' borderRadius='lg' h='300px'> <Text  bgColor='rgb(247, 249, 249)' fontSize='xl' as='b'>what 's happening</Text></Box>

            <Box   w='270px' bgColor='rgb(247, 249, 249)' borderColor='rgb(247, 249, 249)' borderWidth='1px' p='20px' borderRadius='lg' h='300px'>  <Text  bgColor='rgb(247, 249, 249)' fontSize='xl' as='b'>Who to follow</Text> </Box>

        </VStack>


    );
}

export default Search;