import {VStack, Text, Box} from '@chakra-ui/react'

function Menu() {
    return (
        <>
        <VStack>
        <Text as='b'>home</Text>
            <Text>Explore</Text>
            <Text>notifications</Text>
            <Text>messages</Text>
            <Text>bookmarks</Text>
            <Text>lists</Text>
            <Text>profile</Text>
            <Text>more</Text>
        </VStack>
        </>
    );
  }
  
  export default Menu;