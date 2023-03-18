import { HStack, Image, Heading, Text, Box } from "@chakra-ui/react"
let twitter_user = {
  name: "some twitter user",
  image: "https://bit.ly/dan-abramov"
}
function TwiPost() {
  return (
    <Box p="10px" borderBottomWidth="1px" minW={"100%"}>
      <HStack spacing="14px">
        <Image
          marginBottom="190px"
          borderRadius="full"
          boxSize="48px"
          src={twitter_user.image}
          alt="Dan Abramov"
        />
        <Box height="200px">
          <Heading marginTop="-20px" size="sm">
            {twitter_user.name}
          </Heading>
          <Text></Text>
        </Box>
      </HStack>
    </Box>
  )
}
export default TwiPost
