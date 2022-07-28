import { StatusBar } from 'expo-status-bar';
import {HStack, Box, Text, Center} from 'native-base';

const Header = (props) => (

  <>
    <StatusBar style="auto" backgroundColor='#6200ee' />
     <Box safeAreaTop bg="#6200ee" />
     <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
       <HStack alignItems="center">
         <Text color="white" fontSize="20" fontWeight="bold">
           {props.title}
         </Text>
       </HStack>
     </HStack>
     </>


)

export default Header;
