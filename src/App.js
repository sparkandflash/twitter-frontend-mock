import { Divider, HStack, Box } from '@chakra-ui/react'
import Menu from './components/Menu.js';
import Feed from './components/Feed.js';
import Search from './components/Search.js';
function App() {
  return (
    <div >
      <HStack>
        <Menu />
        <Divider  color='black' orientation='vertical' />
        <Feed />
        <Divider color='black' orientation='vertical' />
        <Search />
      </HStack>
    </div>
  );
}

export default App;
