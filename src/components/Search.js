import {
  VStack,
  Text,
  Input,
  Spacer,
  InputGroup,
  Image,
  InputLeftElement,
  Box
} from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import searchData from "../searchData"
function Search() {
  return (
    <VStack
      paddingTop="20px"
      paddingRight="80px"
      paddingLeft="20px"
      w="500px"
      borderLeftWidth="1px"
      minH={"100%"}
    >
      <InputGroup marginLeft="30px">
        <InputLeftElement
          bgColor="rgb(235, 237, 237)"
          pointerEvents="none"
          borderRadius="20px"
          children={
            <Search2Icon bgColor="rgb(235, 237, 237)" color="gray.500" />
          }
        />
        <Input
          borderColor="rgb(247, 249, 249)"
          w="370px"
          borderRadius="20px"
          bgColor="rgb(235, 237, 237)"
          fontFamily="chirp-regular-web"
          placeholder="Search Twitter"
        />
      </InputGroup>

      <Box
        display="block"
        w="370px"
        bgColor="rgb(247, 249, 249)"
        borderColor="rgb(247, 249, 249)"
        borderWidth="1px"
        paddingLeft="20px"
        paddingTop="10px"
        borderRadius="lg"
        h="450px"
      >
        {" "}
        <Text
          fontFamily="chirp-heavy-web"
          bgColor="rgb(247, 249, 249)"
          fontSize="xl"
          as="b"
        >
          what &#39;s happening
        </Text>
        <Box
          paddingTop="15px"
          maxHeight="300px"
          paddingRight="15px"
          display="flex"
          bgColor="rgb(247, 249, 249)"
        >
          <div className="whthap-box-div">
            <Text
              fontSize="14px"
              color="GrayText"
              fontFamily="chirp-regular-web"
              bgColor="rgb(247, 249, 249)"
            >
              {searchData.whtshap[0].content} · {searchData.whtshap[0].sidetext}
            </Text>
            <Text
              bgColor="rgb(247, 249, 249)"
              as="b"
              fontFamily="chirp-bold-web"
            >
              {" "}
              {searchData.whtshap[0].Heading}
            </Text>
          </div>
          <Spacer bgColor="rgb(247, 249, 249)" />
          <Image
            borderRadius="20%"
            boxSize="68px"
            objectFit="cover"
            src={searchData.whtshap[0]["image-url"]}
            alt="Dan Abramov"
          />
        </Box>
        <Box
          paddingTop="15px"
          maxHeight="300px"
          paddingRight="15px"
          display="flex"
          bgColor="rgb(247, 249, 249)"
        >
          <div className="whthap-box-div">
            <Text
              fontSize="14px"
              color="GrayText"
              fontFamily="chirp-regular-web"
              bgColor="rgb(247, 249, 249)"
            >
              {searchData.whtshap[1].content} · {searchData.whtshap[1].sidetext}
            </Text>
            <Text
              bgColor="rgb(247, 249, 249)"
              as="b"
              fontFamily="chirp-bold-web"
            >
              {" "}
              {searchData.whtshap[1].Heading}
            </Text>
          </div>
        </Box>
        <Box
          paddingTop="15px"
          maxHeight="300px"
          paddingRight="15px"
          display="flex"
          bgColor="rgb(247, 249, 249)"
        >
          <div className="whthap-box-div">
            <Text
              fontSize="14px"
              color="GrayText"
              fontFamily="chirp-regular-web"
              bgColor="rgb(247, 249, 249)"
            >
              {searchData.whtshap[2].content} · {searchData.whtshap[2].sidetext}
            </Text>
            <Text
              bgColor="rgb(247, 249, 249)"
              as="b"
              fontFamily="chirp-bold-web"
            >
              {" "}
              {searchData.whtshap[2].Heading}
            </Text>
          </div>
        </Box>
        <Box
          paddingTop="15px"
          maxHeight="300px"
          paddingRight="15px"
          display="flex"
          bgColor="rgb(247, 249, 249)"
        >
          <div className="whthap-box-div">
            <Text
              fontSize="14px"
              color="GrayText"
              fontFamily="chirp-regular-web"
              bgColor="rgb(247, 249, 249)"
            >
              {searchData.whtshap[3].content} · {searchData.whtshap[3].sidetext}
            </Text>
            <Text
              bgColor="rgb(247, 249, 249)"
              as="b"
              fontFamily="chirp-bold-web"
            >
              {" "}
              {searchData.whtshap[3].Heading} <br /> trending with{" "}
              {searchData.whtshap[3].trending_with}
            </Text>
          </div>
        </Box>
      </Box>

      <Box
        w="370px"
        bgColor="rgb(247, 249, 249)"
        borderColor="rgb(247, 249, 249)"
        borderWidth="1px"
        p="20px"
        borderRadius="lg"
        h="250px"
      >
        <Text bgColor="rgb(247, 249, 249)" fontSize="xl" as="b">
          Who to follow
        </Text>
        {searchData.who_to_follow &&
          searchData.who_to_follow.map((item) => {
            return (
              <Box key={item.name}>
                {/* <a href={item.url} target=''><i className={item.className}></i></a> */}
                <Text fontSize="lg" p={3}>
                  {item.name}
                </Text>
              </Box>
            )
          })}
      </Box>
    </VStack>
  )
}

export default Search
