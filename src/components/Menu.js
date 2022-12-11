import { VStack, Button, Text, Box } from '@chakra-ui/react'

function Menu() {
    return (
        <VStack padding={2} w='300px' borderRightWidth='1px' minH={'100%'}>
            <Text fontSize='lg' p={2} as='b'>Home</Text>
            <Text fontSize='lg' p={2} >Explore</Text>
            <Text fontSize='lg' p={2}>Notifications</Text>
            <Text fontSize='lg' p={2}>Messages</Text>
            <Text fontSize='lg' p={2}>Bookmarks</Text>
            <Text fontSize='lg' p={2}>Lists</Text>
            <Text fontSize='lg' p={2}>Profile</Text>
            <Text fontSize='lg' p={2}>More</Text>
            <Button w='220px' bgColor='rgb(29, 155, 240)' size='lg' borderRadius='50px'>
                tweet
            </Button>
        </VStack>

    );
}

export default Menu;