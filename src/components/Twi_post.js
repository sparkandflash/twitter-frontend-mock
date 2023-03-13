import { HStack, Image, Heading, Text, Box, Button } from '@chakra-ui/react'
let twitter_user = {
    name: "some twitter user",
    image: 'https://bit.ly/dan-abramov'
}
function Twi_post(user) {

    return (
        <Box borderBottomWidth='1px' minW={'100%'}  >
            <HStack  spacing='14px' > 
                <Image
                 marginBottom='190px'
                borderRadius='full'
                boxSize='48px'
                src={twitter_user.image}
                alt='Dan Abramov'
            />
                <Box height= "200px">
                    <Text >
                        <Heading marginTop="-20px" as='h6' size='sm'>
                            {twitter_user.name}
                        </Heading>
                    </Text>
                </Box></HStack>
        </Box>
    )
}
export default Twi_post;