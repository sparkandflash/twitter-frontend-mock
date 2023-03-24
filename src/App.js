import {  Flex } from '@chakra-ui/react'
import Menu from './components/Menu.js';
import Feed from './components/Feed.js'; 

import Search from './components/Search.js';
function App() {
  return (
    <Flex maxWidth={'100vw'} >
      <Menu />
      <Feed />
      
      <Search />
    </Flex>


  );
}

export default App;
