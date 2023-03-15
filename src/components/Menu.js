import { VStack, Button, GridItem, Text, Box } from '@chakra-ui/react'
import menuData from '../menuData';

function Menu() {
    return (
        <Box marginLeft='70px'>
            <VStack padding={2} w='260px' borderRightWidth='1px' minH={'100%'} alignItems='flex-start'  >
                
            <Text fontSize='xl' className='menu-home' paddingTop={3} paddingBottom={2} 
            paddingLeft={3}  as='b'>Home</Text>
                {
                    menuData.menuName && menuData.menuName.map(item => {
                        return (
                            <GridItem key={item.name}>
                               {/* <a href={item.url} target=''><i className={item.className}></i></a> */} 
                               <Text fontSize='lg' p={3} >{item.name}</Text>
                            </GridItem>
                        )
                    }
                    )
                }
                <Button w='220px' bgColor='rgb(29, 155, 240)' size='lg' borderRadius='50px'>
                    tweet
                </Button>
            </VStack>
        </Box>
    );
}

export default Menu;